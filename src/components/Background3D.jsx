// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { useRef } from "react";
// import * as THREE from "three";

// function Model() {
//   const { scene } = useGLTF("/particles_tests_-_2.glb"); // put your .glb in public/
//   const modelRef = useRef();

//   useFrame(() => {
//     const scrollY = window.scrollY / 500; // adjust speed
//     if (modelRef.current) {
//       modelRef.current.rotation.y = scrollY;
//     }
//   });

//   return <primitive object={scene} ref={modelRef} scale={2} />;
// }

// export default function Background3D() {
//   return (
//     <Canvas style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
//       <ambientLight intensity={0.8} />
//       <directionalLight position={[5, 5, 5]} />
//       <Model />
//       <OrbitControls enableZoom={false} enablePan={false} />
//     </Canvas>
//   );
// }
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

export default function Background3D() {
  const totalSections = 4; // Landing, About, Services, Contact
  const rotationStep = (2 * Math.PI) / totalSections;

  const Model = () => {
    const { scene } = useGLTF("/flower.glb");
    const modelRef = useRef();
    const [currentSection, setCurrentSection] = useState(0);
    const [baseRotation, setBaseRotation] = useState(0);

    // Floating idle motion
    useFrame(({ clock }) => {
      if (modelRef.current) {
        const t = clock.getElapsedTime();
        modelRef.current.position.y += Math.sin(t * 2) * 0.002; // gentle up/down
        modelRef.current.position.x = 2 + Math.sin(t) * 0.05; // float slightly in X
      }
    });

    useEffect(() => {
      const handleScroll = () => {
        const sectionHeight = window.innerHeight;
        const newSection = Math.floor(window.scrollY / sectionHeight);
        if (newSection !== currentSection) {
          setCurrentSection(newSection);
          setBaseRotation(newSection * rotationStep);

          // Animate rotation and position
          gsap.to(modelRef.current.rotation, {
            y: newSection * rotationStep,
            duration: 1.5,
            ease: "power2.inOut",
          });

          // Add a "bubbling" bounce when changing sections
          gsap.fromTo(
            modelRef.current.position,
            { x: 2, y: 0 },
            {
              x: 2.2,
              y: 0.2,
              duration: 0.75,
              ease: "power1.inOut",
              yoyo: true,
              repeat: 1,
            }
          );
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [currentSection, rotationStep]);

    return <primitive object={scene} ref={modelRef} scale={2} position={[8, 0, 0]} />;
  };

  return (
    <Canvas 
      camera={{ position: [0, 0, 10], fov: 50 }}
    style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />
      <Model />
    </Canvas>
  );
}

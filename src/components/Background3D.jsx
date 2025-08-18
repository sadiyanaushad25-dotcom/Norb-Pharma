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
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";
// import { useRef, useState, useEffect } from "react";
// import gsap from "gsap";

// export default function Background3D() {
//   const totalSections = 4; // Landing, About, Services, Contact
//   const rotationStep = (2 * Math.PI) / totalSections;

//   const Model = () => {
//     const { scene } = useGLTF("/dna.glb");
//     const modelRef = useRef();
//     const [currentSection, setCurrentSection] = useState(0);
//     const [baseRotation, setBaseRotation] = useState(0);

//     // Floating idle motion
//     useFrame(({ clock }) => {
//       if (modelRef.current) {
//         const t = clock.getElapsedTime();
//         modelRef.current.position.y += Math.sin(t * 2) * 0.002; // gentle up/down
//         modelRef.current.position.x = 2 + Math.sin(t) * 0.05; // float slightly in X
//       }
//     });

//     useEffect(() => {
//       const handleScroll = () => {
//         const sectionHeight = window.innerHeight;
//         const newSection = Math.floor(window.scrollY / sectionHeight);
//         if (newSection !== currentSection) {
//           setCurrentSection(newSection);
//           setBaseRotation(newSection * rotationStep);

//           // Animate rotation and position
//           gsap.to(modelRef.current.rotation, {
//             y: newSection * rotationStep,
//             duration: 1.5,
//             ease: "power2.inOut",
//           });

//           // Add a "bubbling" bounce when changing sections
//           gsap.fromTo(
//             modelRef.current.position,
//             { x: 2, y: 0 },
//             {
//               x: 2.2,
//               y: 0.2,
//               duration: 0.75,
//               ease: "power1.inOut",
//               yoyo: true,
//               repeat: 1,
//             }
//           );
//         }
//       };

//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//     }, [currentSection, rotationStep]);

//     return <primitive object={scene} ref={modelRef} scale={2} position={[8, 0, 0]} />;
//   };

//   return (
//     <Canvas 
//       camera={{ position: [0, 0, 10], fov: 50 }}
//     style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
//       <ambientLight intensity={0.8} />
//       <directionalLight position={[5, 5, 5]} />
//       <Model />
//     </Canvas>
//   );
// }

// Background3D.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

// function Model({ scroll }) {
//   const group = useRef();
//   const { scene } = useGLTF("/dna.glb");

//   useFrame(() => {
//     if (group.current) {
//       const t = scroll.current;
//       const radiusX = 2;
//       const radiusZ = 1; // depth
//       const speed = 0.5;

//       // 3D elliptical path
//       group.current.position.x = Math.cos(t * speed) * radiusX;
//       group.current.position.z = Math.sin(t * speed) * radiusZ;

//       // Optional tilt for path
//       group.current.position.y = Math.sin(t * speed * 0.5) * 0.5;

//       // Spin around Y axis while moving
//       group.current.rotation.y = t * 0.5; // scroll-driven spin
//     }
//   });

//   return <primitive ref={group} object={scene} />;
// }

// export default function Background3D() {
//   const scroll = useRef(0);

//   useEffect(() => {
//     const onScroll = () => {
//       scroll.current = window.scrollY / 150; // Adjust divisor for speed
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <Canvas
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         zIndex: -1,
//         width: "100%",
//         height: "100%",
//       }}
//       camera={{ position: [0, 0, 5] }}
//     >
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} />
//       <Model scroll={scroll} />
//     </Canvas>
//   );
// }


function Model({ scroll, isMobile }) {
  const group = useRef();
  const { scene } = useGLTF("/dna.glb");

  useFrame(({ clock }) => {
    if (group.current && !isMobile) {
      const t = scroll.current;
      const time = clock.getElapsedTime();
      const radiusX = 2.8;  // smaller so it stays on the right
      const radiusZ = 1;    // depth
      const speed = 0.8;

      // Shift center to right side
      const rightShift = 2.5; // adjust for your layout

      // 3D elliptical path + shift
      group.current.position.x = rightShift + Math.cos(t * speed) * radiusX;
      group.current.position.z = Math.sin(t * speed) * radiusZ;

      // Floating effect (gentle up/down bob)
      group.current.position.y =
        Math.sin(t * speed * 0.5) * 0.5 + Math.sin(time * 1.5) * 0.1;

      // Spin around Y axis
      group.current.rotation.y = t * 0.5;
    }
  });

  return <primitive ref={group} object={scene} />;
}

export default function Background3D() {
  const scroll = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      scroll.current = window.scrollY / 350; // speed control
    };
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      {!isMobile && <Model scroll={scroll} isMobile={isMobile} />}
    </Canvas>
  );
}

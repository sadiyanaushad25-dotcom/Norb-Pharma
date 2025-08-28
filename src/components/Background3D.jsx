import * as THREE from "three"
import { Suspense, useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, Environment } from "@react-three/drei"
import { Html } from "@react-three/drei"

function Model({ scroll, ...props }) {
  const group = useRef()
  const { scene, animations } = useGLTF("/dna_animation.glb")
  const { actions } = useAnimations(animations, scene)

  // console.log("SCENE: ", scene)
  // console.log("ANIMATIONS: ", animations)
  // console.log("GROUP: ", group)
  const targetTime = useRef(0)

  // Play the animation once on load
  useEffect(() => {
    if (actions?.KeyAction) {
      actions.KeyAction.play()
    }
  }, [actions])
  useEffect(() => {
    if (actions?.KeyAction) {
      actions.KeyAction.play()
      actions.KeyAction.paused = true
    }

    // Update scroll progress on scroll event
    const handleScroll = () => {
      scroll.current = window.scrollY / (document.body.scrollHeight - window.innerHeight)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll() // init

    return () => window.removeEventListener("scroll", handleScroll)
  }, [actions])
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          // Make the material gray
          child.material.color = new THREE.Color("rgba(7, 7, 7, 1)")

          child.material.roughness = 0.5
          child.material.metalness = 0.9
          child.material.needsUpdate = true
        }
      })
    }
  }, [scene])

  useFrame((state) => {
    const progress = scroll.current;
    if (actions?.KeyAction) {
      const action = actions.KeyAction
      const clip = action._clip

      // target animation time from scroll
      const desiredTime = clip.duration * scroll.current * 0.5
      targetTime.current = THREE.MathUtils.lerp(
        targetTime.current,
        desiredTime,
        0.1
      )

      action.time = targetTime.current
    }
    const et = state.clock.elapsedTime
    // group.current.position.y = Math.sin((et  * 1) / 2) * 0.1
    // group.current.position.x = Math.sin((et  * 1) / 2) * 0.1
    group.current.rotation.x = Math.sin((et * 1) / 3) / 10
    group.current.rotation.y = Math.cos((et * 1) / 2) / 10
    group.current.rotation.z = Math.sin((et * 1) / 3) / 10

    group.current.traverse((child) => {
      if (child.isMesh) {
        const progress = scroll.current // 0 → 1

        // Start and end RGB values normalized (0-1)
        const start = { r: 7 / 255, g: 7 / 255, b: 7 / 255 }
        const end = { r: 1 / 255, g: 1 / 255, b: 1 / 255 }

        // Linear interpolation based on scroll
        const scrollColor = new THREE.Color(
          start.r + (end.r - start.r) * progress,
          start.g + (end.g - start.g) * progress,
          start.b + (end.b - start.b) * progress
        )

        // Smoothly transition
        child.material.color.lerp(scrollColor, 0.1)
      }
    })
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive
        object={scene}
        position={[8.5, 1, 1]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={[1, 0.3, 1.8]}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload("/dna_animation.glb")

export default function Background3D({ scroll }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", checkMobile)
    checkMobile()
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <Canvas
      shadows
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
      camera={{ position: [1, 1, 10], fov: 60 }}
    >
      {/* Lighting setup */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 10, 50]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* realistic environment reflections */}
      <Environment preset="studio" />

      <Suspense fallback={<Html center><div>Norb Pharma</div></Html>}>
        {/* {!isMobile && <Model scroll={scroll} />} */}
        <Model scroll={scroll} />
      </Suspense>
    </Canvas>
  )
}
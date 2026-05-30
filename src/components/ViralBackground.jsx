import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef, useEffect, useMemo } from 'react'
import * as THREE from 'three'

// ── Color journey (matches Story.jsx scroll gradient) ────────────────────────

const C_STOPS = [
  { p: 0.00, c: new THREE.Color('#4488ff') },
  { p: 0.15, c: new THREE.Color('#8b5cf6') },
  { p: 0.33, c: new THREE.Color('#e8843a') },
  { p: 0.52, c: new THREE.Color('#880000') },
  { p: 0.68, c: new THREE.Color('#00cc66') },
  { p: 0.85, c: new THREE.Color('#ffd700') },
  { p: 1.00, c: new THREE.Color('#ffd700') },
]

function lerpColor(progress, out) {
  let a = C_STOPS[0], b = C_STOPS[1]
  for (let i = 0; i < C_STOPS.length - 1; i++) {
    if (progress >= C_STOPS[i].p && progress <= C_STOPS[i + 1].p) {
      a = C_STOPS[i]; b = C_STOPS[i + 1]; break
    }
  }
  const t = (progress - a.p) / Math.max(0.001, b.p - a.p)
  out.lerpColors(a.c, b.c, THREE.MathUtils.clamp(t, 0, 1))
}

// ── Stable virus data (computed once per page load) ──────────────────────────

const VIRUSES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  pos: [
    (Math.random() - 0.5) * 26,
    (Math.random() - 0.5) * 15,
    (Math.random() - 0.5) * 8 - 3,
  ],
  scale: 0.2 + Math.random() * 0.55,
  rotV: [(Math.random() - 0.5) * 0.007, (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.005],
  floatOffset: Math.random() * Math.PI * 2,
  floatSpeed: 0.35 + Math.random() * 0.3,
  tips: Array.from({ length: 10 }, () => {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    return [Math.sin(phi) * Math.cos(theta), Math.sin(phi) * Math.sin(theta), Math.cos(phi)]
  }),
}))

// ── Single virus mesh ────────────────────────────────────────────────────────

function VirusParticle({ virus, scrollRef }) {
  const groupRef = useRef()
  const localColor = useMemo(() => new THREE.Color('#4488ff'), [])
  const lastScroll = useRef(-1)

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    const g = groupRef.current

    // Rotation
    g.rotation.x += virus.rotV[0]
    g.rotation.y += virus.rotV[1]
    g.rotation.z += virus.rotV[2]

    // Gentle oscillating drift
    g.position.y = virus.pos[1] + Math.sin(t * virus.floatSpeed + virus.floatOffset) * 0.3
    g.position.x = virus.pos[0] + Math.cos(t * virus.floatSpeed * 0.6 + virus.floatOffset) * 0.15

    // Color update (only when scroll changes meaningfully)
    const s = scrollRef.current
    if (Math.abs(s - lastScroll.current) > 0.008) {
      lastScroll.current = s
      lerpColor(s, localColor)
      g.traverse(child => {
        if (child.isMesh && child.material) {
          child.material.color.copy(localColor)
          if (child.material.emissive) child.material.emissive.copy(localColor)
        }
      })
    }
  })

  return (
    <group ref={groupRef} position={virus.pos} scale={virus.scale}>
      {/* Outer atmospheric shell */}
      <mesh>
        <sphereGeometry args={[1.5, 8, 8]} />
        <meshStandardMaterial transparent opacity={0.025} color="#4488ff" depthWrite={false} />
      </mesh>
      {/* Body */}
      <mesh>
        <sphereGeometry args={[1, 14, 14]} />
        <meshStandardMaterial
          color="#4488ff"
          transparent
          opacity={0.12}
          emissive="#4488ff"
          emissiveIntensity={0.55}
          depthWrite={false}
        />
      </mesh>
      {/* Wireframe over body */}
      <mesh>
        <sphereGeometry args={[1.01, 10, 10]} />
        <meshStandardMaterial
          color="#4488ff"
          wireframe
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </mesh>
      {/* Protein spike tips */}
      {virus.tips.map((tip, i) => (
        <mesh key={i} position={[tip[0] * 1.65, tip[1] * 1.65, tip[2] * 1.65]}>
          <sphereGeometry args={[0.18, 6, 6]} />
          <meshStandardMaterial
            color="#4488ff"
            transparent
            opacity={0.75}
            emissive="#4488ff"
            emissiveIntensity={1.0}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  )
}

// ── Ambient particle field ───────────────────────────────────────────────────

const PARTICLE_COUNT = 180
const PARTICLE_POSITIONS = new Float32Array(
  Array.from({ length: PARTICLE_COUNT * 3 }, () => (Math.random() - 0.5) * 32)
)

function ParticleField({ scrollRef }) {
  const pointsRef = useRef()
  const localColor = useMemo(() => new THREE.Color('#4488ff'), [])
  const lastScroll = useRef(-1)

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.012
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.008) * 0.05

    const s = scrollRef.current
    if (Math.abs(s - lastScroll.current) > 0.01) {
      lastScroll.current = s
      lerpColor(s, localColor)
      if (pointsRef.current.material) {
        pointsRef.current.material.color.copy(localColor)
      }
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[PARTICLE_POSITIONS, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#4488ff"
        size={0.04}
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

// ── Camera controller (mouse parallax) ──────────────────────────────────────

function CameraRig({ mouseRef }) {
  const { camera } = useThree()

  useFrame(() => {
    const [mx, my] = mouseRef.current
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mx * 0.04, 0.014)
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, my * 0.025, 0.014)
  })

  return null
}

// ── Main scene ───────────────────────────────────────────────────────────────

function Scene({ scrollRef, mouseRef }) {
  return (
    <>
      <ambientLight intensity={0.18} />
      <pointLight position={[10, 8, 8]} intensity={0.5} />
      <pointLight position={[-8, -6, -5]} intensity={0.22} />
      <CameraRig mouseRef={mouseRef} />
      <ParticleField scrollRef={scrollRef} />
      {VIRUSES.map(v => (
        <Float key={v.id} speed={0.8 + v.id * 0.1} rotationIntensity={0} floatIntensity={0.4}>
          <VirusParticle virus={v} scrollRef={scrollRef} />
        </Float>
      ))}
    </>
  )
}

// ── Export ───────────────────────────────────────────────────────────────────

export default function ViralBackground() {
  const scrollRef = useRef(0)
  const mouseRef = useRef([0, 0])

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight
      scrollRef.current = max > 0 ? window.scrollY / max : 0
    }
    const onMouse = (e) => {
      mouseRef.current = [
        (e.clientX / window.innerWidth - 0.5) * 2,
        -(e.clientY / window.innerHeight - 0.5) * 2,
      ]
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouse, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
      >
        <Scene scrollRef={scrollRef} mouseRef={mouseRef} />
      </Canvas>
    </div>
  )
}

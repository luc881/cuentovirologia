import { useState, useEffect } from 'react'

export default function NavDots({ scenes }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observers = scenes.map((scene, i) => {
      const el = document.getElementById(scene.id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [scenes])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav
      aria-label="Navegación de escenas"
      style={{
        position: 'fixed',
        right: '1.5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        alignItems: 'center',
      }}
    >
      {scenes.map((scene, i) => (
        <button
          key={scene.id}
          onClick={() => scrollTo(scene.id)}
          title={scene.label}
          aria-label={`Ir a: ${scene.label}`}
          style={{
            width: active === i ? '10px' : '5px',
            height: active === i ? '10px' : '5px',
            borderRadius: '50%',
            border: 'none',
            background: active === i ? '#00d4ff' : 'rgba(255,255,255,0.25)',
            cursor: 'pointer',
            padding: 0,
            transition: 'all 0.35s ease',
            boxShadow: active === i ? '0 0 10px #00d4ff88' : 'none',
          }}
        />
      ))}
    </nav>
  )
}

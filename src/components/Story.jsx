import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import VirusShape from './VirusShape'
import ViralBackground from './ViralBackground'
import {
  IlluEstacion, IlluMoquillo, IlluChurro, IlluSintomas,
  IlluCola, IlluTumor, IlluMutacion, IlluFinal,
} from './Illustrations'

// ─── Illustration wrapper ────────────────────────────────────────────────────

function Illu({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{ marginBottom: '2.5rem', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 0 40px rgba(0,0,0,0.5)' }}
    >
      {children}
    </motion.div>
  )
}

// ─── Scroll-reveal wrapper ───────────────────────────────────────────────────

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// ─── Typography ──────────────────────────────────────────────────────────────

const BASE = {
  fontFamily: "'Playfair Display', serif",
  fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
  lineHeight: 1.95,
  marginBottom: '1.7em',
}

function P({ children }) {
  return <p style={{ ...BASE, color: 'rgba(255,255,255,0.85)' }}>{children}</p>
}

function PCentral({ children }) {
  return <p style={{ ...BASE, color: 'rgba(255,255,255,0.72)', textAlign: 'center' }}>{children}</p>
}

function PItalic({ children, color }) {
  return (
    <p style={{ ...BASE, fontStyle: 'italic', color: color || 'rgba(255,255,255,0.54)', textAlign: 'center' }}>
      {children}
    </p>
  )
}

function PSci({ children }) {
  return (
    <p style={{ ...BASE, fontStyle: 'italic', color: 'rgba(255,255,255,0.58)', borderLeft: '1.5px solid rgba(0,212,255,0.2)', paddingLeft: '1.25rem' }}>
      {children}
    </p>
  )
}

// ─── Interactive dialogue (hover brightens) ──────────────────────────────────

function Dialogue({ children, danger = false }) {
  const [hov, setHov] = useState(false)
  return (
    <p
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...BASE,
        fontStyle: 'italic',
        color: danger
          ? (hov ? 'rgba(255,90,90,0.92)' : 'rgba(255,70,70,0.75)')
          : (hov ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.6)'),
        paddingLeft: '1.75rem',
        borderLeft: `1.5px solid ${
          danger
            ? (hov ? 'rgba(220,0,0,0.65)' : 'rgba(160,0,0,0.4)')
            : (hov ? 'rgba(255,255,255,0.32)' : 'rgba(255,255,255,0.08)')
        }`,
        marginBottom: '1.1em',
        transition: 'color 0.3s ease, border-color 0.3s ease',
        cursor: 'default',
      }}
    >
      — {children}
    </p>
  )
}

// ─── BigMoment with typewriter reveal ───────────────────────────────────────

function BigMoment({ children, color }) {
  const words = String(children).split(' ')
  return (
    <div style={{ margin: '5vh 0', textAlign: 'center', width: '100%', overflow: 'hidden' }}>
      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: 'italic',
        fontWeight: 700,
        fontSize: 'clamp(1.25rem, 3vw, 1.8rem)',
        color: color || 'white',
        lineHeight: 1.65,
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
      }}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.09, duration: 0.35, ease: 'easeOut' }}
            style={{ display: 'inline-block', marginRight: '0.28em' }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    </div>
  )
}
// ─── Rule with traveling light particle ─────────────────────────────────────

function Rule({ color = 'rgba(255,255,255,0.07)' }) {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '1rem', margin: '4.5vh 0', overflow: 'hidden' }}>
      <div style={{ flex: 1, height: '1px', background: color }} />
      <motion.div
        style={{ width: '4px', height: '4px', borderRadius: '50%', background: color, flexShrink: 0 }}
        animate={{ scale: [1, 1.7, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div style={{ flex: 1, height: '1px', background: color }} />
      {/* Traveling glowing particle */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-3px',
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: color,
          filter: `blur(1.5px) brightness(4)`,
          zIndex: 2,
        }}
        animate={{ left: ['-7px', 'calc(100% + 7px)'] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 2.5 }}
      />
    </div>
  )
}

// ─── Interactive character name ──────────────────────────────────────────────

function CharName({ children, color = '#f5c87a' }) {
  const [hov, setHov] = useState(false)
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        color,
        textShadow: hov
          ? `0 0 22px ${color}cc, 0 0 55px ${color}55`
          : 'none',
        transition: 'text-shadow 0.35s ease',
        cursor: 'default',
        borderBottom: `1px solid ${hov ? color + '80' : 'transparent'}`,
      }}
    >
      {children}
    </span>
  )
}

// ─── Left progress line ──────────────────────────────────────────────────────

function ProgressLine({ scrollYProgress }) {
  const dotTop = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const dotColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.33, 0.52, 0.68, 0.85, 1],
    ['#4488ff', '#8b5cf6', '#e8843a', '#880000', '#00cc66', '#ffd700', '#ffd700']
  )

  return (
    <div style={{
      position: 'fixed',
      left: '1.2rem',
      top: '15vh',
      height: '70vh',
      width: '1px',
      background: 'rgba(255,255,255,0.055)',
      zIndex: 20,
      pointerEvents: 'none',
    }}>
      {/* Filled section */}
      <motion.div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, #4488ff 0%, #8b5cf6 20%, #e8843a 40%, #880000 55%, #00cc66 72%, #ffd700 90%)',
        scaleY: scrollYProgress,
        transformOrigin: 'top',
        opacity: 0.7,
      }} />
      {/* Moving dot */}
      <motion.div style={{
        position: 'absolute',
        left: '-4px',
        width: '9px',
        height: '9px',
        borderRadius: '50%',
        background: dotColor,
        boxShadow: '0 0 10px currentColor',
        top: dotTop,
        translateY: '-50%',
      }} />
    </div>
  )
}

// ─── Main Story ──────────────────────────────────────────────────────────────

export default function Story() {
  const { scrollYProgress } = useScroll()
  const cursorRef = useRef()
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0])

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.33, 0.52, 0.67, 0.83, 1],
    ['#050810', '#060d1a', '#130d02', '#0c0000', '#001408', '#1a0900', '#1e0f00']
  )

  // Cursor glow position
  useEffect(() => {
    const move = (e) => {
      if (!cursorRef.current) return
      cursorRef.current.style.left = e.clientX + 'px'
      cursorRef.current.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // Click ripple
  useEffect(() => {
    const handleClick = (e) => {
      const el = document.createElement('div')
      el.className = 'click-ripple'
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 760)
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      {/* ── Top reading progress bar ── */}
      <motion.div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: '2px',
        background: 'linear-gradient(to right, #4488ff, #8b5cf6, #e8843a, #880000, #00cc66, #ffd700)',
        scaleX: scrollYProgress,
        transformOrigin: 'left',
        zIndex: 200,
      }} />

      {/* ── Left progress line ── */}
      <ProgressLine scrollYProgress={scrollYProgress} />

      {/* ── Cursor glow ── */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '320px', height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 65%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 5,
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
      />

      {/* ── Background layers ── */}
      <motion.div style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundColor: bgColor }} />
      <ViralBackground />
      <div style={{
        position: 'fixed', inset: 0, zIndex: 2,
        background: 'radial-gradient(ellipse at 50% 50%, transparent 52%, rgba(0,0,0,0.45) 100%)',
        pointerEvents: 'none',
      }} />

      {/* ── Story column (frosted glass) ── */}
      <article style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '660px',
        margin: '0 auto',
        padding: '14vh 2.5rem 22vh',
        background: 'rgba(4, 7, 14, 0.55)',
        backdropFilter: 'blur(22px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(22px) saturate(1.4)',
        borderLeft: '1px solid rgba(255,255,255,0.045)',
        borderRight: '1px solid rgba(255,255,255,0.045)',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}>

        {/* ── PORTADA ─────────────────────────────────────────────────── */}
        <Reveal>
          <header style={{ textAlign: 'center', marginBottom: '10vh', position: 'relative' }}>
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.6em' }}
              animate={{ opacity: 0.4, letterSpacing: '0.45em' }}
              transition={{ duration: 1.5 }}
              style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: '#00d4ff', textTransform: 'uppercase', marginBottom: '2rem' }}
            >
              Un cuento de virología
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(4rem, 14vw, 8rem)', fontWeight: 900, color: 'white', lineHeight: 0.9, marginBottom: '0.8rem' }}
            >
              Moquillo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: 'rgba(255,255,255,0.3)' }}
            >
              la misión que cambió
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.1 }}
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: 'rgba(255,255,255,0.35)', marginTop: '1.75rem', letterSpacing: '0.03em' }}
            >
              Flores Buendia Zara Ursula
            </motion.p>

            <div style={{ width: '36px', height: '1px', background: 'rgba(0,212,255,0.22)', margin: '2rem auto 0' }} />

            {/* Scroll-down arrow (fades as user scrolls) */}
            <motion.div
              style={{ position: 'absolute', bottom: '-6vh', left: '50%', translateX: '-50%', opacity: arrowOpacity }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
                <path d="M9 1 L9 18 M3 12 L9 18 L15 12" stroke="rgba(0,212,255,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </header>
        </Reveal>

        {/* Opening virus ornament */}
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 6vh', opacity: 0.22 }}>
            <VirusShape size={42} color="#4488ff" glowColor="#4488ff" />
          </div>
        </Reveal>

        {/* ── ACTO I — LA ESTACIÓN VIRAL ──────────────────────────────── */}

        <Illu><IlluEstacion /></Illu>

        <Reveal><P>En algún lugar que ningún humano conoce existe la Estación Viral.</P></Reveal>

        <Reveal><P>Un lugar enorme con pasillos blancos donde millones de virus esperan recibir su misión. Cada uno tiene asignado un huésped y una forma específica de causar enfermedad.</P></Reveal>

        <Reveal>
          <div style={{ paddingLeft: '1.75rem', marginBottom: '1.7em' }}>
            {['Parvovirus: cachorros.', 'Viruela aviar: gallinas.', 'Rabia: mamíferos.'].map((line, i) => (
              <motion.p key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.14 }}
                style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.74rem', color: 'rgba(255,255,255,0.32)', lineHeight: 2.4, letterSpacing: '0.04em' }}>
                — {line}
              </motion.p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <PCentral>Todos parecían emocionados con su trabajo...{' '}
            <span style={{ color: 'rgba(255,255,255,0.92)' }}>menos uno.</span>
          </PCentral>
        </Reveal>

        <Rule />

        <Illu><IlluMoquillo /></Illu>

        <Reveal>
          <P>Su nombre era <CharName color="#a78bfa">Moquillo</CharName>. Era un virus ARN monocatenario del género <em>Morbillivirus</em>, todavía bastante inestable, de esos que cometen muchos errores al replicarse. Los demás lo veían raro porque hacía demasiadas preguntas.</P>
        </Reveal>

        <Reveal><Dialogue>¿Por qué tenemos que enfermarlos?</Dialogue></Reveal>
        <Reveal><Dialogue>¿Qué les pasa después a los animales?</Dialogue></Reveal>
        <Reveal><Dialogue>¿Todos mueren?</Dialogue></Reveal>

        <Reveal><P>Los demás se reían de él.</P></Reveal>

        <Reveal><Dialogue>Pues sí, algunos mueren... ¿no se supone que ese es nuestro trabajo?</Dialogue></Reveal>

        <Reveal><PItalic>Pero Moquillo nunca estuvo del todo seguro de querer hacer eso.</PItalic></Reveal>

        <Rule />

        <Reveal><P>Un día llegó su misión:</P></Reveal>

        <Reveal>
          <div style={{ marginBottom: '1.7em', padding: '1rem 1.5rem', borderLeft: '2px solid rgba(0,212,255,0.18)', background: 'rgba(0,212,255,0.03)', borderRadius: '0 4px 4px 0' }}>
            {[
              'Hospedador asignado: perro doméstico.',
              'Vía de transmisión: secreciones respiratorias y aerosoles.',
              'Objetivo: replicación sistémica.',
            ].map((line, i) => (
              <motion.p key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 }}
                style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', color: 'rgba(0,212,255,0.52)', lineHeight: 2.2 }}>
                — {line}
              </motion.p>
            ))}
          </div>
        </Reveal>

        <Reveal><P>Y así bajó a la Tierra, dentro de una pequeña gota que expulsó un perro enfermo.</P></Reveal>

        <Rule />

        {/* ── ACTO II — CHURRO ────────────────────────────────────────── */}

        <Illu><IlluChurro /></Illu>

        <Reveal>
          <P>Su nuevo huésped era un perro mestizo color café que vivía en los alrededores de una clínica veterinaria rural. Todos lo conocían como{' '}
            <CharName color="#f5c87a">Churro</CharName>.{' '}
            Los estudiantes le daban croquetas, los doctores le dejaban agua, y los niños del mercado lo abrazaban aunque siempre anduviera hecho un desastre de tierra.
          </P>
        </Reveal>

        <Reveal>
          <PSci>Moquillo entró al cuerpo de Churro por las vías respiratorias. Atravesó la mucosa nasal e infectó macrófagos y linfocitos del tejido linfoide. Una vez dentro de las células, utilizó la maquinaria celular para replicar su ARN y producir miles de partículas virales nuevas. Poco después ocurrió la primera viremia — los virus viajaron por la sangre y alcanzaron pulmones, ganglios linfáticos y otros tejidos.</PSci>
        </Reveal>

        <Reveal><P>Y entonces llegaron los síntomas.</P></Reveal>

        <Illu><IlluSintomas /></Illu>

        <Reveal><PItalic>Primero fiebre. Luego secreción nasal. Después tos.</PItalic></Reveal>

        <Reveal><P>Los estudiantes empezaron a preocuparse.</P></Reveal>

        <Reveal><Dialogue>Tiene descarga ocular y respiratoria... puede ser moquillo.</Dialogue></Reveal>

        <Reveal><P>Pero pasó algo que <CharName color="#a78bfa">Moquillo</CharName> no esperaba.</P></Reveal>

        <Illu><IlluCola /></Illu>

        <Reveal>
          <BigMoment>Churro seguía moviendo la cola.</BigMoment>
        </Reveal>

        <Reveal><P>Incluso enfermo, esperaba afuera de la clínica para que alguien lo saludara. Cuando alguien se acercaba, levantaba la cabeza e intentaba lamerles las manos aunque casi no tuviera fuerzas.</P></Reveal>

        <Reveal><PItalic>Moquillo no entendía cómo un animal podía seguir siendo así de amable estando tan mal.</PItalic></Reveal>

        <Rule />

        {/* ── ACTO III — EL DILEMA ────────────────────────────────────── */}

        <Reveal><P>Con el paso de los días la enfermedad avanzó. El virus llegó al sistema nervioso central y <CharName color="#f5c87a">Churro</CharName> empezó a presentar temblores y espasmos musculares pequeños.</P></Reveal>

        <Reveal><Dialogue>Ya hay signos neurológicos... probablemente el virus ya llegó al encéfalo.</Dialogue></Reveal>

        <Reveal><P>Eso era exactamente lo que <CharName color="#a78bfa">Moquillo</CharName> debía hacer. Invadir, replicarse, diseminarse. Pero entonces encontró algo raro. Cerca de un ganglio había células creciendo sin control.</P></Reveal>

        <Reveal><Dialogue>¿Y ustedes quiénes son?</Dialogue></Reveal>

        <Illu><IlluTumor /></Illu>

        <Reveal><Dialogue danger>Somos células tumorales. Nosotros nunca dejamos sobrevivientes.</Dialogue></Reveal>

        <Reveal><P><CharName color="#a78bfa">Moquillo</CharName> observó al perro. <CharName color="#f5c87a">Churro</CharName> dormía débilmente mientras un estudiante lo tapaba con una cobija vieja.</P></Reveal>

        <Reveal>
          <BigMoment color="#a78bfa">Y por primera vez sintió algo parecido a la culpa. No quería destruirlo.</BigMoment>
        </Reveal>

        <Rule color="rgba(0,255,136,0.09)" />

        {/* ── ACTO IV — LA MUTACIÓN ───────────────────────────────────── */}

        <Illu><IlluMutacion /></Illu>

        <Reveal><P>Como pasa con muchos virus ARN, las mutaciones comenzaron a ocurrir rápido durante la replicación. Algunas copias de <CharName color="#00cc66">Moquillo</CharName> cambiaron. En lugar de seguir atacando tejido sano, empezaron a entrar a las células tumorales, replicarse ahí adentro y destruirlas desde dentro.</P></Reveal>

        <Reveal><PItalic color="rgba(0,255,136,0.65)">Las células cancerígenas fueron desapareciendo poco a poco.</PItalic></Reveal>

        <Reveal><P>Los veterinarios notaron algo que no tenía mucho sentido.</P></Reveal>

        <Reveal><Dialogue>El cuadro de moquillo sigue... pero esta masa debería estar creciendo y no está creciendo.</Dialogue></Reveal>

        <Reveal><PItalic>Nadie supo explicarlo bien.</PItalic></Reveal>

        <Rule color="rgba(255,215,0,0.09)" />

        {/* ── ACTO V — EL FINAL ───────────────────────────────────────── */}

        <Illu><IlluFinal /></Illu>

        <Reveal><P>Con tratamiento de soporte, fluidoterapia y muchos cuidados, <CharName color="#f5c87a">Churro</CharName> logró sobrevivir. El moquillo le dejó algunas secuelas neurológicas leves — a veces sus patas temblaban un poco al caminar — pero estaba vivo.</P></Reveal>

        <Reveal><P>Todas las mañanas volvía a esperar afuera de la clínica, moviendo la cola para recibir a los estudiantes.</P></Reveal>

        {/* ── CODA ────────────────────────────────────────────────────── */}
        <Reveal>
          <div style={{ margin: '7vh 0 5vh', textAlign: 'center' }}>
            <div style={{ width: '36px', height: '1px', background: 'rgba(255,215,0,0.2)', margin: '0 auto 4rem' }} />

            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(1.05rem, 2.8vw, 1.3rem)', color: 'rgba(255,255,255,0.58)', lineHeight: 2.1 }}>
              Y en algún lugar invisible, entre millones de partículas virales,<br />
              quedó guardada la historia de un virus que nació para causar enfermedad...
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5 }}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.1rem, 3vw, 1.45rem)', fontWeight: 700, color: '#ffd700', marginTop: '1.25rem', lineHeight: 1.6 }}
            >
              pero que terminó cambiando su misión.
            </motion.p>

            <div style={{ width: '36px', height: '1px', background: 'rgba(255,215,0,0.2)', margin: '4rem auto 0' }} />
          </div>
        </Reveal>

        <Reveal>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.56rem', color: 'rgba(255,215,0,0.18)', letterSpacing: '0.45em', textTransform: 'uppercase', textAlign: 'center', marginTop: '2rem' }}>
            Fin
          </p>
        </Reveal>

      </article>
    </div>
  )
}

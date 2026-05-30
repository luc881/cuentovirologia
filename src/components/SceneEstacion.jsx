import { motion } from 'framer-motion'
import VirusShape from './VirusShape'

const BG_VIRUSES = [
  { id: 0,  x: 5,  y: 8,  size: 55, dur: 12, delay: 0   },
  { id: 1,  x: 88, y: 12, size: 40, dur: 9,  delay: 1.5 },
  { id: 2,  x: 15, y: 70, size: 65, dur: 14, delay: 0.7 },
  { id: 3,  x: 78, y: 65, size: 50, dur: 11, delay: 2   },
  { id: 4,  x: 50, y: 5,  size: 35, dur: 10, delay: 0.3 },
  { id: 5,  x: 35, y: 85, size: 45, dur: 13, delay: 1   },
  { id: 6,  x: 92, y: 40, size: 38, dur: 8,  delay: 2.5 },
  { id: 7,  x: 3,  y: 45, size: 42, dur: 15, delay: 0.5 },
  { id: 8,  x: 65, y: 90, size: 30, dur: 11, delay: 1.8 },
  { id: 9,  x: 60, y: 30, size: 28, dur: 9,  delay: 3   },
]

const ASSIGNMENTS = [
  { name: 'PARVOVIRUS',    host: 'CACHORROS',  color: '#ff6b6b' },
  { name: 'VIRUELA AVIAR', host: 'GALLINAS',   color: '#ffd93d' },
  { name: 'RABIA',         host: 'MAMÍFEROS',  color: '#ff4757' },
]

export default function SceneEstacion() {
  return (
    <div
      className="scene"
      style={{ background: 'radial-gradient(ellipse at 50% 50%, #0d1525 0%, #050810 75%)' }}
    >
      {/* Floating background viruses */}
      {BG_VIRUSES.map(v => (
        <motion.div
          key={v.id}
          style={{
            position: 'absolute',
            left: `${v.x}%`,
            top: `${v.y}%`,
            opacity: 0.07,
            pointerEvents: 'none',
          }}
          animate={{ y: [-14, 14, -14] }}
          transition={{ duration: v.dur, delay: v.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <VirusShape size={v.size} color="#4488ff" glowColor="#4488ff" rotate={false} pulse={false} />
        </motion.div>
      ))}

      <div style={{ maxWidth: '680px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          whileInView={{ opacity: 0.6, letterSpacing: '0.35em' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.68rem',
            color: '#00d4ff',
            textTransform: 'uppercase',
            marginBottom: '2rem',
          }}
        >
          Capítulo I
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            color: 'white',
            marginBottom: '1.5rem',
          }}
        >
          La Estación<br />
          <em style={{ color: '#00d4ff' }}>Viral</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.9,
            marginBottom: '3rem',
          }}
        >
          "En algún lugar que ningún humano conoce<br />
          existe la Estación Viral."
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', textAlign: 'left' }}>
          {ASSIGNMENTS.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 + i * 0.22 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.8rem 1.25rem',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderLeft: `3px solid ${a.color}`,
                borderRadius: '0 4px 4px 0',
              }}
            >
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.72rem',
                color: a.color,
                letterSpacing: '0.1em',
              }}>
                {a.name}
              </span>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.18em',
              }}>
                {a.host}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.7 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.45)',
            marginTop: '2.5rem',
            lineHeight: 1.9,
          }}
        >
          Todos parecían emocionados con su trabajo...<br />
          <strong style={{ color: 'rgba(255,255,255,0.85)', fontStyle: 'normal' }}>
            menos uno.
          </strong>
        </motion.p>
      </div>
    </div>
  )
}

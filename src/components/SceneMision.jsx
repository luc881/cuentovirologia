import { motion } from 'framer-motion'
import VirusShape from './VirusShape'

const QUESTIONS = [
  '¿Por qué tenemos que enfermarlos?',
  '¿Qué les pasa después a los animales?',
  '¿Todos mueren?',
]

const MISSION_LINES = [
  { label: 'HOSPEDADOR ASIGNADO',  value: 'perro doméstico'                       },
  { label: 'VÍA DE TRANSMISIÓN',   value: 'secreciones respiratorias y aerosoles' },
  { label: 'OBJETIVO',             value: 'replicación sistémica'                  },
]

export default function SceneMision() {
  return (
    <div
      className="scene"
      style={{ background: 'radial-gradient(ellipse at 30% 50%, #110820 0%, #050810 72%)' }}
    >
      <div style={{ maxWidth: '820px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: '3.5rem',
          alignItems: 'center',
        }}>

          {/* Left — identity card */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.65rem',
                color: '#a78bfa',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Capítulo II — Identificación
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ marginBottom: '1.5rem' }}
            >
              <VirusShape size={96} color="#8b5cf6" glowColor="#8b5cf6" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                fontWeight: 900,
                color: 'white',
                marginBottom: '0.75rem',
                lineHeight: 1,
              }}
            >
              Moquillo
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.63rem',
                color: '#a78bfa',
                lineHeight: 2.1,
              }}
            >
              <div>Virus ARN monocatenario</div>
              <div>Género: <span style={{ color: 'white' }}>Morbillivirus</span></div>
              <div>Estabilidad: <span style={{ color: '#f87171' }}>INESTABLE</span></div>
              <div>Tasa de mutación: <span style={{ color: '#fbbf24' }}>ALTA</span></div>
            </motion.div>
          </div>

          {/* Right — questions + mission */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '0.88rem',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: '1rem',
              }}
            >
              Lo veían raro porque hacía demasiadas preguntas...
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '2rem' }}>
              {QUESTIONS.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.2 }}
                  style={{
                    padding: '0.65rem 1rem',
                    background: 'rgba(139,92,246,0.07)',
                    border: '1px solid rgba(139,92,246,0.2)',
                    borderRadius: '4px',
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.78)',
                  }}
                >
                  — {q}
                </motion.div>
              ))}
            </div>

            {/* Mission briefing */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{
                background: 'rgba(0,212,255,0.04)',
                border: '1px solid rgba(0,212,255,0.14)',
                borderRadius: '4px',
                padding: '1.25rem',
              }}
            >
              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.58rem',
                color: '#00d4ff',
                letterSpacing: '0.25em',
                marginBottom: '0.85rem',
                opacity: 0.8,
              }}>
                MISIÓN ASIGNADA
              </p>
              {MISSION_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + i * 0.18 }}
                  style={{ marginBottom: i < MISSION_LINES.length - 1 ? '0.6rem' : 0 }}
                >
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.53rem',
                    color: 'rgba(0,212,255,0.5)',
                    letterSpacing: '0.1em',
                    marginBottom: '0.15rem',
                  }}>
                    {line.label}
                  </div>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.7rem',
                    color: 'white',
                  }}>
                    {line.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

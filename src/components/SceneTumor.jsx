import { motion } from 'framer-motion'
import VirusShape from './VirusShape'

const BLOBS = [
  { x: 4,  y: 8,  size: 90,  delay: 0    },
  { x: 82, y: 6,  size: 70,  delay: 1    },
  { x: 88, y: 68, size: 110, delay: 0.5  },
  { x: 2,  y: 76, size: 80,  delay: 1.5  },
  { x: 42, y: 86, size: 60,  delay: 0.8  },
  { x: 70, y: 30, size: 55,  delay: 2    },
]

function TumorBlob({ x, y, size, delay }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: '60% 40% 70% 30% / 50% 65% 35% 50%',
        background: 'radial-gradient(circle at 40% 40%, #3d0000 0%, #130000 100%)',
        border: '1px solid rgba(120,0,0,0.35)',
        pointerEvents: 'none',
      }}
      animate={{
        borderRadius: [
          '60% 40% 70% 30% / 50% 65% 35% 50%',
          '40% 60% 30% 70% / 65% 35% 55% 45%',
          '60% 40% 70% 30% / 50% 65% 35% 50%',
        ],
        scale: [1, 1.06, 1],
      }}
      transition={{ duration: 3.5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

export default function SceneTumor() {
  return (
    <div
      className="scene"
      style={{
        background:
          'radial-gradient(ellipse at 50% 50%, #110000 0%, #060000 55%, #050810 100%)',
      }}
    >
      {BLOBS.map((b, i) => <TumorBlob key={i} {...b} />)}

      <div style={{ maxWidth: '680px', width: '100%', zIndex: 1, textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            color: '#8b0000',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          Capítulo V — El Dilema
        </motion.p>

        {/* Neurological note */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            padding: '0.75rem 1.1rem',
            background: 'rgba(255,100,0,0.05)',
            border: '1px solid rgba(255,100,0,0.15)',
            borderRadius: '4px',
            marginBottom: '1.5rem',
            textAlign: 'left',
          }}
        >
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.58rem',
            color: '#ff6400',
            letterSpacing: '0.1em',
            marginBottom: '0.3rem',
          }}>
            AVANCE CLÍNICO
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.55)',
          }}>
            El virus llegó al sistema nervioso central. Temblores y espasmos musculares pequeños.
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5.5vw, 3.8rem)',
            color: 'white',
            marginBottom: '1.5rem',
            lineHeight: 1.15,
          }}
        >
          "¿Y ustedes<br />
          <em style={{ color: '#cc0000' }}>quiénes son?"</em>
        </motion.h2>

        {/* Tumor dialogue */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            padding: '1.5rem',
            background: 'rgba(139,0,0,0.12)',
            border: '1px solid rgba(139,0,0,0.3)',
            borderRadius: '4px',
            marginBottom: '1.75rem',
          }}
        >
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '1.05rem',
            color: '#ff4444',
            marginBottom: '0.4rem',
          }}>
            — Somos células tumorales.
          </p>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '1rem',
            color: 'rgba(255,68,68,0.75)',
          }}>
            Nosotros nunca dejamos sobrevivientes.
          </p>
        </motion.div>

        {/* Churro sleeping */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          style={{
            padding: '1.1rem 1.4rem',
            background: 'rgba(245,200,122,0.03)',
            border: '1px solid rgba(245,200,122,0.09)',
            borderRadius: '4px',
            marginBottom: '2rem',
          }}
        >
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: 'rgba(245,200,122,0.5)',
            lineHeight: 1.85,
          }}>
            Churro dormía débilmente mientras un estudiante<br />
            lo tapaba con una cobija vieja.
          </p>
        </motion.div>

        {/* Moquillo's guilt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <VirusShape size={58} color="#8b5cf6" glowColor="#8b5cf6" pulse />
          </div>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.05rem',
            color: 'white',
            lineHeight: 1.9,
          }}>
            Y por primera vez sintió algo<br />
            <em style={{ color: '#a78bfa', fontSize: '1.3rem' }}>
              parecido a la culpa.
            </em>
          </p>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.35)',
            marginTop: '0.75rem',
          }}>
            No quería destruirlo.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

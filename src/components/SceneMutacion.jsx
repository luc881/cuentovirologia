import { motion } from 'framer-motion'
import VirusShape from './VirusShape'

export default function SceneMutacion() {
  return (
    <div
      className="scene"
      style={{
        background:
          'radial-gradient(ellipse at 50% 60%, #001a09 0%, #050810 80%)',
      }}
    >
      {/* Subtle green sparkles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: `${8 + i * 7.5}%`,
            top: `${15 + ((i * 37) % 70)}%`,
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: '#00ff88',
            pointerEvents: 'none',
          }}
          animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{
            duration: 2 + (i % 3),
            delay: i * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div style={{ maxWidth: '720px', width: '100%', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            color: '#00ff88',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          Capítulo VI — La Mutación
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            textAlign: 'center',
            marginBottom: '2.5rem',
            color: 'white',
            lineHeight: 1.2,
          }}
        >
          Como pasa con los virus ARN...<br />
          <em style={{ color: '#00ff88' }}>las mutaciones comenzaron.</em>
        </motion.h2>

        {/* Transformation diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2.5rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          <motion.div
            style={{ textAlign: 'center' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <VirusShape size={84} color="#8b5cf6" glowColor="#8b5cf6" />
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.58rem',
              color: 'rgba(139,92,246,0.55)',
              marginTop: '0.6rem',
              letterSpacing: '0.1em',
            }}>
              ORIGINAL
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.85 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}
          >
            <svg width="72" height="18" viewBox="0 0 72 18" overflow="visible">
              <path
                d="M0 9 L58 9 M49 3 L65 9 L49 15"
                stroke="#00ff88"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.52rem',
              color: '#00ff88',
              letterSpacing: '0.08em',
              whiteSpace: 'nowrap',
            }}>
              MUTACIÓN ARN
            </span>
          </motion.div>

          <motion.div
            style={{ textAlign: 'center' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            <VirusShape size={84} color="#00ff88" glowColor="#00ff88" />
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.58rem',
              color: 'rgba(0,255,136,0.55)',
              marginTop: '0.6rem',
              letterSpacing: '0.1em',
            }}>
              MUTADO
            </p>
          </motion.div>
        </motion.div>

        {/* Behavior change */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
          style={{
            background: 'rgba(0,255,136,0.04)',
            border: '1px solid rgba(0,255,136,0.18)',
            borderRadius: '4px',
            padding: '1.4rem',
            marginBottom: '1.5rem',
          }}
        >
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.6rem',
            color: '#00ff88',
            letterSpacing: '0.22em',
            marginBottom: '0.75rem',
            opacity: 0.8,
          }}>
            NUEVA CONDUCTA VIRAL
          </p>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '0.92rem',
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.85,
          }}>
            En lugar de seguir atacando tejido sano, algunas copias de Moquillo empezaron a entrar a las células tumorales, replicarse ahí adentro y destruirlas desde dentro.
          </p>
        </motion.div>

        {/* Science note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.7 }}
          style={{
            background: 'rgba(0,212,255,0.03)',
            border: '1px solid rgba(0,212,255,0.09)',
            borderRadius: '4px',
            padding: '0.9rem 1.2rem',
            marginBottom: '2rem',
          }}
        >
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.57rem',
            color: '#00d4ff',
            letterSpacing: '0.14em',
            marginBottom: '0.35rem',
          }}>
            DATO — VIROTERAPIA ONCOLÍTICA
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.78rem',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.65,
          }}>
            El uso de virus que destruyen selectivamente células cancerígenas es objeto de investigación activa en oncología veterinaria y humana.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            textAlign: 'center',
            fontSize: '0.95rem',
            color: 'rgba(0,255,136,0.55)',
          }}
        >
          "Las células cancerígenas fueron desapareciendo poco a poco."
        </motion.p>
      </div>
    </div>
  )
}

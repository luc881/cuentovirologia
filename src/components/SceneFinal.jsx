import { motion } from 'framer-motion'

function HappyDog() {
  return (
    <svg viewBox="0 0 220 210" width="250" height="239" aria-label="Churro feliz moviendo la cola">
      {/* Shadow */}
      <ellipse cx="110" cy="202" rx="52" ry="7" fill="rgba(0,0,0,0.25)" />
      {/* Body */}
      <ellipse cx="105" cy="142" rx="58" ry="40" fill="#7a4a28" />
      <ellipse cx="105" cy="148" rx="36" ry="25" fill="#9b6040" opacity="0.35" />
      {/* Head */}
      <circle cx="105" cy="84" r="34" fill="#7a4a28" />
      {/* Ears — floppy happy */}
      <ellipse cx="76" cy="67" rx="14" ry="22" fill="#5a3218" transform="rotate(-20 76 67)" />
      <ellipse cx="134" cy="67" rx="14" ry="22" fill="#5a3218" transform="rotate(20 134 67)" />
      {/* Muzzle */}
      <ellipse cx="105" cy="93" rx="17" ry="13" fill="#9b6040" />
      {/* Eyes — happy arcs */}
      <path d="M96 78 Q99 74 102 78" stroke="#1a0e08" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M108 78 Q111 74 114 78" stroke="#1a0e08" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Cheek blush */}
      <ellipse cx="88" cy="86" rx="7" ry="4" fill="#e87090" opacity="0.3" />
      <ellipse cx="122" cy="86" rx="7" ry="4" fill="#e87090" opacity="0.3" />
      {/* Nose */}
      <ellipse cx="105" cy="92" rx="7.5" ry="6" fill="#1a0e08" />
      <ellipse cx="103" cy="90" rx="2.2" ry="1.6" fill="rgba(255,255,255,0.2)" />
      {/* Big smile */}
      <path d="M94 99 Q105 112 116 99" stroke="#1a0e08" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Tongue out — happy */}
      <ellipse cx="105" cy="107" rx="6.5" ry="6" fill="#e8607a" />
      <ellipse cx="105" cy="110" rx="6.5" ry="3.5" fill="#d04060" opacity="0.5" />
      <line x1="105" y1="104" x2="105" y2="113" stroke="#c0405a" strokeWidth="1.2" />
      {/* Legs */}
      <rect x="72"  y="172" width="13" height="28" rx="6.5" fill="#5a3218" />
      <rect x="92"  y="174" width="13" height="26" rx="6.5" fill="#5a3218" />
      <rect x="112" y="174" width="13" height="26" rx="6.5" fill="#5a3218" />
      <rect x="133" y="172" width="13" height="28" rx="6.5" fill="#5a3218" />
      {/* Slightly trembling front paw — neurological sequela */}
      <ellipse cx="78.5" cy="198" rx="8" ry="3" fill="#3a2010" opacity="0.4" />
    </svg>
  )
}

export default function SceneFinal() {
  return (
    <div
      className="scene"
      style={{
        background:
          'radial-gradient(ellipse at 50% 25%, #2e1600 0%, #190d00 55%, #050810 100%)',
      }}
    >
      {/* Dawn rays */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: '5%',
            left: '50%',
            width: '1.5px',
            height: '45%',
            background:
              'linear-gradient(to bottom, rgba(255,215,0,0.18), transparent)',
            transformOrigin: 'top center',
            transform: `translateX(-50%) rotate(${i * 45}deg)`,
            pointerEvents: 'none',
          }}
          animate={{ opacity: [0.25, 0.65, 0.25] }}
          transition={{
            duration: 3.5,
            delay: i * 0.35,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div style={{ maxWidth: '700px', width: '100%', zIndex: 1, textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            color: '#ffd700',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          Capítulo VII — El Final
        </motion.p>

        {/* Animated dog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            position: 'relative',
          }}
        >
          {/* Glow */}
          <div style={{
            position: 'absolute',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,215,0,0.14) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative' }}>
            <HappyDog />
            {/* Wagging tail overlay */}
            <motion.div
              style={{
                position: 'absolute',
                top: '78px',
                right: '-4px',
                width: '38px',
                height: '9px',
                background: '#7a4a28',
                borderRadius: '4.5px',
                transformOrigin: '8% 50%',
              }}
              animate={{ rotate: [-28, 28, -28] }}
              transition={{ duration: 0.45, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: 900,
            color: '#ffd700',
            marginBottom: '1rem',
            lineHeight: 1.1,
          }}
        >
          Churro sobrevivió.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '1rem',
            color: 'rgba(255,215,0,0.65)',
            lineHeight: 1.95,
            marginBottom: '2rem',
          }}
        >
          Con tratamiento de soporte, fluidoterapia y muchos cuidados.<br />
          A veces sus patas temblaban un poco al caminar,<br />
          pero estaba <strong style={{ color: '#ffd700', fontStyle: 'normal' }}>vivo.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.05 }}
          style={{
            padding: '1.4rem 1.75rem',
            background: 'rgba(255,215,0,0.05)',
            border: '1px solid rgba(255,215,0,0.18)',
            borderRadius: '4px',
            marginBottom: '2.5rem',
          }}
        >
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.95,
          }}>
            Todas las mañanas volvía a esperar afuera de la clínica,<br />
            moviendo la cola para recibir a los estudiantes.
          </p>
        </motion.div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.35, duration: 1 }}
          style={{
            borderTop: '1px solid rgba(255,215,0,0.12)',
            paddingTop: '2rem',
          }}
        >
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(0.88rem, 2.2vw, 1.05rem)',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 2.1,
          }}
          >
            "Y en algún lugar invisible, entre millones de partículas virales,<br />
            quedó guardada la historia de un virus que nació para causar enfermedad...<br />
            <strong style={{ color: '#ffd700', fontStyle: 'normal', fontSize: '1.08em' }}>
              pero que terminó cambiando su misión.
            </strong>"
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.9 }}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.58rem',
            color: 'rgba(255,215,0,0.22)',
            letterSpacing: '0.22em',
            marginTop: '3rem',
            textTransform: 'uppercase',
          }}
        >
          Moquillo: la misión que cambió · Fin
        </motion.p>
      </div>
    </div>
  )
}

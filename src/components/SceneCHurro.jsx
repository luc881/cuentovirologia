import { motion } from 'framer-motion'

function DogSVG() {
  return (
    <svg viewBox="0 0 200 200" width="220" height="220" aria-label="Churro el perro">
      {/* Shadow */}
      <ellipse cx="100" cy="192" rx="48" ry="7" fill="rgba(0,0,0,0.3)" />
      {/* Body */}
      <ellipse cx="100" cy="135" rx="55" ry="38" fill="#7a4a28" />
      {/* Belly highlight */}
      <ellipse cx="100" cy="140" rx="35" ry="24" fill="#9b6040" opacity="0.4" />
      {/* Head */}
      <circle cx="100" cy="80" r="32" fill="#7a4a28" />
      {/* Ears */}
      <ellipse cx="72" cy="62" rx="13" ry="21" fill="#5a3218" transform="rotate(-18 72 62)" />
      <ellipse cx="128" cy="62" rx="13" ry="21" fill="#5a3218" transform="rotate(18 128 62)" />
      {/* Muzzle */}
      <ellipse cx="100" cy="89" rx="16" ry="12" fill="#9b6040" />
      {/* Eyes */}
      <circle cx="88" cy="76" r="6" fill="#1a0e08" />
      <circle cx="112" cy="76" r="6" fill="#1a0e08" />
      <circle cx="89.5" cy="74.5" r="2" fill="white" />
      <circle cx="113.5" cy="74.5" r="2" fill="white" />
      {/* Sheen */}
      <circle cx="90.5" cy="73.5" r="0.9" fill="white" opacity="0.85" />
      <circle cx="114.5" cy="73.5" r="0.9" fill="white" opacity="0.85" />
      {/* Nose */}
      <ellipse cx="100" cy="88" rx="7" ry="5.5" fill="#1a0e08" />
      <ellipse cx="98.5" cy="86.5" rx="2" ry="1.5" fill="rgba(255,255,255,0.25)" />
      {/* Smile */}
      <path d="M92 94 Q100 102 108 94" stroke="#1a0e08" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Tongue */}
      <ellipse cx="100" cy="100" rx="5.5" ry="5" fill="#e8607a" />
      <line x1="100" y1="97" x2="100" y2="105" stroke="#c0405a" strokeWidth="1" />
      {/* Tail */}
      <path d="M155 120 Q178 100 170 78" stroke="#7a4a28" strokeWidth="9" fill="none" strokeLinecap="round" />
      <circle cx="170" cy="76" r="5" fill="#5a3218" />
      {/* Legs */}
      <rect x="65"  y="162" width="13" height="28" rx="6.5" fill="#5a3218" />
      <rect x="86"  y="164" width="13" height="26" rx="6.5" fill="#5a3218" />
      <rect x="107" y="164" width="13" height="26" rx="6.5" fill="#5a3218" />
      <rect x="128" y="162" width="13" height="28" rx="6.5" fill="#5a3218" />
      {/* Dirt patches */}
      <ellipse cx="82" cy="122" rx="9" ry="6" fill="#3a2010" opacity="0.35" transform="rotate(-10 82 122)" />
      <ellipse cx="120" cy="138" rx="7" ry="5" fill="#3a2010" opacity="0.28" transform="rotate(8 120 138)" />
      <ellipse cx="100" cy="115" rx="5" ry="4" fill="#3a2010" opacity="0.2" />
    </svg>
  )
}

const COMMUNITY = [
  { emoji: '🍪', who: 'Los estudiantes',     action: 'le daban croquetas' },
  { emoji: '💧', who: 'Los doctores',        action: 'le dejaban agua'    },
  { emoji: '🤗', who: 'Los niños del mercado', action: 'lo abrazaban'    },
]

export default function SceneCHurro() {
  return (
    <div
      className="scene"
      style={{
        background:
          'radial-gradient(ellipse at 60% 40%, #2d1505 0%, #160a02 60%, #050810 100%)',
      }}
    >
      <div style={{ maxWidth: '840px', width: '100%', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: '4rem',
          alignItems: 'center',
        }}>

          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.65rem',
                color: '#e8843a',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Capítulo III
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.9 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(3.2rem, 9vw, 5.5rem)',
                fontWeight: 900,
                color: '#f5c87a',
                marginBottom: '1.25rem',
                lineHeight: 0.95,
              }}
            >
              Churro
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.95rem',
                fontStyle: 'italic',
                color: 'rgba(245,200,122,0.75)',
                lineHeight: 1.9,
                marginBottom: '2rem',
              }}
            >
              Perro mestizo color café. Vivía en los alrededores de una clínica veterinaria rural.
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {COMMUNITY.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.55rem 0.8rem',
                    background: 'rgba(232,132,58,0.07)',
                    borderRadius: '4px',
                    borderLeft: '2px solid #e8843a',
                  }}
                >
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{item.emoji}</span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.84rem',
                    color: 'rgba(245,200,122,0.88)',
                  }}>
                    <strong style={{ color: '#f5c87a' }}>{item.who}</strong>{' '}
                    {item.action}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — dog illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{ position: 'relative' }}>
              {/* Warm glow */}
              <div style={{
                position: 'absolute',
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(232,132,58,0.18) 0%, transparent 70%)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
              }} />
              <DogSVG />
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '0.88rem',
            color: 'rgba(245,200,122,0.4)',
            textAlign: 'center',
            marginTop: '2.5rem',
          }}
        >
          "...aunque siempre anduviera hecho un desastre de tierra."
        </motion.p>
      </div>
    </div>
  )
}

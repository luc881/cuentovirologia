import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    label: 'Entrada',
    desc: 'Atraviesa la mucosa nasal e infecta macrófagos y linfocitos del tejido linfoide.',
    color: '#00d4ff',
  },
  {
    num: '02',
    label: 'Replicación',
    desc: 'Utiliza la maquinaria celular para replicar su ARN y producir miles de partículas virales nuevas.',
    color: '#4488ff',
  },
  {
    num: '03',
    label: 'Primera Viremia',
    desc: 'Los virus viajan por la sangre y alcanzan pulmones, ganglios linfáticos y otros tejidos.',
    color: '#7c5cfc',
  },
  {
    num: '04',
    label: 'Síntomas',
    desc: 'Fiebre → secreción nasal → tos → descarga ocular y respiratoria.',
    color: '#a78bfa',
  },
]

export default function SceneInfeccion() {
  return (
    <div
      className="scene"
      style={{ background: 'linear-gradient(155deg, #07101e 0%, #0a0f1e 100%)' }}
    >
      <div style={{ maxWidth: '720px', width: '100%', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            color: '#00d4ff',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          Capítulo IV — La Infección
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5.5vw, 3.8rem)',
            textAlign: 'center',
            marginBottom: '0.75rem',
            color: 'white',
            lineHeight: 1.15,
          }}
        >
          Moquillo entró al cuerpo<br />
          <em style={{ color: '#00d4ff' }}>de Churro</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '3rem',
            fontSize: '0.9rem',
          }}
        >
          "Dentro de una pequeña gota que expulsó un perro enfermo."
        </motion.p>

        {/* Process timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.5 }}
            style={{
              position: 'absolute',
              left: '23px',
              top: '24px',
              bottom: '24px',
              width: '1px',
              background: 'linear-gradient(to bottom, #00d4ff, #4488ff, #a78bfa)',
              transformOrigin: 'top',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.22 }}
                style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: `rgba(${step.color === '#00d4ff' ? '0,212,255' : step.color === '#4488ff' ? '68,136,255' : step.color === '#7c5cfc' ? '124,92,252' : '167,139,250'},0.1)`,
                  border: `1px solid ${step.color}44`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  zIndex: 1,
                }}>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.58rem',
                    color: step.color,
                  }}>
                    {step.num}
                  </span>
                </div>

                <div style={{
                  flex: 1,
                  padding: '0.8rem 1rem',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderLeft: `2px solid ${step.color}55`,
                  borderRadius: '0 4px 4px 0',
                }}>
                  <p style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.68rem',
                    color: step.color,
                    marginBottom: '0.3rem',
                    letterSpacing: '0.05em',
                  }}>
                    {step.label}
                  </p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.83rem',
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.65,
                  }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Churro still wagging */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem 1.5rem',
            background: 'rgba(245,200,122,0.04)',
            border: '1px solid rgba(245,200,122,0.13)',
            borderRadius: '4px',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '1.05rem',
            color: '#f5c87a',
            marginBottom: '0.5rem',
          }}>
            "Churro seguía moviendo la cola."
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.78rem',
            color: 'rgba(245,200,122,0.45)',
          }}>
            Incluso enfermo, levantaba la cabeza e intentaba lamerles las manos aunque casi no tuviera fuerzas.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'

const SPIKE_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
const SPIKE_LENGTHS = [14, 16, 13, 17, 14, 15, 16, 13, 15, 17, 14, 16]

export default function VirusShape({
  size = 80,
  color = '#00d4ff',
  glowColor = '#00d4ff',
  rotate = true,
  pulse = true,
  opacity = 1,
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="-55 -55 110 110"
      style={{
        filter: `drop-shadow(0 0 ${Math.round(size * 0.12)}px ${glowColor})`,
        opacity,
        overflow: 'visible',
      }}
      animate={rotate ? { rotate: 360 } : {}}
      transition={rotate ? { duration: 22, repeat: Infinity, ease: 'linear' } : {}}
    >
      {/* Outer orbit ring */}
      <motion.circle
        cx="0" cy="0" r="44"
        fill="none"
        stroke={color}
        strokeWidth="0.5"
        strokeDasharray="3 7"
        opacity="0.25"
        animate={pulse ? { r: [44, 48, 44], opacity: [0.25, 0.5, 0.25] } : {}}
        transition={pulse ? { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } : {}}
      />

      {/* Spikes + tips */}
      {SPIKE_ANGLES.map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const len = SPIKE_LENGTHS[i]
        const x1 = Math.cos(rad) * 21
        const y1 = Math.sin(rad) * 21
        const x2 = Math.cos(rad) * (21 + len)
        const y2 = Math.sin(rad) * (21 + len)
        const tx = Math.cos(rad) * (21 + len + 5)
        const ty = Math.sin(rad) * (21 + len + 5)
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.5" opacity="0.75" />
            <circle cx={tx} cy={ty} r="3.5" fill={color} opacity="0.65" />
          </g>
        )
      })}

      {/* Outer membrane */}
      <motion.circle
        cx="0" cy="0" r="21"
        fill={color}
        opacity="0.1"
        animate={pulse ? { r: [21, 23, 21] } : {}}
        transition={pulse ? { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } : {}}
      />
      <circle cx="0" cy="0" r="21" fill="none" stroke={color} strokeWidth="1.5" opacity="0.85" />

      {/* Inner core */}
      <circle cx="0" cy="0" r="12" fill={color} opacity="0.18" />
      <circle cx="-5" cy="-5" r="3.5" fill={color} opacity="0.35" />
      <circle cx="4"  cy="3"  r="2.5" fill={color} opacity="0.28" />
      <circle cx="-2" cy="6"  r="1.5" fill={color} opacity="0.22" />
    </motion.svg>
  )
}

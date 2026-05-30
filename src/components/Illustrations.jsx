import { motion } from 'framer-motion'

// ── Character helpers ────────────────────────────────────────────────────────

function VirusChar({ cx = 0, cy = 0, r = 28, color = '#8b5cf6', expression = 'neutral', spikeCount = 12 }) {
  const angles = Array.from({ length: spikeCount }, (_, i) => (i * 360) / spikeCount)
  const sl = r * 0.42
  const tr = r * 0.18
  const mx = cy + r * 0.25

  return (
    <g>
      {angles.map((a, i) => {
        const rad = (a * Math.PI) / 180
        const x1 = cx + Math.cos(rad) * r, y1 = cy + Math.sin(rad) * r
        const x2 = cx + Math.cos(rad) * (r + sl), y2 = cy + Math.sin(rad) * (r + sl)
        const tx = cx + Math.cos(rad) * (r + sl + tr * 1.2)
        const ty = cy + Math.sin(rad) * (r + sl + tr * 1.2)
        return <g key={i}><line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={Math.max(1.5, r * 0.09)} /><circle cx={tx} cy={ty} r={tr} fill={color} /></g>
      })}
      <circle cx={cx + r * 0.06} cy={cy + r * 0.1} r={r} fill="rgba(0,0,0,0.22)" />
      <circle cx={cx} cy={cy} r={r} fill={color} />
      <circle cx={cx - r * 0.28} cy={cy - r * 0.28} r={r * 0.22} fill="rgba(255,255,255,0.17)" />
      <circle cx={cx - r * 0.3}  cy={cy - r * 0.08} r={r * 0.24} fill="white" />
      <circle cx={cx + r * 0.3}  cy={cy - r * 0.08} r={r * 0.24} fill="white" />
      <circle cx={cx - r * 0.26} cy={cy - r * 0.06} r={r * 0.13} fill="#1a0830" />
      <circle cx={cx + r * 0.34} cy={cy - r * 0.06} r={r * 0.13} fill="#1a0830" />
      <circle cx={cx - r * 0.2}  cy={cy - r * 0.14} r={r * 0.055} fill="white" />
      <circle cx={cx + r * 0.4}  cy={cy - r * 0.14} r={r * 0.055} fill="white" />
      {expression === 'happy' && <path d={`M${cx-r*.3} ${mx} Q${cx} ${mx+r*.28} ${cx+r*.3} ${mx}`} stroke="white" strokeWidth={r*.09} fill="none" strokeLinecap="round" />}
      {expression === 'sad'   && <path d={`M${cx-r*.28} ${mx+r*.24} Q${cx} ${mx} ${cx+r*.28} ${mx+r*.24}`} stroke="white" strokeWidth={r*.09} fill="none" strokeLinecap="round" />}
      {expression === 'worried' && <>
        <path d={`M${cx-r*.24} ${mx+r*.12} Q${cx} ${mx+r*.04} ${cx+r*.24} ${mx+r*.12}`} stroke="white" strokeWidth={r*.08} fill="none" strokeLinecap="round" />
        <path d={`M${cx-r*.46} ${cy-r*.44} Q${cx-r*.26} ${cy-r*.54} ${cx-r*.06} ${cy-r*.42}`} stroke="white" strokeWidth={r*.07} fill="none" strokeLinecap="round" />
        <path d={`M${cx+r*.06} ${cy-r*.42} Q${cx+r*.26} ${cy-r*.54} ${cx+r*.46} ${cy-r*.44}`} stroke="white" strokeWidth={r*.07} fill="none" strokeLinecap="round" />
      </>}
      {expression === 'neutral' && <line x1={cx-r*.22} y1={mx+r*.08} x2={cx+r*.22} y2={mx+r*.08} stroke="white" strokeWidth={r*.08} strokeLinecap="round" />}
      {expression === 'determined' && <>
        <path d={`M${cx-r*.28} ${mx} Q${cx} ${mx+r*.26} ${cx+r*.28} ${mx}`} stroke="white" strokeWidth={r*.09} fill="none" strokeLinecap="round" />
        <line x1={cx-r*.46} y1={cy-r*.38} x2={cx-r*.1} y2={cy-r*.34} stroke="white" strokeWidth={r*.08} strokeLinecap="round" />
        <line x1={cx+r*.1} y1={cy-r*.34} x2={cx+r*.46} y2={cy-r*.38} stroke="white" strokeWidth={r*.08} strokeLinecap="round" />
      </>}
    </g>
  )
}

function TumorChar({ cx = 0, cy = 0, r = 22 }) {
  return (
    <g>
      <circle cx={cx+r*.06} cy={cy+r*.08} r={r} fill="rgba(0,0,0,0.28)" />
      <ellipse cx={cx-r*.65} cy={cy+r*.65} rx={r*.42} ry={r*.3} fill="#8b1a2a" transform={`rotate(-35,${cx-r*.65},${cy+r*.65})`} />
      <ellipse cx={cx+r*.72} cy={cy+r*.5}  rx={r*.38} ry={r*.28} fill="#8b1a2a" transform={`rotate(20,${cx+r*.72},${cy+r*.5})`} />
      <ellipse cx={cx+r*.15} cy={cy-r*.88} rx={r*.32} ry={r*.26} fill="#8b1a2a" />
      <circle cx={cx} cy={cy} r={r} fill="#8b1a2a" />
      <circle cx={cx-r*.26} cy={cy-r*.26} r={r*.2} fill="rgba(255,100,100,0.1)" />
      <circle cx={cx-r*.26} cy={cy-r*.1} r={r*.22} fill="#1a0008" />
      <circle cx={cx+r*.26} cy={cy-r*.1} r={r*.22} fill="#1a0008" />
      <circle cx={cx-r*.22} cy={cy-r*.08} r={r*.1} fill="rgba(255,30,60,.65)" />
      <circle cx={cx+r*.3}  cy={cy-r*.08} r={r*.1} fill="rgba(255,30,60,.65)" />
      <line x1={cx-r*.44} y1={cy-r*.36} x2={cx-r*.08} y2={cy-r*.28} stroke="rgba(255,60,80,.8)" strokeWidth={r*.09} strokeLinecap="round" />
      <line x1={cx+r*.08} y1={cy-r*.28} x2={cx+r*.44} y2={cy-r*.36} stroke="rgba(255,60,80,.8)" strokeWidth={r*.09} strokeLinecap="round" />
      <path d={`M${cx-r*.26} ${cy+r*.36} Q${cx} ${cy+r*.22} ${cx+r*.26} ${cy+r*.36}`} stroke="rgba(255,60,80,.8)" strokeWidth={r*.09} fill="none" strokeLinecap="round" />
    </g>
  )
}

function CartoonDog({ cx = 0, cy = 0, r = 36, expression = 'happy', wag = false }) {
  const bw = r * 1.45, bh = r * 0.92, hr = r * 0.72
  const tailPivotX = cx + bw * 0.96
  const tailPivotY = cy + r * 0.1
  return (
    <g>
      {/* body */}
      <ellipse cx={cx} cy={cy + r * 0.55} rx={bw} ry={bh} fill="#8B5E3C" stroke="#5a3218" strokeWidth="2" />
      <ellipse cx={cx} cy={cy + r * 0.72} rx={bw * 0.58} ry={bh * 0.62} fill="#a0714a" opacity="0.45" />
      {/* head */}
      <circle cx={cx} cy={cy - r * 0.22} r={hr} fill="#8B5E3C" stroke="#5a3218" strokeWidth="2" />
      {/* ears */}
      <ellipse cx={cx - hr * 0.74} cy={cy - r * 0.58} rx={hr * 0.37} ry={hr * 0.6} fill="#5a3218" stroke="#3a2010" strokeWidth="1.5" transform={`rotate(-22,${cx-hr*.74},${cy-r*.58})`} />
      <ellipse cx={cx + hr * 0.74} cy={cy - r * 0.58} rx={hr * 0.37} ry={hr * 0.6} fill="#5a3218" stroke="#3a2010" strokeWidth="1.5" transform={`rotate(22,${cx+hr*.74},${cy-r*.58})`} />
      {/* muzzle */}
      <ellipse cx={cx} cy={cy + r * 0.02} rx={hr * 0.52} ry={hr * 0.38} fill="#a0714a" />
      {/* eyes */}
      <circle cx={cx - hr * 0.34} cy={cy - r * 0.32} r={hr * 0.2} fill="white" stroke="#1a0e08" strokeWidth="1" />
      <circle cx={cx + hr * 0.34} cy={cy - r * 0.32} r={hr * 0.2} fill="white" stroke="#1a0e08" strokeWidth="1" />
      <circle cx={cx - hr * 0.3}  cy={cy - r * 0.3}  r={hr * 0.12} fill="#1a0e08" />
      <circle cx={cx + hr * 0.38} cy={cy - r * 0.3}  r={hr * 0.12} fill="#1a0e08" />
      <circle cx={cx - hr * 0.24} cy={cy - r * 0.35} r={hr * 0.05} fill="white" />
      <circle cx={cx + hr * 0.44} cy={cy - r * 0.35} r={hr * 0.05} fill="white" />
      {/* nose */}
      <ellipse cx={cx} cy={cy - r * 0.02} rx={hr * 0.18} ry={hr * 0.14} fill="#1a0e08" />
      {/* mouth */}
      {expression === 'happy' && <>
        <path d={`M${cx-hr*.2} ${cy+r*.1} Q${cx} ${cy+r*.22} ${cx+hr*.2} ${cy+r*.1}`} stroke="#1a0e08" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx={cx} cy={cy + r * 0.2} rx={hr * 0.15} ry={hr * 0.18} fill="#e8607a" />
      </>}
      {expression === 'sick' && <path d={`M${cx-hr*.18} ${cy+r*.12} Q${cx} ${cy+r*.07} ${cx+hr*.18} ${cy+r*.12}`} stroke="#1a0e08" strokeWidth="2" fill="none" strokeLinecap="round" />}
      {/* tail */}
      {wag
        ? <motion.g style={{ transformOrigin: `${tailPivotX}px ${tailPivotY}px` }} animate={{ rotate: [-28, 28, -28] }} transition={{ duration: 0.45, repeat: Infinity, ease: 'easeInOut' }}>
            <path d={`M${tailPivotX} ${tailPivotY} Q${tailPivotX + r * 0.9} ${tailPivotY - r * 0.5} ${tailPivotX + r * 0.7} ${tailPivotY - r * 1.2}`} stroke="#8B5E3C" strokeWidth="8" fill="none" strokeLinecap="round" />
          </motion.g>
        : <path d={`M${tailPivotX} ${tailPivotY} Q${tailPivotX+r*.9} ${tailPivotY-r*.5} ${tailPivotX+r*.7} ${tailPivotY-r*1.2}`} stroke="#8B5E3C" strokeWidth="8" fill="none" strokeLinecap="round" />
      }
      {/* legs */}
      <rect x={cx - bw * 0.77} y={cy + r * 1.3} width={bw * 0.33} height={r * 0.72} rx={bw * 0.17} fill="#5a3218" stroke="#3a2010" strokeWidth="1.5" />
      <rect x={cx - bw * 0.28} y={cy + r * 1.38} width={bw * 0.3}  height={r * 0.65} rx={bw * 0.15} fill="#5a3218" stroke="#3a2010" strokeWidth="1.5" />
      <rect x={cx + bw * 0.02} y={cy + r * 1.38} width={bw * 0.3}  height={r * 0.65} rx={bw * 0.15} fill="#5a3218" stroke="#3a2010" strokeWidth="1.5" />
      <rect x={cx + bw * 0.46} y={cy + r * 1.3}  width={bw * 0.33} height={r * 0.72} rx={bw * 0.17} fill="#5a3218" stroke="#3a2010" strokeWidth="1.5" />
    </g>
  )
}

// ── Scene illustrations ──────────────────────────────────────────────────────

export function IlluEstacion() {
  return (
    <svg viewBox="0 0 660 270" style={{ width: '100%', display: 'block', borderRadius: '8px' }}>
      <defs>
        <linearGradient id="ig-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#070c1c" /><stop offset="100%" stopColor="#0c1830" />
        </linearGradient>
        <radialGradient id="ig-bglow" cx="30%" cy="70%" r="35%">
          <stop offset="0%" stopColor="#4488ff" stopOpacity=".28" /><stop offset="100%" stopColor="#4488ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="660" height="270" fill="url(#ig-sky)" rx="8" />
      {[[40,18],[110,40],[170,12],[600,22],[640,44],[500,15],[450,38],[560,50]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={1+(i%2)*.5} fill="white" opacity={.25+(i%3)*.15} />
      ))}
      <rect x="0" y="220" width="660" height="50" fill="#060b18" />
      <line x1="0" y1="220" x2="660" y2="220" stroke="#162234" strokeWidth="1" />
      {/* glow */}
      <ellipse cx="190" cy="210" rx="130" ry="28" fill="url(#ig-bglow)" />
      {/* building */}
      <rect x="90" y="135" width="200" height="85" fill="#0e1e38" stroke="#4488ff" strokeWidth="1.5" rx="2" />
      <ellipse cx="190" cy="135" rx="100" ry="46" fill="#122040" stroke="#4488ff" strokeWidth="1.5" />
      <circle cx="190" cy="92" r="9" fill="#4488ff" opacity=".55" />
      <rect x="187" y="76" width="6" height="18" fill="#4488ff" opacity=".55" />
      <rect x="110" y="162" width="26" height="30" fill="#4488ff" opacity=".45" rx="2" />
      <rect x="177" y="162" width="26" height="30" fill="#4488ff" opacity=".45" rx="2" />
      <rect x="244" y="162" width="26" height="30" fill="#4488ff" opacity=".45" rx="2" />
      <rect x="170" y="192" width="40" height="28" fill="#1e3a70" rx="3" stroke="#4488ff" strokeWidth="1" />
      <rect x="135" y="145" width="110" height="15" fill="#0a1828" stroke="#4488ff" strokeWidth="1" rx="2" />
      <text x="190" y="156.5" textAnchor="middle" fill="#00d4ff" fontSize="7.5" fontFamily="monospace" letterSpacing="1">ESTACIÓN VIRAL</text>
      {/* corridor perspective lines */}
      <line x1="290" y1="135" x2="660" y2="115" stroke="#1a2a40" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="290" y1="220" x2="660" y2="220" stroke="#1a2a40" strokeWidth="1" strokeDasharray="4 6" />
      {/* happy viruses heading to building */}
      <VirusChar cx={355} cy={195} r={20} color="#ff6b6b" expression="happy" spikeCount={10} />
      <VirusChar cx={408} cy={198} r={22} color="#ff9f43" expression="happy" spikeCount={10} />
      <VirusChar cx={464} cy={194} r={20} color="#ffd93d" expression="happy" spikeCount={10} />
      <VirusChar cx={516} cy={198} r={22} color="#5fd38d" expression="happy" spikeCount={10} />
      <VirusChar cx={568} cy={194} r={20} color="#4488ff" expression="happy" spikeCount={10} />
      {/* Moquillo — hanging back, worried */}
      <VirusChar cx={622} cy={198} r={22} color="#8b5cf6" expression="worried" spikeCount={12} />
      <text x="628" y="162" fill="rgba(167,139,250,.85)" fontSize="13" fontFamily="sans-serif" fontWeight="bold">?</text>
      <text x="640" y="172" fill="rgba(167,139,250,.5)" fontSize="10" fontFamily="sans-serif">?</text>
      {/* arrow */}
      <path d="M320 200 L345 200 M338 195 L345 200 L338 205" stroke="rgba(0,212,255,.2)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function IlluMoquillo() {
  return (
    <svg viewBox="0 0 660 270" style={{ width: '100%', display: 'block', borderRadius: '8px' }}>
      <defs>
        <radialGradient id="ig-purpleglow" cx="65%" cy="50%" r="40%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity=".22" /><stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="660" height="270" fill="#0a0a20" rx="8" />
      <ellipse cx="420" cy="135" rx="160" ry="110" fill="url(#ig-purpleglow)" />
      {/* laughing viruses in background */}
      <VirusChar cx={80}  cy={195} r={18} color="#ff6b6b" expression="happy" spikeCount={10} />
      <VirusChar cx={130} cy={200} r={16} color="#ff9f43" expression="happy" spikeCount={10} />
      <VirusChar cx={178} cy={195} r={18} color="#5fd38d" expression="happy" spikeCount={10} />
      <text x="68"  y="165" fill="rgba(255,107,107,.75)" fontSize="12" fontFamily="sans-serif" fontWeight="bold">JA</text>
      <text x="118" y="160" fill="rgba(255,159,67,.75)"  fontSize="14" fontFamily="sans-serif" fontWeight="bold">JA</text>
      <text x="165" y="157" fill="rgba(95,211,141,.75)"  fontSize="12" fontFamily="sans-serif" fontWeight="bold">JA</text>
      {/* Moquillo — large, central, worried */}
      <VirusChar cx={420} cy={140} r={80} color="#8b5cf6" expression="worried" spikeCount={14} />
      {/* Question marks floating */}
      <text x="290" y="80"  fill="rgba(167,139,250,.9)" fontSize="32" fontFamily="sans-serif" fontWeight="bold">?</text>
      <text x="530" y="70"  fill="rgba(167,139,250,.7)" fontSize="24" fontFamily="sans-serif">?</text>
      <text x="310" y="200" fill="rgba(167,139,250,.5)" fontSize="18" fontFamily="sans-serif">?</text>
      <text x="548" y="200" fill="rgba(167,139,250,.6)" fontSize="28" fontFamily="sans-serif" fontWeight="bold">?</text>
      {/* speech bubbles from laughing viruses */}
      <ellipse cx="145" cy="148" rx="44" ry="16" fill="#1a1a30" stroke="rgba(255,255,255,.08)" strokeWidth="1" rx="8" />
      <text x="145" y="153" textAnchor="middle" fill="rgba(255,255,255,.45)" fontSize="8" fontFamily="sans-serif">¿no es nuestro trabajo?</text>
    </svg>
  )
}

export function IlluChurro() {
  return (
    <svg viewBox="0 0 660 300" style={{ width: '100%', display: 'block', borderRadius: '8px' }}>
      <defs>
        <linearGradient id="ig-warm" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2d1505" /><stop offset="100%" stopColor="#180a02" />
        </linearGradient>
        <radialGradient id="ig-sun" cx="78%" cy="20%" r="30%">
          <stop offset="0%" stopColor="#ffd700" stopOpacity=".35" /><stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="660" height="300" fill="url(#ig-warm)" rx="8" />
      <ellipse cx="515" cy="60" rx="220" ry="180" fill="url(#ig-sun)" />
      {/* ground */}
      <rect x="0" y="250" width="660" height="50" fill="#120800" />
      <line x1="0" y1="250" x2="660" y2="250" stroke="#2a1205" strokeWidth="1" />
      {/* Clinic building */}
      <rect x="440" y="120" width="190" height="130" fill="#1a0e06" stroke="#8B4513" strokeWidth="2" rx="3" />
      <rect x="490" y="100" width="90" height="24" fill="#1a0e06" stroke="#8B4513" strokeWidth="1.5" />
      <rect x="456" y="148" width="40" height="40" fill="#8B4513" opacity=".4" rx="2" />
      <rect x="534" y="148" width="40" height="40" fill="#8B4513" opacity=".4" rx="2" />
      <rect x="505" y="180" width="35" height="70" fill="#5a2e10" rx="3" stroke="#8B4513" strokeWidth="1" />
      {/* Clinic sign */}
      <rect x="462" y="106" width="76" height="14" fill="#0a0602" stroke="#e8843a" strokeWidth="1" rx="2" />
      <text x="500" y="117" textAnchor="middle" fill="#e8843a" fontSize="7" fontFamily="monospace" letterSpacing=".8">CLÍNICA VET.</text>
      {/* cross on building */}
      <line x1="524" y1="160" x2="524" y2="180" stroke="#e8843a" strokeWidth="2.5" />
      <line x1="514" y1="170" x2="534" y2="170" stroke="#e8843a" strokeWidth="2.5" />
      {/* Churro */}
      <CartoonDog cx={220} cy={150} r={46} expression="happy" wag={true} />
      {/* food bowl */}
      <ellipse cx="130" cy="245" rx="28" ry="10" fill="#3a2010" stroke="#8B4513" strokeWidth="1.5" />
      <ellipse cx="130" cy="241" rx="22" ry="6" fill="#c8a060" opacity=".8" />
      {/* water bowl */}
      <ellipse cx="340" cy="245" rx="25" ry="9" fill="#1a3050" stroke="#4488ff" strokeWidth="1.5" />
      <ellipse cx="340" cy="241" rx="19" ry="5" fill="#4488ff" opacity=".5" />
      {/* person silhouette offering food */}
      <g opacity=".7">
        <circle cx="85" cy="178" r="14" fill="#2a5a3a" stroke="#3a7a4a" strokeWidth="1" />
        <rect x="72" y="192" width="26" height="48" fill="#2a5a3a" stroke="#3a7a4a" strokeWidth="1" rx="6" />
        <line x1="98" y1="200" x2="118" y2="218" stroke="#2a5a3a" strokeWidth="5" strokeLinecap="round" />
        <circle cx="122" cy="220" r="7" fill="#e8d090" />
      </g>
      {/* heart */}
      <text x="182" y="108" fill="rgba(232,132,58,.7)" fontSize="18" fontFamily="sans-serif">♥</text>
      <text x="248" y="100" fill="rgba(245,200,122,.5)" fontSize="14" fontFamily="sans-serif">♥</text>
    </svg>
  )
}

export function IlluSintomas() {
  return (
    <svg viewBox="0 0 660 200" style={{ width: '100%', display: 'block', borderRadius: '8px' }}>
      <rect width="660" height="200" fill="#0e0e18" rx="8" />
      <line x1="220" y1="20" x2="220" y2="180" stroke="rgba(255,255,255,.07)" strokeWidth="1" />
      <line x1="440" y1="20" x2="440" y2="180" stroke="rgba(255,255,255,.07)" strokeWidth="1" />
      {/* Panel 1 - Fiebre */}
      <text x="110" y="40" textAnchor="middle" fill="rgba(255,150,50,.7)" fontSize="10" fontFamily="monospace" letterSpacing="1">FIEBRE</text>
      <CartoonDog cx={110} cy={110} r={32} expression="sick" wag={false} />
      {/* thermometer */}
      <rect x="166" y="58" width="8" height="35" rx="4" fill="#cc3030" opacity=".8" />
      <circle cx="170" cy="96" r="7" fill="#cc3030" opacity=".8" />
      {/* heat waves */}
      <path d="M178 62 Q184 67 178 72 Q184 77 178 82" stroke="rgba(255,120,30,.6)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Panel 2 - Secreción nasal */}
      <text x="330" y="40" textAnchor="middle" fill="rgba(150,220,255,.7)" fontSize="10" fontFamily="monospace" letterSpacing="1">SECRECIÓN</text>
      <CartoonDog cx={330} cy={110} r={32} expression="sick" wag={false} />
      {/* drip */}
      <ellipse cx="358" cy="106" rx="5" ry="7" fill="rgba(150,220,255,.7)" />
      <ellipse cx="358" cy="116" rx="3" ry="4" fill="rgba(150,220,255,.6)" />
      {/* Panel 3 - Tos */}
      <text x="550" y="40" textAnchor="middle" fill="rgba(200,200,255,.7)" fontSize="10" fontFamily="monospace" letterSpacing="1">TOS</text>
      <CartoonDog cx={550} cy={110} r={32} expression="sick" wag={false} />
      {/* cough lines */}
      <path d="M498 95 Q490 88 498 82" stroke="rgba(200,200,255,.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M492 100 Q482 92 492 84" stroke="rgba(200,200,255,.35)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M486 106 Q474 96 486 86" stroke="rgba(200,200,255,.2)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function IlluCola() {
  return (
    <svg viewBox="0 0 660 280" style={{ width: '100%', display: 'block', borderRadius: '8px' }}>
      <defs>
        <radialGradient id="ig-warmglow2" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#e8843a" stopOpacity=".18" /><stop offset="100%" stopColor="#e8843a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="660" height="280" fill="#120b02" rx="8" />
      <ellipse cx="330" cy="200" rx="260" ry="140" fill="url(#ig-warmglow2)" />
      {/* ground */}
      <rect x="0" y="248" width="660" height="32" fill="#0a0600" />
      {/* Churro center, big, wagging */}
      <CartoonDog cx={290} cy={148} r={56} expression="happy" wag={true} />
      {/* Person reaching out */}
      <g opacity=".8">
        <circle cx="514" cy="148" r="16" fill="#2a5a3a" />
        <rect x="500" y="164" width="28" height="55" fill="#2a5a3a" rx="6" />
        <line x1="500" y1="172" x2="472" y2="190" stroke="#2a5a3a" strokeWidth="6" strokeLinecap="round" />
        <circle cx="468" cy="192" r="9" fill="#e8d090" />
      </g>
      {/* motion lines on tail area */}
      <path d="M410 100 Q425 108 415 118" stroke="rgba(245,200,122,.3)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M418 86  Q436 96  423 110" stroke="rgba(245,200,122,.2)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M428 75  Q448 86  432 103" stroke="rgba(245,200,122,.15)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* caption */}
      <text x="330" y="266" textAnchor="middle" fill="rgba(245,200,122,.35)" fontSize="9" fontFamily="monospace" letterSpacing="1">CHURRO SEGUÍA MOVIENDO LA COLA</text>
    </svg>
  )
}

export function IlluTumor() {
  return (
    <svg viewBox="0 0 660 280" style={{ width: '100%', display: 'block', borderRadius: '8px' }}>
      <defs>
        <radialGradient id="ig-tglow" cx="60%" cy="45%" r="45%">
          <stop offset="0%" stopColor="#8b0000" stopOpacity=".4" /><stop offset="100%" stopColor="#8b0000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="660" height="280" fill="#0a0000" rx="8" />
      <ellipse cx="390" cy="130" rx="220" ry="160" fill="url(#ig-tglow)" />
      {/* Tumor cells */}
      <TumorChar cx={390} cy={100} r={36} />
      <TumorChar cx={470} cy={150} r={30} />
      <TumorChar cx={310} cy={148} r={28} />
      {/* Moquillo facing them — shocked */}
      <VirusChar cx={165} cy={145} r={52} color="#8b5cf6" expression="worried" spikeCount={14} />
      {/* speech bubble from tumor */}
      <ellipse cx="390" cy="53" rx="105" ry="20" fill="#1a0005" stroke="rgba(139,0,0,.4)" strokeWidth="1" />
      <text x="390" y="58" textAnchor="middle" fill="rgba(255,60,60,.8)" fontSize="8.5" fontFamily="sans-serif" fontStyle="italic">Nosotros nunca dejamos sobrevivientes.</text>
      {/* Sleeping Churro — small, far background */}
      <g opacity=".4" transform="translate(540,210) scale(0.42)">
        <ellipse cx="0" cy="20" rx="70" ry="28" fill="#7a4a28" />
        <circle cx="0" cy="-6" r="24" fill="#7a4a28" />
        <path d="M-8 -4 Q0 2 8 -4" stroke="#1a0e08" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M-18 10 Q-22 30 -18 48" stroke="#5a3218" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M18 10 Q22 30 18 48" stroke="#5a3218" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M-30 20 Q-50 14 -44 2" stroke="#7a4a28" strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>
      {/* cobija / blanket */}
      <ellipse cx="540" cy="246" rx="55" ry="12" fill="#2a1a0a" opacity=".6" />
      <text x="540" y="250" textAnchor="middle" fill="rgba(245,200,122,.25)" fontSize="7.5" fontFamily="sans-serif" fontStyle="italic">durmiendo...</text>
      {/* exclamation from Moquillo */}
      <text x="120" y="82" fill="rgba(167,139,250,.85)" fontSize="22" fontFamily="sans-serif" fontWeight="bold">!</text>
    </svg>
  )
}

export function IlluMutacion() {
  return (
    <svg viewBox="0 0 660 270" style={{ width: '100%', display: 'block', borderRadius: '8px' }}>
      <defs>
        <linearGradient id="ig-mutgrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0a0000" /><stop offset="50%" stopColor="#06100a" /><stop offset="100%" stopColor="#001a0a" />
        </linearGradient>
        <radialGradient id="ig-greenglow" cx="75%" cy="50%" r="40%">
          <stop offset="0%" stopColor="#00ff88" stopOpacity=".22" /><stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="660" height="270" fill="url(#ig-mutgrad)" rx="8" />
      <ellipse cx="490" cy="135" rx="180" ry="130" fill="url(#ig-greenglow)" />
      {/* dividing line */}
      <line x1="330" y1="0" x2="330" y2="270" stroke="rgba(255,255,255,.05)" strokeWidth="1" strokeDasharray="5 5" />
      {/* LEFT: original Moquillo + dying tumor cells */}
      <VirusChar cx={150} cy={135} r={55} color="#8b5cf6" expression="neutral" spikeCount={14} />
      {/* small dying tumor cells */}
      <TumorChar cx={260} cy={90}  r={20} />
      <TumorChar cx={272} cy={170} r={17} />
      {/* X on tumors */}
      <line x1="246" y1="76" x2="274" y2="104" stroke="rgba(0,255,136,.7)" strokeWidth="3" strokeLinecap="round" />
      <line x1="274" y1="76" x2="246" y2="104" stroke="rgba(0,255,136,.7)" strokeWidth="3" strokeLinecap="round" />
      <line x1="258" y1="155" x2="286" y2="183" stroke="rgba(0,255,136,.7)" strokeWidth="3" strokeLinecap="round" />
      <line x1="286" y1="155" x2="258" y2="183" stroke="rgba(0,255,136,.7)" strokeWidth="3" strokeLinecap="round" />
      {/* arrow */}
      <path d="M308 125 L352 125 M344 118 L352 125 L344 132" stroke="rgba(0,255,136,.55)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <text x="330" y="145" textAnchor="middle" fill="rgba(0,255,136,.4)" fontSize="7.5" fontFamily="monospace">MUTACIÓN</text>
      {/* RIGHT: mutated Moquillo (green) */}
      <VirusChar cx={500} cy={135} r={55} color="#00cc66" expression="determined" spikeCount={14} />
      {/* sparkles */}
      {[[420,60],[440,195],[570,55],[580,205],[610,130],[380,130]].map(([x,y],i)=>(
        <g key={i}><line x1={x} y1={y-6} x2={x} y2={y+6} stroke="rgba(0,255,136,.6)" strokeWidth="1.5" strokeLinecap="round" /><line x1={x-6} y1={y} x2={x+6} y2={y} stroke="rgba(0,255,136,.6)" strokeWidth="1.5" strokeLinecap="round" /></g>
      ))}
    </svg>
  )
}

export function IlluFinal() {
  return (
    <svg viewBox="0 0 660 290" style={{ width: '100%', display: 'block', borderRadius: '8px' }}>
      <defs>
        <radialGradient id="ig-golden" cx="50%" cy="20%" r="55%">
          <stop offset="0%" stopColor="#ffd700" stopOpacity=".3" /><stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ig-finalbg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e0d00" /><stop offset="100%" stopColor="#0e0600" />
        </linearGradient>
      </defs>
      <rect width="660" height="290" fill="url(#ig-finalbg)" rx="8" />
      <ellipse cx="330" cy="80" rx="280" ry="200" fill="url(#ig-golden)" />
      {/* sun rays */}
      {[0,45,90,135,180,225,270,315].map((a,i)=>{
        const rad = a*Math.PI/180
        return <line key={i} x1={330+Math.cos(rad)*50} y1={55+Math.sin(rad)*50} x2={330+Math.cos(rad)*130} y2={55+Math.sin(rad)*130} stroke="rgba(255,215,0,.1)" strokeWidth="2" />
      })}
      {/* sun */}
      <circle cx="330" cy="55" r="28" fill="rgba(255,215,0,.18)" stroke="rgba(255,215,0,.3)" strokeWidth="1.5" />
      {/* ground */}
      <rect x="0" y="258" width="660" height="32" fill="#0a0500" />
      <line x1="0" y1="258" x2="660" y2="258" stroke="#1a0e02" strokeWidth="1" />
      {/* Clinic */}
      <rect x="450" y="138" width="180" height="120" fill="#1a0e06" stroke="#8B4513" strokeWidth="1.5" rx="2" />
      <rect x="495" y="118" width="90" height="22" fill="#1a0e06" stroke="#8B4513" strokeWidth="1.5" />
      <rect x="465" y="162" width="36" height="36" fill="#8B4513" opacity=".38" rx="2" />
      <rect x="539" y="162" width="36" height="36" fill="#8B4513" opacity=".38" rx="2" />
      <rect x="505" y="192" width="32" height="66" fill="#5a2e10" rx="2" stroke="#8B4513" strokeWidth="1" />
      <rect x="468" y="124" width="74" height="13" fill="#0a0602" stroke="#e8843a" strokeWidth="1" rx="2" />
      <text x="505" y="134.5" textAnchor="middle" fill="#e8843a" fontSize="7" fontFamily="monospace" letterSpacing=".8">CLÍNICA VET.</text>
      <line x1="524" y1="154" x2="524" y2="172" stroke="#e8843a" strokeWidth="2.5" />
      <line x1="515" y1="163" x2="533" y2="163" stroke="#e8843a" strokeWidth="2.5" />
      {/* Happy Churro — big */}
      <CartoonDog cx={220} cy={150} r={52} expression="happy" wag={true} />
      {/* Three students */}
      {[380, 418, 456].map((x, i) => (
        <g key={i} opacity=".85">
          <circle cx={x} cy={185} r={13} fill="#2a5a3a" />
          <rect x={x-11} y={198} width={22} height={44} fill="#2a5a3a" rx="5" />
        </g>
      ))}
      {/* hearts / sparkles */}
      <text x="155" y="98" fill="rgba(255,215,0,.65)" fontSize="18">♥</text>
      <text x="278" y="88" fill="rgba(255,215,0,.45)" fontSize="14">✦</text>
      <text x="185" y="112" fill="rgba(245,200,122,.4)" fontSize="12">✦</text>
      {/* caption */}
      <text x="330" y="278" textAnchor="middle" fill="rgba(255,215,0,.3)" fontSize="9" fontFamily="monospace" letterSpacing="1">TODAS LAS MAÑANAS, MOVIENDO LA COLA</text>
    </svg>
  )
}

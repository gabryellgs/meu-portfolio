import { useEffect, useState } from 'react';

export default function Loader() {
  const [phase, setPhase]       = useState('initial');
  const [showRing, setShowRing] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowRing(true), 1900);
    const t2 = setTimeout(() => setPhase('sliding'), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 'done') return null;
  const sliding = phase === 'sliding';

  /*
   * G geométrico com linhas retas — estilo "A" do anish7.me
   * ViewBox 200×200, traçado a partir do topo-direito:
   *
   *  ┌──────┐   ← topo (155,40 → 45,40)
   *  │           ← esquerda descendo (45,40 → 45,165)
   *  │      ─┤  ← base + direita parcial + crossbar
   *  └──────┘
   *
   * Path: M 155 40 L 45 40 L 45 165 L 155 165 L 155 105 L 100 105
   * Comprimento total: 110+125+110+60+55 = 460 → dasharray 475
   */
  const G_PATH  = 'M 155 40 L 45 40 L 45 165 L 155 165 L 155 105 L 100 105';
  const DASH    = '475px';
  const GOLD    = '#89CFF0';
  const GOLD2   = '#B2EBF2';
  const GOLD_DIM = 'rgba(137,207,240,0.25)';

  return (
    <>
      {/* Barra dourada atrás */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 8999,
        background: GOLD,
        transform: sliding ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.75s cubic-bezier(0.76,0,0.24,1) 0.1s',
      }} onTransitionEnd={() => { if (sliding) setPhase('done'); }} />

      {/* Overlay escuro com o logo */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 9000,
        background: '#08060A',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: '1.5rem',
        transform: sliding ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.85s cubic-bezier(0.76,0,0.24,1)',
      }}>

        <svg width="240" height="240" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Glow dourado */}
            <filter id="gold-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            <filter id="gold-glow-strong" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="9" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>

            {/* Gradiente dourado para o traço */}
            <linearGradient id="gold-grad" x1="155" y1="40" x2="45" y2="165" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#B2EBF2"/>
              <stop offset="45%"  stopColor="#89CFF0"/>
              <stop offset="100%" stopColor="#5C9CE6"/>
            </linearGradient>
          </defs>

          {/* ── Brackets de mira dourados ── */}
          {[
            'M 22 38 L 22 22 L 38 22',
            'M 162 22 L 178 22 L 178 38',
            'M 22 162 L 22 178 L 38 178',
            'M 162 178 L 178 178 L 178 162',
          ].map((d, i) => (
            <path key={i} d={d}
              stroke="rgba(137,207,240,0.5)"
              strokeWidth="2" strokeLinecap="round" fill="none"
              style={{ opacity: 0, animation: `g-fadeIn 0.4s ease ${i * 0.06}s forwards` }}
            />
          ))}

          {/* ── Ring externo tracejado (aparece após G terminar) ── */}
          <rect
            x="16" y="16" width="168" height="168" rx="4"
            stroke="rgba(137,207,240,0.12)" strokeWidth="1" strokeDasharray="4 7"
            fill="none"
            style={{
              opacity: showRing ? 1 : 0,
              transition: 'opacity 0.6s ease',
              transformOrigin: '100px 100px',
              animation: showRing ? 'g-spin 30s linear infinite' : 'none',
            }}
          />

          {/* ── Halo forte ── */}
          <path d={G_PATH}
            stroke="rgba(137,207,240,0.18)"
            strokeWidth="16" strokeLinecap="square" strokeLinejoin="miter"
            fill="none" filter="url(#gold-glow-strong)"
            style={{ strokeDasharray: DASH, strokeDashoffset: DASH, animation: `g-draw 1.7s cubic-bezier(0.65,0,0.35,1) 0.4s forwards` }}
          />

          {/* ── Blur médio ── */}
          <path d={G_PATH}
            stroke={GOLD_DIM}
            strokeWidth="9" strokeLinecap="square" strokeLinejoin="miter"
            fill="none" filter="url(#gold-glow)"
            style={{ strokeDasharray: DASH, strokeDashoffset: DASH, animation: `g-draw 1.7s cubic-bezier(0.65,0,0.35,1) 0.4s forwards` }}
          />

          {/* ── G principal com gradiente ── */}
          <path d={G_PATH}
            stroke="url(#gold-grad)"
            strokeWidth="5.5" strokeLinecap="square" strokeLinejoin="miter"
            fill="none"
            style={{ strokeDasharray: DASH, strokeDashoffset: DASH, animation: `g-draw 1.7s cubic-bezier(0.65,0,0.35,1) 0.4s forwards` }}
          />

          {/* ── Traço inner fino (detalhe) ── */}
          <path d={G_PATH}
            stroke="rgba(255,240,180,0.15)"
            strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"
            fill="none"
            style={{ strokeDasharray: DASH, strokeDashoffset: DASH, animation: `g-draw 1.7s cubic-bezier(0.65,0,0.35,1) 0.4s forwards` }}
          />

          {/* ── Dot no ponto de início (topo direito do G) ── */}
          <rect x="150" y="35" width="10" height="10" fill={GOLD2}
            filter="url(#gold-glow)"
            style={{ opacity: 0, animation: 'g-pop 0.4s ease 2.05s forwards', transformOrigin: '155px 40px' }}
          />

          {/* ── Dot na ponta do crossbar ── */}
          <rect x="95" y="100" width="10" height="10" fill={GOLD2}
            filter="url(#gold-glow)"
            style={{ opacity: 0, animation: 'g-pop 0.4s ease 2.2s forwards', transformOrigin: '100px 105px' }}
          />

          {/* ── Linhas de eixo horizontais (aparecem com ring) ── */}
          <line x1="16" y1="105" x2="38" y2="105"
            stroke="rgba(137,207,240,0.2)" strokeWidth="1" strokeDasharray="3 4"
            style={{ opacity: showRing ? 1 : 0, transition: 'opacity 0.5s ease 0.1s' }}
          />
          <line x1="162" y1="105" x2="184" y2="105"
            stroke="rgba(137,207,240,0.2)" strokeWidth="1" strokeDasharray="3 4"
            style={{ opacity: showRing ? 1 : 0, transition: 'opacity 0.5s ease 0.1s' }}
          />
        </svg>

        {/* Nome + cargo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.72rem', letterSpacing: '0.35em',
            color: 'rgba(137,207,240,0.7)', textTransform: 'uppercase',
            opacity: 0, animation: 'g-fadeIn 0.7s ease 1.7s forwards',
          }}>
            Gabryell Gonçalves
          </p>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.58rem', letterSpacing: '0.2em',
            color: 'rgba(137,207,240,0.35)', textTransform: 'uppercase',
            opacity: 0, animation: 'g-fadeIn 0.7s ease 1.95s forwards',
          }}>
            Full Stack Developer
          </p>
        </div>

        <style>{`
          @keyframes g-draw    { to { stroke-dashoffset: 0; } }
          @keyframes g-pop     { 0%{opacity:0;transform:scale(0)} 60%{opacity:1;transform:scale(1.5)} 100%{opacity:1;transform:scale(1)} }
          @keyframes g-fadeIn  { to { opacity: 1; } }
          @keyframes g-spin    { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        `}</style>
      </div>
    </>
  );
}

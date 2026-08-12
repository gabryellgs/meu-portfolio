import { useEffect, useRef } from 'react';
import { Reveal } from './Reveal.jsx';

/* Word-by-word mask reveal (exatamente como anish7.me) */
function MaskTagline({ text }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll('.word-inner').forEach((s, i) =>
          setTimeout(() => s.classList.add('visible'), i * 75)
        );
      }
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <h2 className="about-tagline" ref={ref}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="word">
          <span className="word-inner">{word}</span>
        </span>
      ))}
    </h2>
  );
}

/* Contador animado */
function Counter({ target, suffix = '' }) {
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const dur = 1800, start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(ease * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function About() {
  return (
    <>
      {/* ══════════ STICKY GREEN SECTION (anish7.me style) ══════════ */}
      <div className="about-sticky-wrap" id="sobre">
        <div className="about-sticky">
          <div className="about-sticky-inner">

            <MaskTagline text="Ajudando marcas a se destacarem na era digital. Juntos vamos definir o novo padrão. Sem enrolação, sempre na vanguarda." />

            <p className="about-sub-text">
              A combinação da minha paixão por design, código e interação me coloca
              em um lugar único no mundo do desenvolvimento web.
            </p>



            {/* Soft Skills */}
            <div className="about-sticky-inner" style={{ marginTop: 0 }}>
              <div style={{ marginTop: '3rem', width: '100%' }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#1A1000',
                  opacity: 0.4,
                  marginBottom: '1.5rem',
                }}>Soft Skills</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.875rem' }}>
                  {[
                    { label: 'Resolução de Problemas', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></svg> },
                    { label: 'Trabalho em Equipe',     icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
                    { label: 'Comunicação',             icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
                    { label: 'Proatividade',            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
                    { label: 'Adaptabilidade',          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg> },
                    { label: 'Liderança',               icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
                    { label: 'Criatividade',            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 1 5 5c0 2.5-2 4.5-2 7H9c0-2.5-2-4.5-2-7a5 5 0 0 1 5-5z"/><line x1="9" y1="17" x2="15" y2="17"/><line x1="10" y1="20" x2="14" y2="20"/></svg> },
                    { label: 'Foco em Resultados',      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
                  ].map(({ label, icon }) => (
                    <div key={label}
                      style={{
                        padding: '1.75rem 1rem',
                        background: 'rgba(255,255,255,0.18)',
                        border: '1px solid rgba(255,255,255,0.35)',
                        borderRadius: '20px',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.875rem',
                        textAlign: 'center',
                        transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                        cursor: 'default',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-6px)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                        e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.7)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)';
                      }}
                    >
                      {/* Icon wrapper */}
                      <div style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        background: 'rgba(26,16,0,0.08)',
                        border: '1px solid rgba(26,16,0,0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#1A1000',
                        flexShrink: 0,
                      }}>
                        {icon}
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.77rem',
                        fontWeight: 700,
                        color: '#1A1000',
                        lineHeight: 1.4,
                        letterSpacing: '-0.01em',
                      }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>


    </>
  );
}

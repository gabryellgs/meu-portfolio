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

            <a href="#sobre-detalhes" className="know-more-btn" id="about-know-more">
              Saiba Mais
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M10.5253 5.49475L10.5206 7.49475L15.0782 7.50541L5.47473 17.0896L6.88752 18.5052L16.5173 8.89479L16.5065 13.5088L18.5065 13.5134L18.5253 5.51345L10.5253 5.49475Z"/>
              </svg>
            </a>

            {/* Stats — "Trusted by people worldwide" */}
            <div className="about-sticky-inner" style={{ marginTop: 0 }}>
              <div style={{ textAlign: 'left', marginTop: '3.5rem', marginBottom: '1.5rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem,2.5vw,1.7rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: '#1A1000',
                  opacity: 0.7,
                }}>
                  Confiado por pessoas{' '}
                  <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400 }}>
                    ao redor
                  </em>{' '}
                  do mundo
                </h3>
              </div>

              <div className="about-stats-row">
                <div className="about-stat-item">
                  <div className="about-stat-num"><Counter target={21} suffix="+" /></div>
                  <div className="about-stat-label">Repositórios GitHub</div>
                </div>
                <div className="about-stat-item">
                  <div className="about-stat-num"><Counter target={8} suffix="+" /></div>
                  <div className="about-stat-label">Projetos em Destaque</div>
                </div>
                <div className="about-stat-item">
                  <div className="about-stat-num"><Counter target={15} suffix="+" /></div>
                  <div className="about-stat-label">Tecnologias Dominadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ DETAIL SECTION ══════════ */}
      <section className="about-section" id="sobre-detalhes">
        <div className="container">
          <Reveal>
            <div className="sec-header">
              <span className="sec-tag">gabryell@root:~$ ./whoami.sh</span>
              <h2 className="sec-title">Quem é o <span className="italic">Gabryell?</span></h2>
              <div className="sec-line"/>
            </div>
          </Reveal>

          <div className="about-grid">
            <Reveal delay={100}>
              <div className="about-text">
                <h3>Tecnologia, lógica e paixão por resolver problemas ⚡</h3>
                <p>Sou <strong>Gabryell Gonçalves</strong>, Desenvolvedor Full Stack em formação no <strong>IFRN (Sistemas para Internet)</strong>, baseado no Rio Grande do Norte. Minha motivação é projetar produtos digitais que unam backends de altíssimo desempenho a interfaces fluidas e dinâmicas.</p>
                <p>Minha jornada começou com o rigor do <strong>CS50 (Harvard)</strong>, construindo uma base inabalável em algoritmos. Mergulhei no universo Full Stack com foco em <strong>Node.js, Spring Boot, React, React Native e Django</strong>.</p>
                <p>Mais do que colecionar frameworks, meu foco é dominar os fundamentos — arquitetar soluções lógicas, seguras e que geram impacto real no mundo.</p>
                <div className="about-quote">
                  <p>"Don't ever let somebody tell you you can't do something. You got a dream… <strong>you gotta protect it.</strong> If you want something, go get it. Period."</p>
                  <cite>— Will Smith</cite>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div>
                <div className="stats-grid">
                  {[['21+','Repositórios'],['8+','Projetos'],['15+','Tecnologias'],['2+','Anos Codando']].map(([n,l]) => (
                    <div key={l} className="stat-card">
                      <div className="stat-number">{n}</div>
                      <div className="stat-label">{l}</div>
                    </div>
                  ))}
                </div>
                <div className="timeline-card">
                  <h4>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#A8E524" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}>
                      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
                      <line x1="9" y1="3" x2="9" y2="18"/>
                      <line x1="15" y1="6" x2="15" y2="21"/>
                    </svg>
                    Jornada de aprendizado
                  </h4>
                  {[
                    { s: 'CS50 — Harvard (Fundação Estudar)', t: 'Base sólida em Ciência da Computação, Algoritmos e C.' },
                    { s: 'Sistemas para Internet — IFRN', t: 'Engenharia de software, modelagem de dados e sistemas corporativos.' },
                    { s: 'Projetos Full Stack', t: 'Desenvolvimento end-to-end com React Native, Django e bancos relacionais.' },
                    { s: 'Expansão & Arquitetura', t: 'Foco em Java, Spring Boot, Clean Architecture e AWS.' },
                  ].map((item, i) => (
                    <div key={i} className="tl-item">
                      <div className="tl-dot-wrap"><div className="tl-dot"/></div>
                      <div><span className="tl-strong">{item.s}</span><span className="tl-text">{item.t}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

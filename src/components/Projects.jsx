import { useState } from 'react';
import { Reveal } from './Reveal.jsx';
import { projects } from '../data/index.jsx';
import ProjectModal from './ProjectModal.jsx';

/* ── Card com screenshot de fundo ── */
function HeroCard({ p, onOpen }) {
  return (
    <div
      className="proj-hero-card"
      id={`project-${p.name.toLowerCase().replace(/\s+/g, '-')}`}
      onClick={() => onOpen(p)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onOpen(p)}
    >
      {/* Background screenshot */}
      <div className="phc-bg">
        <img src={p.image} alt={`Preview ${p.name}`} className="phc-img" />
        <div className="phc-overlay" />
      </div>
      <div className="phc-orb" />

      {/* Content */}
      <div className="phc-content">
        <div className="phc-top">
          <div className="phc-live">
            <span className="phc-dot" />
            {p.badge}
          </div>
          <div className="phc-arrow">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </div>
        </div>
        <div className="phc-bottom">
          <h3 className="phc-title">{p.name}</h3>
          <p className="phc-desc">{p.desc}</p>
          <div className="phc-techs">
            {p.techs.map((t, j) => <span key={j} className="phc-tech">{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Card padrão ── */
function RegCard({ p, onOpen }) {
  return (
    <div
      className="proj-card"
      id={`project-${p.name.toLowerCase().replace(/\s+/g, '-')}`}
      onClick={() => onOpen(p)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onOpen(p)}
    >
      <div className="proj-card-deco" />

      <div className="proj-card-top">
        {p.badge && <span className="proj-badge">{p.badge}</span>}
        <div className="proj-arrow">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </div>
      </div>

      <div className="proj-card-icon">
        {typeof p.icon === 'function' ? <p.icon /> : p.icon}
      </div>

      <div className="proj-card-body">
        <h3 className="proj-card-title">{p.name}</h3>
        <p className="proj-card-desc">{p.desc}</p>
      </div>

      <div className="proj-card-techs">
        {p.techs.map((t, j) => <span key={j} className="proj-tech">{t}</span>)}
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const nav  = projects.find(p => p.featured);
  const find = projects.find(p => p.featured2);
  const rest = projects.filter(p => !p.featured && !p.featured2);

  const pairs = [];
  for (let i = 0; i < rest.length; i += 2) {
    pairs.push(rest.slice(i, i + 2));
  }

  return (
    <section className="section" id="projetos">
      <div className="container">
        <Reveal>
          <div className="sec-header">
            <span className="sec-tag">gabryell@root:~$ ls -la /projetos</span>
            <h2 className="sec-title">Projetos em <span className="italic">Destaque</span></h2>
            <p className="sec-desc">Alguns dos produtos que desenvolvi na minha jornada</p>
            <div className="sec-line"/>
          </div>
        </Reveal>

        {/* ── Linha 1: NAV + Find ── */}
        {nav && find && (
          <Reveal delay={0}>
            <div className="proj-row">
              <HeroCard p={nav}  onOpen={setSelected} />
              <HeroCard p={find} onOpen={setSelected} />
            </div>
          </Reveal>
        )}

        {/* ── Demais projetos em pares ── */}
        {pairs.map((pair, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="proj-row">
              <RegCard p={pair[0]} onOpen={setSelected} />
              {pair[1]
                ? <RegCard p={pair[1]} onOpen={setSelected} />
                : <div className="proj-card proj-card--phantom" />
              }
            </div>
          </Reveal>
        ))}
      </div>

      {/* ── Modal ── */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

import { Reveal } from './Reveal.jsx';
import { projects } from '../data/index.jsx';

function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="container">
        <Reveal>
          <div className="sec-header">
            <span className="sec-tag">gabryell@root:~$ ls -la /projetos</span>
            <h2 className="sec-title">Projetos em Destaque</h2>
            <p className="sec-desc">Alguns dos projetos que desenvolvi na minha jornada</p>
            <div className="sec-line"/>
          </div>
        </Reveal>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-card">
                {p.badge && <div className="project-badge">{p.badge}</div>}
                <div className="project-top">
                  <div className="project-emoji-box">
                    {typeof p.icon === 'function' ? <p.icon /> : p.icon}
                  </div>
                  <div className="project-arrow">↗</div>
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="project-techs">{p.techs.map((t,j) => <span key={j} className="tech-tag">{t}</span>)}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;
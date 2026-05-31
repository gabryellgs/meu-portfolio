import { Reveal } from './Reveal.jsx';
import { skills, TechIcons } from '../data/index.jsx';

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <div className="sec-header">
            <span className="sec-tag">gabryell@root:~$ cat skills.json</span>
            <h2 className="sec-title">Tecnologias & Skills</h2>
            <p className="sec-desc">As ferramentas que uso para transformar ideias em realidade</p>
            <div className="sec-line"/>
          </div>
        </Reveal>
        <div className="skills-grid">
          {skills.map((cat, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="skill-card">
                <div className="skill-head">
                  <div className={`skill-icon-box ${cat.colorClass}`}><cat.icon/></div>
                  <h3>{cat.title}</h3>
                </div>
                <p className="skill-sub">{cat.sub}</p>
                <div className="tags">
                  {cat.tags.map((t, j) => {
                    let iconName = t;
                    if (t === 'Spring Boot') iconName = 'SpringBoot';
                    if (t === 'Node.js') iconName = 'NodeJS';
                    if (t === 'Git/GitHub') iconName = 'Git';
                    const Icon = TechIcons[iconName];
                    return (
                      <span key={j} className="tag">
                        {Icon && <span className="tag-ic"><Icon/></span>}
                        {t}
                      </span>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills;
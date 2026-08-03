import { Reveal } from './Reveal.jsx';

const services = [
  {
    title: 'Backend & APIs',
    desc: 'Construção de sistemas robustos e escaláveis. APIs REST de alta performance com autenticação, segurança e arquitetura limpa.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="5" rx="2"/>
        <rect x="2" y="10" width="20" height="5" rx="2"/>
        <rect x="2" y="17" width="20" height="5" rx="2"/>
        <circle cx="6" cy="5.5" r="1" fill="currentColor" stroke="none"/>
        <circle cx="6" cy="12.5" r="1" fill="currentColor" stroke="none"/>
        <circle cx="6" cy="19.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    tags: ['Node.js', 'Express', 'Django', 'Spring Boot', 'REST APIs', 'Java'],
  },
  {
    title: 'Frontend & Mobile',
    desc: 'Interfaces modernas, responsivas e animadas. Aplicações mobile cross-platform com foco em performance e experiência do usuário.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8l3 3-3 3"/>
        <line x1="13" y1="11" x2="17" y2="11"/>
      </svg>
    ),
    tags: ['React', 'React Native', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Banco de Dados & DevOps',
    desc: 'Modelagem e otimização de dados, deploy em cloud e automação de infraestrutura. Do banco ao servidor em produção.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/>
      </svg>
    ),
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'AWS', 'Linux', 'Git'],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <div className="sec-header">
            <span className="sec-tag">gabryell@root:~$ cat skills.json</span>
            <h2 className="sec-title">O que eu <span className="italic">faço</span></h2>
            <p className="sec-desc">As áreas em que atuo e as ferramentas que uso para transformar ideias em realidade</p>
            <div className="sec-line"/>
          </div>
        </Reveal>

        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

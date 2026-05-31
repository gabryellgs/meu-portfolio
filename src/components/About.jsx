import { Reveal } from './Reveal.jsx';

function About() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <Reveal>
          <div className="sec-header">
            <span className="sec-tag">gabryell@root:~$ ./whoami.sh</span>
            <h2 className="sec-title">Quem é o Gabryell?</h2>
            <div className="sec-line"/>
          </div>
        </Reveal>
        <div className="about-grid">
          <Reveal delay={100}>
            <div className="about-text">
              <h3>Tecnologia, lógica e paixão por resolver problemas ⚡</h3>
              <p>Sou <strong>Gabryell Gonçalves</strong>, um Desenvolvedor Full Stack em formação no <strong>IFRN (Sistemas para Internet)</strong>, baseado no Rio Grande do Norte. Minha principal motivação é projetar produtos digitais que unam backends de altíssimo desempenho a interfaces bem pensadas e dinâmicas.</p>
              <p>Minha jornada na computação começou com o rigor do <strong>CS50 (Harvard)</strong>, construindo uma base inabalável em algoritmos. A partir daí, mergulhei no universo Full Stack, projetando sistemas escaláveis e focando em ecossistemas como <strong>Node.js (Express), Spring Boot, React, React Native e Django</strong>.</p>
              <p>Mais do que colecionar linguagens e frameworks, meu foco é dominar os fundamentos e a engenharia por trás deles. Para mim, a programação vai muito além da sintaxe é a capacidade de arquitetar soluções lógicas e seguras que geram impacto e resolvem problemas do mundo real.</p>
              <div className="about-quote">
                <p>"Don't ever let somebody tell you you can't do something. You got a dream… <strong>you gotta protect it.</strong> If you want something, go get it. Period."</p>
                <cite>— Will Smith</cite>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <div className="stats-grid">
                {[['21+','Repositórios'],['8+','Projetos Destaque'],['15+','Tecnologias'],['2+','Anos Codando']].map(([n,l]) => (
                  <div key={l} className="stat-card">
                    <div className="stat-number">{n}</div>
                    <div className="stat-label">{l}</div>
                  </div>
                ))}
              </div>
              <div className="timeline-card">
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
                    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                    <line x1="9" y1="3" x2="9" y2="18" />
                    <line x1="15" y1="6" x2="15" y2="21" />
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
  )
}

export default About;
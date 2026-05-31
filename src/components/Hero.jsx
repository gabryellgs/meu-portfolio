import avatar from '../assets/avatar.png';

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-inner">
        <div className="hero-content-left">
          <p className="hero-eyebrow">Desenvolvedor Full Stack</p>
          <h1>Olá, sou o<br/><span className="gradient-name">Gabryell Gonçalves</span></h1>
          <p className="hero-sub">Código de alta performance e <span>experiências memoráveis</span>.</p>
          <p className="hero-desc">
            Especialista em construir produtos digitais de ponta a ponta. Projeto desde backends estruturados para escalar, até interfaces fluidas que engajam o usuário. Transformando ideias complexas em soluções tecnológicas brilhantes.
          </p>
          <div className="hero-cta">
            <a href="#projetos" className="btn btn-primary">
              Ver Projetos
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="https://github.com/gabryellgs" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}><path d="M12 2C6.47 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-content-right">
          <div className="hero-avatar">
            <div className="avatar-frame">
              <div className="avatar-glow-bg"/>
              <div className="avatar-ring-outer"/>
              <img src={avatar} alt="Gabryell Gonçalves"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
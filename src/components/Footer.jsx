function Footer() {
  return (
    <footer className="footer-premium">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#inicio" className="footer-logo">
              G<span>G</span>
            </a>
            <p className="footer-tagline">
              Desenvolvedor Full Stack especializado em criar ecossistemas digitais robustos, do hardware (IoT) ao mobile.
            </p>
          </div>
          
          <div className="footer-nav">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre Mim</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          
          <div className="footer-info">
            <h4>Localização & Foco</h4>
            <p style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '2px' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Natal, Rio Grande do Norte - Brasil
            </p>
            <p style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '2px' }}>
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              Disponível para oportunidades profissionais e parcerias.
            </p>
          </div>
        </div>
        
        <div className="footer-divider" />
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gabryell Gonçalves. Todos os direitos reservados.</p>
          <p className="footer-built-with">
            Construído com <span>React</span> & <span>Vite</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

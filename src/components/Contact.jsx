import { Reveal } from './Reveal.jsx';
import { contacts } from '../data/index.jsx';

function Contact() {
  return (
    <section className="section" id="contato">
      <div className="container">
        <Reveal>
          <div className="sec-header">
            <span className="sec-tag">gabryell@root:~$ ping -c 4 contato</span>
            <h2 className="sec-title">Vamos conversar?</h2>
            <div className="sec-line"/>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="contact-wrap">
            <p>Estou sempre aberto a novas oportunidades, colaborações e ideias. Se quiser trocar uma ideia sobre projetos, tecnologia ou trabalho é só chamar!</p>
            <div className="contact-links">
              {contacts.map((c, i) => (
                <a key={i} href={c.url} target={c.url.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="contact-link">
                  <c.icon/>
                  <div>
                    <div className="contact-link-name">{c.label}</div>
                    <div className="contact-link-handle">{c.handle}</div>
                  </div>
                </a>
              ))}
            </div>
            <div style={{marginTop:'1rem'}}>
              <a href="mailto:gabryelldasilva7@gmail.com" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Entrar em contato
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact;
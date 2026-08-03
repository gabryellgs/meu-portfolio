import { Reveal } from './Reveal.jsx';
import { contacts } from '../data/index.jsx';

export default function Contact() {
  return (
    <section className="section" id="contato">
      <div className="container">
        <Reveal>
          <div className="contact-wrap">

            {/* Big impact title — anish7.me style */}
            <p className="sec-tag">gabryell@root:~$ ping -c 4 contato</p>
            <h2 className="contact-big-title">
              Vamos <span className="italic-serif">criar</span>
              <br/>
              algo incrível?
            </h2>

            <p className="contact-sub">
              Estou sempre aberto a novas oportunidades, colaborações e ideias.
              Se quiser trocar uma ideia sobre projetos, tecnologia ou trabalho — é só chamar!
            </p>

            <div className="contact-links">
              {contacts.map((c, i) => (
                <a
                  key={i}
                  id={`contact-${c.label.toLowerCase()}`}
                  href={c.url}
                  target={c.url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <c.icon/>
                  <div>
                    <div className="contact-link-name">{c.label}</div>
                    <div className="contact-link-handle">{c.handle}</div>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="mailto:gabryelldasilva7@gmail.com"
              className="btn btn-primary"
              id="contact-cta"
              style={{ fontSize: '1rem', padding: '0.9rem 2.2rem' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Entrar em contato
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

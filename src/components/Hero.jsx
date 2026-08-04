import { useState, useEffect } from 'react';
import avatar from '../assets/foto-perfil.png';
const greetings = ["Olá mundo!", "Hello world!", "Hola mundo!"];

function AnimatedHello() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % greetings.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const text = greetings[index];
  const words = text.split(' ');

  return (
    <div className="hero-hello-wrap" key={text}>
      {words.map((word, wIdx) => (
        <span key={`${text}-${wIdx}`} style={{ display: 'inline-block' }}>
          {word.split('').map((ch, i) => (
            <span
              key={i}
              className="letter"
              style={{ animationDelay: `${(wIdx * 5 + i) * 60}ms` }}
            >
              {ch}
            </span>
          ))}
          {wIdx < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </div>
  );
}

function DescWords({ text }) {
  return (
    <>
      {text.split(' ').map((word, i, arr) => (
        <span key={i}>
          <span
            className="word-span"
            style={{ animationDelay: `${700 + i * 40}ms` }}
          >
            {word}
          </span>
          {i < arr.length - 1 && ' '}
        </span>
      ))}
    </>
  );
}

function TechMarquee() {
  const baseTechs = [
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', invertDark: false },
    { name: 'Django', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', invertDark: true },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Spring Boot', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', invertDark: true },
    { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' }
  ];
  const techs = [...baseTechs, ...baseTechs, ...baseTechs];

  return (
    <div className="tech-marquee-container">
      <div className="tech-marquee">
        <div className="tech-marquee-content">
          {techs.map((t, i) => (
            <div key={i} className="tech-icon-wrap" title={t.name}>
              <img src={t.src} alt={t.name} className={t.invertDark ? 'invert-logo' : ''} />
            </div>
          ))}
        </div>
        <div className="tech-marquee-content" aria-hidden="true">
          {techs.map((t, i) => (
            <div key={i} className="tech-icon-wrap" title={t.name}>
              <img src={t.src} alt={t.name} className={t.invertDark ? 'invert-logo' : ''} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="inicio">

      {/* Geometric corner decoration — top left */}
      <div className="hero-geo-deco" aria-hidden="true">
        <svg width="156" height="63" viewBox="0 0 156 63" fill="none">
          <path
            d="M31 .5h32M0 .5h32m30 31h32m-1 0h32m-1 31h32M62.5 32V0m62 63V31"
            stroke="url(#geo-grad)" strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="geo-grad" x1="40%" x2="50%" y1="160%" y2="180%">
              <stop stopColor="#A8E524" stopOpacity="0"/>
              <stop stopColor="#A8E524"/>
              <stop offset="0.325" stopColor="#8CE214"/>
              <stop offset="1" stopColor="#DCE214" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="hero-inner">
        {/* Left: Avatar */}
        <div className="hero-image-side">
          <div className="polygon-container">
            <div className="polygon-bg"></div>
            
            {/* Photo */}
            <div className="polygon-img">
              <img src={avatar} alt="Gabryell Gonçalves" />
            </div>

            {/* Glitch layers */}
            <div className="polygon-glitch">
              <img src={avatar} alt="" aria-hidden="true" />
            </div>
            <div className="polygon-glitch">
              <img src={avatar} alt="" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* ── RIGHT: Text ── */}
        <div className="hero-text-side">

          {/* "Hello, mundo!" letter by letter */}
          <AnimatedHello />

          {/* "Im Gabryell" */}
          <div className="hero-name-line">
            <span>Eu sou</span>
            <span className="hero-name-accent">Gabryell</span>
          </div>

          {/* Description */}
          <p className="hero-desc">
            <DescWords text="Desenvolvedor Full Stack apaixonado por arquiteturas robustas e interfaces dinâmicas. A combinação da minha paixão por lógica, código e design me permite construir produtos web completos e de alta performance." />
          </p>

          {/* CTA buttons */}
          <div className="hero-cta">
            <a href="#projetos" className="btn btn-primary" id="hero-btn-projects">
              Meus Projetos
            </a>
            <a href="#sobre" className="btn btn-outline" id="hero-btn-about">
              Sobre Mim
            </a>
          </div>

          {/* Social icons */}
          <div className="hero-socials">
            <a href="https://github.com/gabryellgs" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub" id="social-github">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/gabryellgs" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn" id="social-linkedin">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.77 13.02H3.56V9h3.55v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
              </svg>
            </a>
            <a href="https://instagram.com/gabryel.gs_" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram" id="social-instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="mailto:gabryelldasilva7@gmail.com" className="social-btn" aria-label="Email" id="social-email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3"/>
                <path d="M2 8l10 6 10-6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <TechMarquee />
    </section>
  );
}

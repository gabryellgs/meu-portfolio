import { useState, useEffect } from 'react';

const links = [
  { label: 'Início',   href: '#inicio' },
  { label: 'Sobre',    href: '#sobre' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato',  href: '#contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open) setTimeout(() => setMounted(true), 150);
    else setMounted(false);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* ── Logo mark — top left ── */}
      <a href="#inicio" className="nav-logo-link" aria-label="Início" onClick={close}>
        <svg width="34" height="34" viewBox="0 0 200 200" fill="none">
          <path
            d="M 155 40 L 45 40 L 45 165 L 155 165 L 155 105 L 100 105"
            stroke="#89CFF0" strokeWidth="14"
            strokeLinecap="square" strokeLinejoin="miter"
            style={{ filter: 'drop-shadow(0 0 6px rgba(137,207,240,0.7))' }}
          />
        </svg>
      </a>

      {/* ── Menu pill button — top right ── */}
      <div
        className={`menu-pill${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        role="button"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
      >
        <div className="menu-pill-track">
          <div className="menu-pill-face front">
            <div className="perspective-text">
              <p>Menu</p>
              <p aria-hidden="true">Menu</p>
            </div>
          </div>
          <div className="menu-pill-face back">
            <div className="perspective-text">
              <p>Close</p>
              <p aria-hidden="true">Close</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Dropdown Square (anish7 style) ── */}
      <div className={`nav-dropdown${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="nav-dropdown-inner">
          <nav className="nav-dropdown-links">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className={`nav-dropdown-item${mounted ? ' show' : ''}`}
                onClick={close}
                style={{ transitionDelay: mounted ? `${i * 50}ms` : '0ms' }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className={`nav-dropdown-footer${mounted ? ' show' : ''}`}>
            <div className="nav-dropdown-socials">
              <a href="https://github.com/gabryellgs" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/gabryellgs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://instagram.com/gabryel.gs_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

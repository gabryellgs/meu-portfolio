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


        </div>
      </div>
    </>
  );
}

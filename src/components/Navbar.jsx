import { useState, useEffect } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const links = ['Início','Sobre','Skills','Projetos','Contato']
  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-content">
        <span className="navbar-logo">{'<GG />'}</span>
        <div className={`navbar-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </div>
        <button className={`menu-toggle${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
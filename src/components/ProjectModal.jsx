import { useEffect, useRef } from 'react';

export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlay = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!project) return null;

  return (
    <div className="pm-overlay" ref={overlayRef} onClick={handleOverlay}>

      {/* Panel */}
      <div className="pm-panel" role="dialog" aria-modal="true">

        {/* ── Corner accent brackets ── */}
        <div className="pm-corner pm-corner--tl" />
        <div className="pm-corner pm-corner--tr" />
        <div className="pm-corner pm-corner--bl" />
        <div className="pm-corner pm-corner--br" />

        {/* ── Top glow line ── */}
        <div className="pm-top-glow" />

        {/* ── Close ── */}
        <button className="pm-close" onClick={onClose} aria-label="Fechar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        {/* ── Screenshot hero ── */}
        <div className="pm-hero">
          {project.image ? (
            <>
              <img src={project.image} alt={project.name} className="pm-hero-img" />
              <div className="pm-hero-fade" />
            </>
          ) : (
            <div className="pm-hero-placeholder">
              <div className="pm-placeholder-icon">
                {typeof project.icon === 'function' ? <project.icon /> : project.icon}
              </div>
              <div className="pm-hero-fade" />
            </div>
          )}

          {/* Badge + status */}
          <div className="pm-hero-meta">
            {project.badge && <span className="pm-badge">{project.badge}</span>}
            {project.url && project.url !== '#' && !project.url.includes('github') && (
              <span className="pm-status">
                <span className="pm-status-dot" />
                Online
              </span>
            )}
          </div>
        </div>

        {/* ── Body ── */}
        <div className="pm-body">

          {/* Title row */}
          <div className="pm-title-row">
            <div>
              <p className="pm-eyebrow">Projeto</p>
              <h2 className="pm-title">{project.name}</h2>
            </div>
            {project.image && (
              <div className="pm-thumb">
                {typeof project.icon === 'function' ? <project.icon /> : project.icon}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="pm-divider" />

          {/* Description */}
          <p className="pm-desc">{project.desc}</p>

          {/* Tech stack */}
          <div className="pm-section">
            <span className="pm-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              Stack
            </span>
            <div className="pm-techs">
              {project.techs.map((t, i) => (
                <span key={i} className="pm-tech">{t}</span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="pm-divider" />

          {/* Actions */}
          <div className="pm-actions">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="pm-btn-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {project.image && !project.url.includes('github') ? 'Abrir Site' : 'Ver no GitHub'}
              </a>
            )}
            {project.github && project.github !== project.url && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="pm-btn-ghost">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z"/>
                </svg>
                GitHub
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

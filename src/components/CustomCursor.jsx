import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const posRef  = useRef({ x: -200, y: -200 });
  const rPosRef = useRef({ x: -200, y: -200 });
  const rafRef  = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    };

    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      rPosRef.current.x = lerp(rPosRef.current.x, posRef.current.x, 0.11);
      rPosRef.current.y = lerp(rPosRef.current.y, posRef.current.y, 0.11);
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${rPosRef.current.x}px, ${rPosRef.current.y}px) translate(-50%,-50%)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    const onEnter = () => {
      ringRef.current?.classList.add('hovered');
    };
    const onLeave = () => {
      ringRef.current?.classList.remove('hovered');
    };

    /* ── Gold section detection ──
     * When cursor enters the gold (about sticky) section,
     * switch dot + ring to dark variant so they stay visible
     */
    const onGoldEnter = () => {
      dotRef.current?.classList.add('on-gold');
      ringRef.current?.classList.add('on-gold');
    };
    const onGoldLeave = () => {
      dotRef.current?.classList.remove('on-gold');
      ringRef.current?.classList.remove('on-gold');
    };

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(tick);

    const attach = () => {
      /* Interactive hover (scale ring) */
      const interactiveSelector = 'a, button, [role="button"], .project-card, .service-card, .contact-link, .social-btn, .polygon-container, .menu-pill, .know-more-btn, .stat-card, .tl-item';
      document.querySelectorAll(interactiveSelector).forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });

      /* Gold background sections */
      document.querySelectorAll('.about-sticky').forEach(el => {
        el.addEventListener('mouseenter', onGoldEnter);
        el.addEventListener('mouseleave', onGoldLeave);
      });
    };

    attach();

    /* Re-attach when DOM changes */
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      mo.disconnect();
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </div>
  );
}

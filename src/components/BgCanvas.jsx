import { useEffect, useRef } from 'react';

export default function BgCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, animId;
    let drops = [];
    let splashes = [];
    let blobs = [];

    function resize() {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
      init();
    }

    function makeDrop(initial = false) {
      const z = Math.random(); 
      const vy = 15 + z * 15; // 15 to 30 px/frame
      const vx = 0.5 + z * 1.5; // slight wind
      
      return {
        x: Math.random() * w,
        y: initial ? Math.random() * h : -50 - Math.random() * 200, // If initial, spread around. Else start above screen
        z: z,
        length: vy * (0.6 + Math.random() * 0.4),
        vy: vy,
        vx: vx,
        opacity: 0.2 + z * 0.5,
        thickness: 0.8 + z * 1.2
      };
    }

    function spawnSplash(x, opacity) {
      splashes.push({
        x: x,
        y: h,
        r: 1,
        maxR: 10 + Math.random() * 15,
        scaleY: 0.3, // squished circle to look like perspective ripple
        opacity: opacity * 0.8,
        decay: 0.02 + Math.random() * 0.015
      });
    }

    function init() {
      blobs = [
        { x: w * 0.15, y: h * 0.25, r: Math.min(w,h)*0.55, vx:  0.08, vy:  0.05, col: 'rgba(137,207,240,0.03)' },
        { x: w * 0.80, y: h * 0.15, r: Math.min(w,h)*0.50, vx: -0.07, vy:  0.08, col: 'rgba(92,156,230,0.025)' },
        { x: w * 0.50, y: h * 0.75, r: Math.min(w,h)*0.60, vx:  0.05, vy: -0.06, col: 'rgba(178,235,242,0.025)' },
      ];

      // Very few drops for a sparse, elegant, dynamic look
      // Max ~40 drops on a large screen
      const count = Math.round(Math.min(w, 1600) / 40); 
      drops = Array.from({ length: count }, () => makeDrop(true));
      splashes = [];
    }

    function draw() {
      // Slight motion trail
      ctx.fillStyle = 'rgba(8, 6, 10, 0.4)'; // Matches --bg color to clear with trail
      ctx.fillRect(0, 0, w, h);

      /* ambient blobs */
      ctx.globalCompositeOperation = 'lighter';
      blobs.forEach(b => {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x - b.r < -80 || b.x + b.r > w + 80) b.vx *= -1;
        if (b.y - b.r < -80 || b.y + b.r > h + 80) b.vy *= -1;
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, b.col);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalCompositeOperation = 'source-over';

      /* Splashes */
      for (let i = splashes.length - 1; i >= 0; i--) {
        const s = splashes[i];
        s.r += 0.8;
        s.opacity -= s.decay;

        if (s.opacity <= 0) {
          splashes.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.scale(1, s.scaleY);
        ctx.beginPath();
        ctx.arc(0, 0, s.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(137,207,240,${s.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      /* Raindrops */
      ctx.lineCap = 'round';
      for (let i = 0; i < drops.length; i++) {
        let d = drops[i];

        d.x += d.vx;
        d.y += d.vy;

        // Calculate tail
        const frames = d.length / d.vy;
        const tailX = d.x - d.vx * frames;
        const tailY = d.y - d.vy * frames;

        // Premium glow for foreground drops
        if (d.z > 0.7) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = `rgba(137,207,240,${d.opacity})`;
        } else {
          ctx.shadowBlur = 0;
        }

        const grad = ctx.createLinearGradient(d.x, d.y, tailX, tailY);
        grad.addColorStop(0, `rgba(200,240,255,${d.opacity})`);
        grad.addColorStop(0.3, `rgba(137,207,240,${d.opacity * 0.7})`);
        grad.addColorStop(1, `rgba(137,207,240,0)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = d.thickness;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Check if hit bottom
        if (d.y > h) {
          // Spawn a splash where it hit
          spawnSplash(d.x, d.opacity);
          // Replace drop with a new one at the top
          drops[i] = makeDrop(false);
        }
      }
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    />
  );
}

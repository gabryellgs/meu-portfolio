import { useEffect, useRef } from 'react';

function BgCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h, animId
    let particles = []
    let blobs = []
    let columns = []
    const fontSize = 14

    function resize() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      init()
    }

    function init() {
      // Hacker soft glowing mesh blobs (Neon Green, Emerald, Dark Teal)
      blobs = [
        { x: w * 0.2, y: h * 0.3, r: Math.min(w, h) * 0.5, vx: 0.12, vy: 0.08, color: 'rgba(0, 255, 102, 0.05)' },
        { x: w * 0.8, y: h * 0.2, r: Math.min(w, h) * 0.45, vx: -0.1, vy: 0.12, color: 'rgba(16, 185, 129, 0.06)' },
        { x: w * 0.5, y: h * 0.8, r: Math.min(w, h) * 0.55, vx: 0.07, vy: -0.09, color: 'rgba(20, 184, 166, 0.04)' }
      ]

      // Elegant drifting green micro-particles (Stars)
      particles = []
      const count = Math.min(w / 12, 120)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 2.0 + 0.5,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          alpha: Math.random() * 0.5 + 0.2
        })
      }

      // Matrix code columns (binary crawl)
      const colCount = Math.floor(w / fontSize)
      columns = []
      for (let x = 0; x < colCount; x++) {
        columns[x] = Math.random() * (h / fontSize) * -1
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)

      // 1. Draw glowing hacker mesh blobs
      blobs.forEach(b => {
        b.x += b.vx
        b.y += b.vy

        // Smooth boundaries bounce
        if (b.x - b.r < -100 || b.x + b.r > w + 100) b.vx *= -1
        if (b.y - b.r < -100 || b.y + b.r > h + 100) b.vy *= -1

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
        grad.addColorStop(0, b.color)
        grad.addColorStop(1, 'transparent')

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.fill()
      })

      // 2. Draw matrix binary code fall (Very subtle, dark green, cinematic stream)
      ctx.fillStyle = 'rgba(0, 255, 102, 0.022)'
      ctx.font = `600 ${fontSize}px monospace`
      columns.forEach((y, x) => {
        const char = Math.random() > 0.5 ? '0' : '1'
        ctx.fillText(char, x * fontSize, y * fontSize)

        if (y * fontSize > h && Math.random() > 0.985) {
          columns[x] = 0
        } else {
          columns[x] += 0.35 // slow digital mist crawl
        }
      })

      // 3. Draw drifting green particles
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        ctx.fillStyle = `rgba(0, 255, 102, ${p.alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    resize()
    animId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])
  return <canvas ref={canvasRef} id="bg-canvas" style={{ opacity: 0.95 }} />
}

export default BgCanvas;
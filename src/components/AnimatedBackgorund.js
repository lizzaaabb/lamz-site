'use client'
import React, { useEffect, useRef } from 'react'

function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let W, H, animId
    let mx = 0, my = 0, tx = 0, ty = 0

    function resize() {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      tx = e.clientX / window.innerWidth  - 0.5
      ty = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('mousemove', onMouseMove)

    const C = {
      blue:   { r: 124, g: 185, b: 232 },
      aqua:   { r: 153, g: 255, b: 255 },
      purple: { r: 167, g: 139, b: 250 },
      silver: { r: 189, g: 195, b: 199 },
      light:  { r: 225, g: 235, b: 238 },
    }
    const rgba = (c, a) => `rgba(${c.r},${c.g},${c.b},${a})`

    const ORBS = [
      { bx: 0.22, by: 0.28, r: 0.38, col: C.blue,   speed: 0.00012, phase: 0,             amp: 0.07 },
      { bx: 0.78, by: 0.72, r: 0.32, col: C.purple,  speed: 0.00017, phase: Math.PI,       amp: 0.06 },
      { bx: 0.50, by: 0.50, r: 0.28, col: C.silver,  speed: 0.00009, phase: Math.PI / 2,   amp: 0.04 },
      { bx: 0.15, by: 0.75, r: 0.22, col: C.aqua,    speed: 0.00021, phase: Math.PI * 1.5, amp: 0.05 },
      { bx: 0.85, by: 0.20, r: 0.25, col: C.purple,  speed: 0.00014, phase: Math.PI * 0.7, amp: 0.06 },
    ]

    const RAY_COUNT = 12
    const RAYS = Array.from({ length: RAY_COUNT }, (_, i) => ({
      angle:   (i / RAY_COUNT) * Math.PI * 2,
      speed:   (Math.random() - 0.5) * 0.0003,
      length:  0.3 + Math.random() * 0.25,
      col:     [C.blue, C.purple, C.silver][i % 3],
      opacity: 0.04 + Math.random() * 0.05,
    }))

    const PARTICLES = Array.from({ length: 90 }, () => ({
      x:       Math.random(),
      y:       Math.random(),
      r:       0.5 + Math.random() * 1.5,
      vx:      (Math.random() - 0.5) * 0.00015,
      vy:      -(0.00008 + Math.random() * 0.00015),
      col:     [C.aqua, C.blue, C.purple, C.light][Math.floor(Math.random() * 4)],
      opacity: 0.15 + Math.random() * 0.55,
      phase:   Math.random() * Math.PI * 2,
    }))

    const BOKEH = Array.from({ length: 7 }, () => ({
      x:     Math.random(),
      y:     Math.random(),
      r:     40 + Math.random() * 120,
      col:   [C.blue, C.purple, C.silver][Math.floor(Math.random() * 3)],
      phase: Math.random() * Math.PI * 2,
      speed: 0.0004 + Math.random() * 0.0003,
    }))

    const GRID_SIZE = 55

    function drawGrid(t) {
      const shift = (t * 0.006) % GRID_SIZE
      ctx.save()
      const mask = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.min(W, H) * 0.6)
      mask.addColorStop(0,   rgba(C.silver, 0.055))
      mask.addColorStop(0.5, rgba(C.silver, 0.028))
      mask.addColorStop(1,   rgba(C.silver, 0))
      ctx.strokeStyle = mask
      ctx.lineWidth = 0.5
      for (let x = -GRID_SIZE + shift; x < W + GRID_SIZE; x += GRID_SIZE) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = -GRID_SIZE + shift; y < H + GRID_SIZE; y += GRID_SIZE) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }
      ctx.restore()
    }

    function drawOrbs(t) {
      for (const o of ORBS) {
        const px = (o.bx + Math.sin(t * o.speed + o.phase) * o.amp + mx * 0.04) * W
        const py = (o.by + Math.cos(t * o.speed + o.phase) * o.amp + my * 0.04) * H
        const radius = o.r * Math.min(W, H)
        const g = ctx.createRadialGradient(px, py, 0, px, py, radius)
        g.addColorStop(0,   rgba(o.col, 0.14))
        g.addColorStop(0.4, rgba(o.col, 0.06))
        g.addColorStop(1,   rgba(o.col, 0))
        ctx.save()
        ctx.globalCompositeOperation = 'screen'
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(px, py, radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    function drawRays(t) {
      const cx = W / 2 + mx * 30
      const cy = H / 2 + my * 30
      for (const ray of RAYS) {
        ray.angle += ray.speed
        const len = ray.length * Math.min(W, H)
        const ex  = cx + Math.cos(ray.angle) * len
        const ey  = cy + Math.sin(ray.angle) * len
        const g = ctx.createLinearGradient(cx, cy, ex, ey)
        g.addColorStop(0, rgba(ray.col, ray.opacity * 1.4))
        g.addColorStop(1, rgba(ray.col, 0))
        ctx.save()
        ctx.globalCompositeOperation = 'screen'
        ctx.strokeStyle = g
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(ex, ey)
        ctx.stroke()
        ctx.restore()
      }
    }

    function drawBokeh(t) {
      for (const b of BOKEH) {
        const px = (b.x + Math.sin(t * b.speed + b.phase) * 0.06) * W
        const py = (b.y + Math.cos(t * b.speed + b.phase) * 0.06) * H
        const distC = Math.hypot(px - W / 2, py - H / 2) / (Math.min(W, H) * 0.65)
        const fade  = Math.max(0, 1 - distC)
        ctx.save()
        ctx.globalCompositeOperation = 'screen'
        ctx.globalAlpha = 0.045 * fade
        ctx.strokeStyle = rgba(b.col, 1)
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(px, py, b.r, 0, Math.PI * 2)
        ctx.stroke()
        ctx.restore()
      }
    }

    function drawFlare(t) {
      const cx = W / 2 + mx * 18
      const cy = H / 2 + my * 18
      const pulse = 0.8 + 0.2 * Math.sin(t * 0.008)
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(W, H) * 0.22 * pulse)
      g.addColorStop(0,   rgba(C.purple, 0.12))
      g.addColorStop(0.3, rgba(C.blue,   0.06))
      g.addColorStop(1,   rgba(C.blue,   0))
      ctx.save()
      ctx.globalCompositeOperation = 'screen'
      ctx.fillStyle = g
      ctx.fillRect(0, 0, W, H)
      ctx.restore()
    }

    function drawParticles(t) {
      for (const p of PARTICLES) {
        p.x += p.vx + mx * 0.000012
        p.y += p.vy
        if (p.y < -0.02) p.y = 1.02
        if (p.x < -0.02) p.x = 1.02
        if (p.x >  1.02) p.x = -0.02
        const px = p.x * W
        const py = p.y * H
        const distC   = Math.hypot(px - W / 2, py - H / 2) / (Math.min(W, H) * 0.5)
        const fade    = Math.max(0, 1 - distC * 0.9)
        const twinkle = 0.6 + 0.4 * Math.sin(t * 0.02 + p.phase)
        ctx.save()
        ctx.globalAlpha = p.opacity * fade * twinkle
        ctx.fillStyle = rgba(p.col, 1)
        ctx.beginPath()
        ctx.arc(px, py, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    let tick = 0
    function draw() {
      mx += (tx - mx) * 0.05
      my += (ty - my) * 0.05
      ctx.clearRect(0, 0, W, H)
      drawGrid(tick)
      drawOrbs(tick)
      drawRays(tick)
      drawBokeh(tick)
      drawFlare(tick)
      drawParticles(tick)
      tick++
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  )
}

export default AnimatedBackground
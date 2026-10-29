const canvas = document.getElementById('stars')
const ctx = canvas.getContext('2d')

function resize() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

resize()
window.addEventListener('resize', resize)

const stars = Array.from({ length: 200 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5 + 0.3,
  speed: Math.random() * 0.3 + 0.05,
  alpha: Math.random() * 0.6 + 0.2,
  drift: (Math.random() - 0.5) * 0.15
}))

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (const s of stars) {
    s.y -= s.speed
    s.x += s.drift
    s.alpha += (Math.random() - 0.5) * 0.02
    s.alpha = Math.max(0.1, Math.min(0.8, s.alpha))
    if (s.y < -5) { s.y = canvas.height + 5; s.x = Math.random() * canvas.width }
    if (s.x < -5) s.x = canvas.width + 5
    if (s.x > canvas.width + 5) s.x = -5
    ctx.beginPath()
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(200, 200, 255, ${s.alpha})`
    ctx.fill()
  }
  requestAnimationFrame(draw)
}

draw()

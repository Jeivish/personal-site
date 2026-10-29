var c = document.getElementById('stars')
var ctx = c.getContext('2d')

function resize() {
  c.width = window.innerWidth
  c.height = window.innerHeight
}
resize()
window.addEventListener('resize', resize)

// make a bunch of stars with random properties
var stars = []
for (var i = 0; i < 180; i++) {
  stars.push({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    r: Math.random() * 1.4 + 0.3,
    speed: Math.random() * 0.3 + 0.05,
    a: Math.random() * 0.5 + 0.2,
    dx: (Math.random() - 0.5) * 0.12
  })
}

function loop() {
  ctx.clearRect(0, 0, c.width, c.height)

  for (var i = 0; i < stars.length; i++) {
    var s = stars[i]
    s.y -= s.speed
    s.x += s.dx

    // twinkle
    s.a += (Math.random() - 0.5) * 0.02
    if (s.a < 0.1) s.a = 0.1
    if (s.a > 0.8) s.a = 0.8

    // wrap around
    if (s.y < -5) {
      s.y = c.height + 5
      s.x = Math.random() * c.width
    }
    if (s.x < -5) s.x = c.width + 5
    if (s.x > c.width + 5) s.x = -5

    ctx.beginPath()
    ctx.arc(s.x, s.y, s.r, 0, 6.28)
    ctx.fillStyle = 'rgba(200,200,255,' + s.a + ')'
    ctx.fill()
  }

  requestAnimationFrame(loop)
}

loop()

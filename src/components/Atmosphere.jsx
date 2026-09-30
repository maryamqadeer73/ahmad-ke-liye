/* Fixed background layers: vignette, paper grain and a few slow dust particles. */
const PARTICLES = Array.from({ length: 10 }, (_, i) => ({
  x: (i * 37 + 7) % 100,
  d: 22 + ((i * 7) % 14),
  delay: -(i * 3.3),
  dx: (i % 2 ? 1 : -1) * (12 + i * 3),
}))

export default function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="vignette" />
      <div className="grain" />
      <div className="particles">
        {PARTICLES.map((p, i) => (
          <span key={i} style={{ '--x': `${p.x}%`, '--d': `${p.d}s`, '--delay': `${p.delay}s`, '--dx': `${p.dx}px` }} />
        ))}
      </div>
    </div>
  )
}

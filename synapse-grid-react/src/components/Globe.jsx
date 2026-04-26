import { useEffect, useRef, useState } from 'react'

const outerFlags = [
  { angle: 0, code: 'gb' }, { angle: 72, code: 'ca' }, { angle: 144, code: 'ae' },
  { angle: 216, code: 'au' }, { angle: 288, code: 'de' },
]
const innerFlags = [
  { angle: 0, code: 'us' }, { angle: 90, code: 'sg' },
  { angle: 180, code: 'nz' }, { angle: 270, code: 'nl' },
]
const destinations = ['World', 'London', 'Toronto', 'Dubai', 'New York', 'Singapore', 'Sydney', 'Frankfurt']

function getRotationDeg(el) {
  const tr = window.getComputedStyle(el).transform
  if (!tr || tr === 'none') return 0
  const m = tr.match(/matrix\(([^)]+)\)/)
  if (!m) return 0
  const [a, b] = m[1].split(',').map(parseFloat)
  return Math.round(Math.atan2(b, a) * (180 / Math.PI))
}

export default function Globe() {
  const [destIdx, setDestIdx] = useState(0)
  const [fading, setFading] = useState(false)
  const ring1Ref = useRef(null)
  const ring2Ref = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setDestIdx(i => (i + 1) % destinations.length)
        setFading(false)
      }, 350)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    function keepUpright() {
      if (ring1Ref.current) {
        const deg = getRotationDeg(ring1Ref.current)
        ring1Ref.current.querySelectorAll('.flag-node').forEach(f => {
          f.style.transform = `rotate(${-deg}deg)`
        })
      }
      if (ring2Ref.current) {
        const deg = getRotationDeg(ring2Ref.current)
        ring2Ref.current.querySelectorAll('.flag-node').forEach(f => {
          f.style.transform = `rotate(${-deg}deg)`
        })
      }
      rafRef.current = requestAnimationFrame(keepUpright)
    }
    rafRef.current = requestAnimationFrame(keepUpright)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div className="hero-globe">
      <div className="orbit-ring orbit-ring-1" ref={ring1Ref}>
        {outerFlags.map(f => (
          <div key={f.code} className="orbit-node" style={{ '--angle': `${f.angle}deg` }}>
            <span className="flag-node"><span className={`fi fi-${f.code}`}></span></span>
          </div>
        ))}
      </div>
      <div className="orbit-ring orbit-ring-2" ref={ring2Ref}>
        {innerFlags.map(f => (
          <div key={f.code} className="orbit-node" style={{ '--angle': `${f.angle}deg` }}>
            <span className="flag-node"><span className={`fi fi-${f.code}`}></span></span>
          </div>
        ))}
      </div>
      <div className="globe-inner">
        <div className="globe-text">
          <span className="globe-from">India</span>
          <span className="globe-arrow">→</span>
          <span className="globe-to-wrap">
            <span className={`globe-to${fading ? ' fade-out' : ''}`}>{destinations[destIdx]}</span>
          </span>
        </div>
      </div>
      <div className="globe-pulse"></div>
      <div className="globe-pulse globe-pulse-2"></div>
    </div>
  )
}

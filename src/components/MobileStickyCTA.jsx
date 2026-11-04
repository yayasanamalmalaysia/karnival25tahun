import { useEffect, useState } from 'react'
import { Run } from './Icons'

export default function MobileStickyCTA({ onSelect }) {
  const [isProgramVisible, setIsProgramVisible] = useState(false)

  useEffect(() => {
    const programSection = document.querySelector('#tentatif')
    if (!programSection) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setIsProgramVisible(entry.isIntersecting),
      { rootMargin: '-15% 0px -15% 0px', threshold: 0.05 },
    )

    observer.observe(programSection)
    return () => observer.disconnect()
  }, [])

  return (
    <aside
      className={`mobile-sticky${isProgramVisible ? ' is-hidden' : ''}`}
      aria-label="Pendaftaran Amal Fun Run"
      aria-hidden={isProgramVisible}
    >
      <button
        className="mobile-sticky-toggle"
        type="button"
        onClick={() => onSelect('funrun')}
      >
        <Run size={20} /> Daftar Fun Run — dari RM5
      </button>
    </aside>
  )
}

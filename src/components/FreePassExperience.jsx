import { useEffect, useRef, useState } from 'react'
import { ASSETS } from '../data/event'

const ACTIVITIES = [
  { emoji: '🎨', title: 'Pertandingan Mewarna', detail: '7–12 Tahun', crop: 'is-coloring' },
  { emoji: '🌸', title: 'Pertandingan Gubahan Sejadah', detail: '', crop: 'is-prayer-mat' },
  { emoji: '🥗', title: 'Pertandingan Menyediakan Masakan Kerabu', detail: '', crop: 'is-kerabu' },
]

const CONFETTI = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  x: `${8 + ((index * 17) % 84)}%`,
  delay: `${(index % 6) * 70}ms`,
  color: ['#ff5a4f', '#ffc928', '#13b9ae', '#087443'][index % 4],
}))

function initialPhase() {
  try {
    return window.sessionStorage.getItem('yam-free-pass-revealed') === '1' ? 'revealed' : 'closed'
  } catch {
    return 'closed'
  }
}

async function copyCouponCode() {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText('PERCUMA')
      return
    } catch {
      // Fall through for browsers that expose Clipboard API without write permission.
    }
  }

  const fallback = document.createElement('textarea')
  fallback.value = 'PERCUMA'
  fallback.setAttribute('readonly', '')
  fallback.style.position = 'fixed'
  fallback.style.opacity = '0'
  document.body.appendChild(fallback)
  fallback.select()
  const copied = document.execCommand('copy')
  fallback.remove()
  if (!copied) throw new Error('Clipboard copy failed')
}

export default function FreePassExperience() {
  const [phase, setPhase] = useState(initialPhase)
  const [copyStatus, setCopyStatus] = useState('idle')
  const [isVisible, setIsVisible] = useState(false)
  const [isReminderDismissed, setIsReminderDismissed] = useState(false)
  const experienceRef = useRef(null)
  const copyResetRef = useRef(null)
  const revealTimerRef = useRef(null)

  const isOpening = phase === 'opening'
  const isRevealed = phase === 'revealed'
  const isOpen = phase !== 'closed'

  useEffect(() => {
    const node = experienceRef.current
    if (!node || !('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.08 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => () => {
    window.clearTimeout(copyResetRef.current)
    window.clearTimeout(revealTimerRef.current)
  }, [])

  const revealPass = () => {
    if (isOpen) return
    setPhase('opening')
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    revealTimerRef.current = window.setTimeout(() => {
      setPhase('revealed')
      try {
        window.sessionStorage.setItem('yam-free-pass-revealed', '1')
      } catch {
        // The experience still works when storage is unavailable.
      }
    }, reduceMotion ? 0 : 1100)
  }

  const handleCopy = async () => {
    try {
      await copyCouponCode()
      setCopyStatus('copied')
      window.clearTimeout(copyResetRef.current)
      copyResetRef.current = window.setTimeout(() => setCopyStatus('idle'), 2600)
    } catch {
      setCopyStatus('failed')
    }
  }

  const scrollToForm = () => {
    document.querySelector('#bcl-payment-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      className={`free-pass-experience is-${phase}`}
      ref={experienceRef}
      aria-labelledby="free-pass-title"
    >
      <div className="free-pass-intro">
        <h3 id="free-pass-title">🎉 3 PERTANDINGAN MENARIK, <span>SEMUANYA PERCUMA!</span></h3>
        <p>Nak masuk pertandingan tanpa bayar satu sen? Kami ada <strong>PAS PERCUMA</strong> khas untuk anda!</p>
      </div>

      <div className="free-pass-activities" aria-label="Tiga pertandingan percuma">
        {ACTIVITIES.map((activity) => (
          <article className="free-pass-activity" key={activity.title}>
            <div
              className={`free-pass-activity-image ${activity.crop}`}
              style={{ backgroundImage: `url(${ASSETS.activityRegistrationPoster})` }}
              role="img"
              aria-label={`Gambar ${activity.title}`}
            />
            <div>
              <span aria-hidden="true">{activity.emoji}</span>
              <h4>{activity.title}</h4>
              {activity.detail ? <p>{activity.detail}</p> : null}
            </div>
          </article>
        ))}
      </div>

      <div className="gift-celebration" aria-live="polite">
        <div className="confetti-burst" aria-hidden="true">
          {CONFETTI.map((piece) => (
            <i
              key={piece.id}
              style={{ '--confetti-x': piece.x, '--confetti-delay': piece.delay, '--confetti-color': piece.color }}
            />
          ))}
        </div>

        <div className="gift-box" aria-hidden="true">
          <div className="gift-coupon">
            <span>KOD PAS PERCUMA ANDA</span>
            <strong>PERCUMA</strong>
            <small>100% DISKAUN | BAYAR RM0</small>
          </div>
          <div className="gift-lid">
            <span className="gift-bow gift-bow-left" />
            <span className="gift-bow gift-bow-right" />
            <span className="gift-ribbon-vertical" />
          </div>
          <div className="gift-base"><span /></div>
        </div>

        {!isOpen ? (
          <button className="button button-coral free-pass-open" type="button" onClick={revealPass}>
            🎁 BUKA PAS PERCUMA SAYA!
          </button>
        ) : null}

        {isOpening ? <p className="free-pass-opening-message">Sedang membuka pas anda…</p> : null}

        {isRevealed ? (
          <div className="free-pass-reveal">
            <h4>🎊 TAA-DAA! PAS PERCUMA ANDA DAH READY!</h4>
            <div className="coupon-card" aria-label="Kod kupon PERCUMA, diskaun 100 peratus">
              <span>KOD PAS PERCUMA ANDA</span>
              <strong>PERCUMA</strong>
              <small>100% DISKAUN | BAYAR RM0</small>
            </div>
            <div className="free-pass-actions">
              <button className="button free-pass-copy" type="button" onClick={handleCopy}>
                {copyStatus === 'copied' ? '✅ KOD PERCUMA DISALIN!' : '📋 SALIN KOD PERCUMA'}
              </button>
              <button className="button button-coral" type="button" onClick={scrollToForm}>
                🏃 JOM DAFTAR SEKARANG!
              </button>
            </div>
            <p className="copy-feedback" role="status">
              {copyStatus === 'copied' ? 'Kod PERCUMA sudah disalin ke clipboard.' : null}
              {copyStatus === 'failed' ? 'Salinan automatik tidak berjaya. Salin kod PERCUMA secara manual.' : null}
            </p>

            <div className="coupon-guide">
              <h4>DAH DAPAT KOD? JOM TEBUS!</h4>
              <ol>
                <li><span>1</span><p><strong>Pilih pertandingan</strong> dan bilangan peserta.</p></li>
                <li><span>2</span><p><strong>Isi maklumat</strong> pendaftaran.</p></li>
                <li><span>3</span><p>Klik <strong>“Have a coupon code? → Redeem”</strong>.</p></li>
                <li><span>4</span><p>Masukkan kod <strong>PERCUMA</strong> dan pastikan jumlah akhir <strong>RM0</strong>.</p></li>
              </ol>
              <p className="coupon-warning"><strong>Penting:</strong> Harga RM1 dalam borang BCL adalah harga sebelum diskaun. Gunakan kupon PERCUMA untuk mendapatkan diskaun 100%. Jangan terus membuat bayaran RM1.</p>
            </div>
          </div>
        ) : null}
      </div>

      {isRevealed && isVisible && !isReminderDismissed ? (
        <div className="floating-coupon-reminder" role="status">
          <button className="floating-coupon-copy" type="button" onClick={handleCopy}>
            🎟️ <span><strong>Kod PERCUMA</strong><small>{copyStatus === 'copied' ? 'Kod disalin!' : 'Salin Kod'}</small></span>
          </button>
          <button
            className="floating-coupon-close"
            type="button"
            aria-label="Tutup peringatan kod kupon"
            onClick={() => setIsReminderDismissed(true)}
          >×</button>
        </div>
      ) : null}
    </section>
  )
}

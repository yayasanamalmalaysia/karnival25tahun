import { EVENT } from '../data/event'
import { useCountdown } from '../hooks/useCountdown'

export default function Countdown() {
  const countdown = useCountdown(EVENT.dateTime)
  const units = [
    ['Hari', countdown.days],
    ['Jam', countdown.hours],
    ['Minit', countdown.minutes],
    ['Saat', countdown.seconds],
  ]

  return (
    <section className="countdown-wrap" aria-labelledby="countdown-title">
      <div className="countdown shell">
        <div className="ticket-notch ticket-notch-left" aria-hidden="true" />
        <div className="countdown-heading">
          <span>Raikan 25 Tahun Bersama Kami</span>
          <h2 id="countdown-title">Menuju Hari Karnival!</h2>
          <p>3 Oktober 2026 • Kg. Labohan Dagang</p>
        </div>
        <div className="countdown-grid" aria-live="polite">
          {units.map(([label, value]) => (
            <div className="countdown-unit" key={label}>
              <strong>{String(value).padStart(2, '0')}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="ticket-notch ticket-notch-right" aria-hidden="true" />
      </div>
    </section>
  )
}

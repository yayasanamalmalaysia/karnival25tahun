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
        <div className="countdown-heading">
          <h2 id="countdown-title">Menuju Karnival Jubli Perak</h2>
          <p>Countdown berdasarkan permulaan tarikh program. Waktu rasmi akan dikemas kini.</p>
        </div>
        <div className="countdown-grid" aria-live="polite">
          {units.map(([label, value]) => (
            <div className="countdown-unit" key={label}>
              <strong>{String(value).padStart(2, '0')}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

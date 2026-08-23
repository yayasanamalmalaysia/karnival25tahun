const CONFETTI = [
  ['confetti-1', '#ffc928'],
  ['confetti-2', '#ff5a4f'],
  ['confetti-3', '#13b9ae'],
  ['confetti-4', '#087443'],
  ['confetti-5', '#248de4'],
  ['confetti-6', '#ffc928'],
  ['confetti-7', '#ff5a4f'],
  ['confetti-8', '#13b9ae'],
]

export function ConfettiField({ className = '' }) {
  return (
    <div className={`confetti-field ${className}`} aria-hidden="true">
      {CONFETTI.map(([name, color]) => <span className={name} style={{ '--confetti': color }} key={name} />)}
    </div>
  )
}

export function Bunting({ className = '' }) {
  return (
    <div className={`bunting ${className}`} aria-hidden="true">
      <span /><span /><span /><span /><span /><span /><span /><span /><span />
    </div>
  )
}

export function FestivalPlane() {
  return (
    <div className="festival-plane" aria-hidden="true">
      <svg viewBox="0 0 180 90" role="presentation">
        <path className="plane-trail" d="M2 69c35-21 63-25 104-20" />
        <path className="plane-body" d="M55 42 161 19c9-2 16 0 17 4 1 5-5 8-13 10l-42 11-25 29-16 4 11-27-27 7-12 14-10 2 4-18-14-10 11-3 10 10Z" />
        <path className="plane-accent" d="m115 29 27-6-10 9-18 5Z" />
        <circle cx="157" cy="29" r="2.5" />
      </svg>
    </div>
  )
}

export function FloatingBadges() {
  return (
    <div className="floating-badges" aria-hidden="true">
      <div className="float-badge badge-anniversary"><strong>25</strong><span>Tahun</span></div>
      <div className="float-badge badge-shirt"><strong>RM50</strong><span>Pakej Lengkap</span></div>
      <div className="float-badge badge-join"><strong>Jom</strong><span>Sertai!</span></div>
    </div>
  )
}

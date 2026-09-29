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
      <svg viewBox="0 0 320 160" role="presentation">
        {/* Swept wings and twin underwing engines, inspired by an A330. */}
        <path className="plane-trail" d="M4 79h42" />
        <path className="plane-wing" d="m172 69-56-55-15-5 30 62Zm0 22-56 55-15 5 30-62Z" />
        <path className="plane-wingtip" d="m116 14-10-10-5 5m15 137-10 10-5-5" />
        <path className="plane-tail" d="M92 72 62 43 51 41l14 34Zm0 16-30 29-11 2 14-34Z" />
        <g className="plane-engine">
          <path d="M144 38h24c6 0 8 3 8 7s-2 7-8 7h-24l-6-7Z" />
          <path d="M144 108h24c6 0 8 3 8 7s-2 7-8 7h-24l-6-7Z" />
          <ellipse className="plane-intake" cx="170" cy="45" rx="3" ry="5" />
          <ellipse className="plane-intake" cx="170" cy="115" rx="3" ry="5" />
        </g>
        <path className="plane-body" d="M52 80 94 71l131-5c31 0 54 5 70 14-16 9-39 14-70 14L94 89Z" />
        <path className="plane-belly" d="M54 80h241c-16 9-39 14-70 14L94 89Z" />
        <path className="plane-stripe" d="m92 85 145 4c17 0 31-2 42-5" />
        <path className="plane-fin" d="m58 79 17-23h17l-7 23Z" />
        <path className="plane-fin-mark" d="m74 73 8-12h5l-3 12Z" />
        <path className="plane-cockpit" d="m266 70 12 4-2 4-11-2Zm12 12 2 3-13 4-2-5Z" />
        <path className="plane-windows" d="M112 73h132M112 87h132" />
        <path className="plane-door" d="M104 72v5m148-7v6M104 83v5m148-4v6" />
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

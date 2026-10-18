import { useState } from 'react'
import { ChevronDown, Community, Run } from './Icons'

const choices = [
  ['funrun', 'Daftar Amal Fun Run', Run],
  ['activities', 'Aktiviti Program Percuma', Community],
]

export default function MobileStickyCTA({ onSelect }) {
  const [open, setOpen] = useState(false)

  const select = (id) => {
    setOpen(false)
    onSelect(id)
  }

  return (
    <aside className={open ? 'mobile-sticky is-open' : 'mobile-sticky'} aria-label="Pendaftaran pantas">
      <button
        className="mobile-sticky-toggle"
        type="button"
        aria-controls="mobile-registration-choices"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        Daftar Sekarang <ChevronDown size={20} />
      </button>
      <div className="mobile-sticky-choices" id="mobile-registration-choices" aria-label="Pilih jenis pendaftaran">
        {choices.map(([id, label, ChoiceIcon]) => (
          <button type="button" key={id} onClick={() => select(id)}>
            <ChoiceIcon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}

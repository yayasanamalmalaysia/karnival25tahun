import { useState } from 'react'
import { ChevronDown, Run, Shirt } from './Icons'

const choices = [
  ['funrun', 'Fun Run', Run],
  ['shirt', 'Baju Jubli Perak', Shirt],
]

export default function MobileStickyCTA({ onSelect }) {
  const [open, setOpen] = useState(false)

  const select = (id) => {
    setOpen(false)
    onSelect(id)
  }

  return (
    <aside className={open ? 'mobile-sticky is-open' : 'mobile-sticky'} aria-label="Pendaftaran pantas">
      <button className="mobile-sticky-toggle" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        Daftar Sekarang <ChevronDown size={20} />
      </button>
      <div className="mobile-sticky-choices">
        {choices.map(([id, label, ChoiceIcon]) => (
          <button type="button" key={id} onClick={() => select(id)}><ChoiceIcon /><span>{label}</span></button>
        ))}
      </div>
    </aside>
  )
}

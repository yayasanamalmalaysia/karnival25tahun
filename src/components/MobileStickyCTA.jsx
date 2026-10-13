import { Run } from './Icons'

export default function MobileStickyCTA({ onSelect }) {
  return (
    <aside className="mobile-sticky" aria-label="Pendaftaran pantas Fun Run">
      <button className="mobile-sticky-toggle" type="button" onClick={() => onSelect('funrun')}>
        <Run size={20} /> Daftar Fun Run — serendah RM15
      </button>
    </aside>
  )
}

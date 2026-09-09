import { useEffect, useRef } from 'react'
import { BCL_SCRIPT_URL, REGISTRATIONS } from '../data/event'
import { Check, Lock, Run, Shirt } from './Icons'

const formCopy = {
  funrun: {
    title: 'Pendaftaran Amal Fun Run',
    strong: 'Yuran pendaftaran RM50 termasuk baju, set sarapan dan sijil penyertaan',
    detail: 'Sediakan maklumat peserta dan pilihan saiz baju untuk melengkapkan pendaftaran.',
    Icon: Run,
  },
  shirt: {
    title: 'Tempahan Baju Jubli Perak',
    strong: 'Tempahan berasingan — harga akan disahkan',
    detail: 'Pilih jenis dan saiz baju dalam borang untuk melengkapkan tempahan.',
    Icon: Shirt,
  },
}

function BCLForm({ selected }) {
  const current = formCopy[selected]
  const ItemIcon = current.Icon
  const formRef = useRef(null)

  useEffect(() => {
    const form = formRef.current
    if (!form) return undefined

    // BCL reads #bcl-payment-form when its script executes. Recreate that
    // script on every selection so the active product form replaces the prior iframe.
    form.replaceChildren()
    const loading = document.createElement('p')
    loading.className = 'bcl-loading'
    loading.textContent = 'Memuatkan borang BCL…'
    form.appendChild(loading)

    const script = document.createElement('script')
    script.src = BCL_SCRIPT_URL
    script.async = true
    script.dataset.karnivalBcl = selected
    document.body.appendChild(script)

    return () => script.remove()
  }, [selected])

  return (
    <div className="checkout-panel bcl-shell">
      <div className="checkout-panel-heading">
        <span className="checkout-icon"><ItemIcon /></span>
        <div>
          <h3>{current.title}</h3>
          <p><strong>{current.strong}</strong></p>
          <p>{current.detail}</p>
        </div>
        <span className="official-form"><Lock size={20} /> Integrasi BCL aktif</span>
      </div>
      <div
        id="bcl-payment-form"
        ref={formRef}
        data-url={REGISTRATIONS[selected].embedUrl}
        aria-label={`Borang BCL untuk ${current.title}`}
      >
        <p className="bcl-loading">Memuatkan borang BCL…</p>
      </div>
    </div>
  )
}

const selectorItems = [
  ['funrun', 'Amal Fun Run — RM50', Run],
  ['shirt', 'Baju Jubli Perak — Tempahan berasingan', Shirt],
]

export default function BCLCheckout({ selected, onSelect }) {
  return (
    <section className="section checkout-section" id="checkout" aria-labelledby="checkout-title">
      <div className="shell">
        <div className="section-heading centered">
          <span className="section-kicker">Daftar Awal Sekarang</span>
          <h2 id="checkout-title">Lengkapkan Pendaftaran</h2>
          <p>Pilih aktiviti dan lengkapkan pendaftaran tanpa meninggalkan halaman ini.</p>
        </div>
        <div className="checkout-layout">
          <aside className="checkout-selector" aria-label="Pilih aktiviti untuk pendaftaran">
            <p className="selector-title">Pilih aktiviti</p>
            {selectorItems.map(([id, label, ItemIcon]) => (
              <button
                className={selected === id ? 'selector-item is-selected' : 'selector-item'}
                type="button"
                key={id}
                aria-pressed={selected === id}
                onClick={() => onSelect(id, false)}
              >
                <span className="selector-icon"><ItemIcon /></span>
                <span>{label}</span>
                {selected === id && <Check className="selector-check" size={20} />}
              </button>
            ))}
          </aside>
          <div className="checkout-content">
            <BCLForm selected={selected} />
          </div>
        </div>
      </div>
    </section>
  )
}

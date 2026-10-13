import { useEffect } from 'react'
import { BCL_SCRIPT_URL, REGISTRATIONS } from '../data/event'
import { Check, Lock, Run, Shirt } from './Icons'

const formCopy = {
  funrun: {
    title: 'Pendaftaran Amal Fun Run',
    strong: 'Pendaftaran serendah RM15 seorang',
    detail: 'Pilih pakej larian, kategori 3KM atau 5KM dan maklumat peserta dalam borang rasmi BCL.',
    Icon: Run,
  },
  shirt: {
    title: 'Tempahan Baju Jubli Perak',
    strong: 'RM30 setiap helai • Tempahan berasingan',
    detail: 'Pilih jenis dan saiz baju dalam borang untuk melengkapkan tempahan.',
    Icon: Shirt,
  },
}

function BCLForm({ selected }) {
  const current = formCopy[selected]
  const ItemIcon = current.Icon

  useEffect(() => {
    // Each route has one BCL container. Keep the script across React StrictMode
    // effect re-runs so the provider's iframe is never cleared or duplicated.
    if (document.querySelector('script[data-karnival-bcl]')) return
    const script = document.createElement('script')
    script.src = BCL_SCRIPT_URL
    script.async = true
    script.dataset.karnivalBcl = selected
    document.body.appendChild(script)
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
        <span className="official-form"><Lock size={20} /> Borang rasmi BCL</span>
      </div>
      <div
        id="bcl-payment-form"
        data-url={REGISTRATIONS[selected].embedUrl}
        aria-label={`Borang BCL untuk ${current.title}`}
      >
        <p className="bcl-loading">Memuatkan borang BCL…</p>
      </div>
      {selected === 'funrun' && <p className="bcl-fallback">Borang tidak dipaparkan? <a href="https://yayasanamalmalaysia.bcl.my/event/amalfunrun" target="_blank" rel="noopener noreferrer">Buka borang Amal Fun Run terus di BCL</a>.</p>}
    </div>
  )
}

const selectorItems = [
  ['funrun', 'Amal Fun Run — serendah RM15', Run],
  ['shirt', 'Baju Jubli Perak — Tempahan berasingan', Shirt],
]

export default function BCLCheckout({ selected, onSelect, registrationIds = ['funrun', 'shirt'] }) {
  const visibleItems = selectorItems.filter(([id]) => registrationIds.includes(id))
  const showSelector = visibleItems.length > 1
  const isFunRun = selected === 'funrun'

  return (
    <section className="section checkout-section" id="checkout" aria-labelledby="checkout-title">
      <div className="shell">
        <div className="section-heading centered">
          <span className="section-kicker">{isFunRun ? 'Daftar Awal Sekarang' : 'Tempahan Rasmi'}</span>
          <h2 id="checkout-title">{isFunRun ? 'Lengkapkan Pendaftaran Fun Run' : 'Lengkapkan Tempahan Baju Jubli Perak'}</h2>
          <p>{isFunRun ? 'Lengkapkan pendaftaran Amal Fun Run tanpa meninggalkan halaman ini.' : 'Pilih jenis dan saiz baju dalam borang untuk melengkapkan tempahan.'}</p>
        </div>
        <div className={showSelector ? 'checkout-layout' : 'checkout-layout checkout-layout-single'}>
          {showSelector && <aside className="checkout-selector" aria-label="Pilih aktiviti untuk pendaftaran">
            <p className="selector-title">Pilih aktiviti</p>
            {visibleItems.map(([id, label, ItemIcon]) => (
              <button
                className={selected === id ? 'selector-item is-selected' : 'selector-item'}
                type="button"
                key={id}
                aria-pressed={selected === id}
                onClick={() => onSelect?.(id, false)}
              >
                <span className="selector-icon"><ItemIcon /></span>
                <span>{label}</span>
                {selected === id && <Check className="selector-check" size={20} />}
              </button>
            ))}
          </aside>}
          <div className="checkout-content">
            <BCLForm selected={selected} />
          </div>
        </div>
      </div>
    </section>
  )
}

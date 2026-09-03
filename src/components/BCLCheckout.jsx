import { useEffect } from 'react'
import { EVENT, REGISTRATIONS } from '../data/event'
import { Calendar, Check, Info, Lock, Run, Shirt } from './Icons'

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
    detail: 'Paparan fungsi menggunakan borang BCL Fun Run sebagai dummy.',
    Icon: Shirt,
  },
}

function DummyBCL({ selected }) {
  const current = formCopy[selected]
  const ItemIcon = current.Icon

  useEffect(() => {
    const selector = 'script[data-karnival-bcl="dummy"]'
    if (document.querySelector(selector)) return

    const script = document.createElement('script')
    script.src = 'https://bcl.my/js/bc-encrypted-payment-embed.js'
    script.async = true
    script.dataset.karnivalBcl = 'dummy'
    document.body.appendChild(script)
  }, [])

  return (
    <div className="checkout-panel bcl-shell">
      <div className="checkout-panel-heading">
        <span className="checkout-icon"><ItemIcon /></span>
        <div>
          <h3>{current.title}</h3>
          <p><strong>{current.strong}</strong></p>
          <p>{current.detail}</p>
        </div>
        <span className="official-form"><Lock size={20} /> Integrasi BCL aktif • Mod dummy</span>
      </div>
      <div className="dummy-bcl-notice" role="note">
        <Info size={20} />
        <p><strong>Demo fungsi:</strong> Kedua-dua pilihan menggunakan borang BCL yang sama buat sementara. Nama produk dan medan dalam borang masih mengikut borang asal.</p>
      </div>
      <div
        id="bcl-payment-form"
        data-url={REGISTRATIONS[selected].embedUrl}
        data-dummy-for={selected}
        aria-label={`Borang BCL dummy untuk ${current.title}`}
      >
        <p className="bcl-loading">Memuatkan borang BCL dummy…</p>
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
            <div className="registration-close-note"><Calendar size={20} /> Pendaftaran ditutup {EVENT.registrationCloseLabel}.</div>
            <div className="checkout-note"><Info size={20} /> Versi draf menggunakan satu borang BCL sebagai dummy untuk semua pilihan.</div>
          </aside>
          <div className="checkout-content">
            <DummyBCL selected={selected} />
          </div>
        </div>
      </div>
    </section>
  )
}

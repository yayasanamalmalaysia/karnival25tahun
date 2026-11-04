import { useEffect, useRef, useState } from 'react'
import { ASSETS, BCL_SCRIPT_URL, REGISTRATIONS } from '../data/event'
import { ArrowRight, Check, Community, Lock, Run, Shirt } from './Icons'
import FreePassExperience from './FreePassExperience'

const formCopy = {
  activities: {
    title: 'Pendaftaran Aktiviti Program Percuma',
    strong: 'Pilih aktiviti percuma yang ingin disertai',
    detail: 'Daftar pertandingan mewarna kategori 7–9 tahun atau 4–6 tahun, gubahan sejadah atau menyediakan masakan kerabu.',
    Icon: Community,
  },
  funrun: {
    title: 'Pendaftaran Amal Fun Run',
    strong: 'Dua pilihan: RM5 atau RM15 seorang',
    detail: 'Pilih pakej larian + bib nombor (RM5) atau larian + medal + bib nombor (RM15), kemudian pilih kategori 3KM atau 5KM.',
    Icon: Run,
  },
  shirt: {
    title: 'Tempahan Baju Jubli Perak',
    strong: 'RM30 setiap helai • Tempahan berasingan',
    detail: 'Pilih jenis dan saiz baju dalam borang untuk melengkapkan tempahan.',
    Icon: Shirt,
  },
  funrunShirt: {
    title: 'Pre-order Baju Fun Run Sahaja',
    strong: 'Tempahan baju sahaja • Tanpa pendaftaran larian',
    detail: 'Pilih rekaan, jenis dan saiz baju dalam borang rasmi BCL di bawah.',
    Icon: Shirt,
  },
}

function CouponSpotlight() {
  const [copyStatus, setCopyStatus] = useState('idle')

  const copyCode = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText('PERCUMA')
      } else {
        const input = document.createElement('textarea')
        input.value = 'PERCUMA'
        input.setAttribute('readonly', '')
        input.style.position = 'fixed'
        input.style.opacity = '0'
        document.body.appendChild(input)
        input.select()
        const copied = document.execCommand('copy')
        input.remove()
        if (!copied) throw new Error('Copy failed')
      }
      setCopyStatus('copied')
      window.setTimeout(() => setCopyStatus('idle'), 2600)
    } catch {
      setCopyStatus('failed')
    }
  }

  return (
    <aside className="coupon-spotlight" aria-labelledby="coupon-spotlight-title">
      <div className="coupon-spotlight-copy">
        <span className="coupon-spotlight-kicker">⚠️ LANGKAH WAJIB UNTUK BAYAR RM0</span>
        <h3 id="coupon-spotlight-title">Guna kod kupon <strong>PERCUMA</strong></h3>
        <p>Pilih pertandingan dan isi maklumat. Di akhir borang, tekan <strong>“Have a coupon code? → Redeem”</strong>, masukkan kod <strong>PERCUMA</strong> dan pastikan jumlah akhir menjadi <strong>RM0</strong>.</p>
      </div>
      <div className="coupon-spotlight-code" aria-label="Kod kupon PERCUMA">
        <small>KOD KUPON</small>
        <strong>PERCUMA</strong>
        <button type="button" onClick={copyCode}>
          {copyStatus === 'copied' ? '✅ KOD DISALIN!' : '📋 SALIN KOD'}
        </button>
        {copyStatus === 'failed' ? <span>Salin “PERCUMA” secara manual.</span> : null}
      </div>
    </aside>
  )
}

function BCLForm({ selected }) {
  const current = formCopy[selected]
  const ItemIcon = current.Icon
  const formRef = useRef(null)

  useEffect(() => {
    const form = formRef.current
    if (!form) return undefined

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
        <span className="official-form"><Lock size={20} /> Borang rasmi BCL</span>
      </div>
      <div
        id="bcl-payment-form"
        ref={formRef}
        data-url={REGISTRATIONS[selected].embedUrl}
        aria-label={`Borang BCL untuk ${current.title}`}
      >
        <p className="bcl-loading">Memuatkan borang BCL…</p>
      </div>
      {selected === 'funrun' && <p className="bcl-fallback">Borang tidak dipaparkan? <a href="https://yayasanamalmalaysia.bcl.my/event/amalfunrun" target="_blank" rel="noopener noreferrer">Buka borang Amal Fun Run terus di BCL</a>.</p>}
      {selected === 'funrunShirt' && <p className="bcl-fallback">Borang tidak dipaparkan? <a href="https://yayasanamalmalaysia.bcl.my/embed/form/pre-bajufunrun" target="_blank" rel="noopener noreferrer">Buka borang pre-order Baju Fun Run terus di BCL</a>.</p>}
    </div>
  )
}

const selectorItems = [
  ['activities', 'Aktiviti Program Percuma', Community],
  ['funrun', 'Amal Fun Run — serendah RM5', Run],
  ['shirt', 'Baju Jubli Perak — Tempahan berasingan', Shirt],
  ['funrunShirt', 'Baju Fun Run Sahaja — Pre-order', Shirt],
]

export default function BCLCheckout({ selected, onSelect, registrationIds = ['funrun', 'shirt'] }) {
  const visibleItems = selectorItems.filter(([id]) => registrationIds.includes(id))
  const showSelector = visibleItems.length > 1
  const isFunRun = selected === 'funrun'
  const isActivities = selected === 'activities'
  const isFunRunShirt = selected === 'funrunShirt'

  const sectionKicker = isActivities ? 'Pendaftaran Percuma' : isFunRun ? 'Pendaftaran Dibuka Semula' : isFunRunShirt ? 'Tempahan Baju Sahaja' : 'Tempahan Rasmi'
  const sectionTitle = isActivities ? 'Daftar Aktiviti Program Percuma' : isFunRun ? 'Lengkapkan Pendaftaran Fun Run' : isFunRunShirt ? 'Pre-order Baju Fun Run Sahaja' : 'Lengkapkan Tempahan Baju Jubli Perak'
  const sectionDetail = isActivities
    ? 'Pilih pertandingan yang ingin disertai dan lengkapkan pendaftaran rasmi BCL di bawah.'
    : isFunRun
      ? 'Pilih pakej Amal Fun Run RM5 atau RM15 tanpa meninggalkan halaman ini. Pendaftaran pakej RM5 dan RM15 sahaja ditutup 11:59 malam, 13 November 2026.'
      : isFunRunShirt
        ? 'Tempah baju rasmi Fun Run tanpa mendaftar pakej larian.'
      : 'Pilih jenis dan saiz baju dalam borang untuk melengkapkan tempahan.'

  return (
    <section className="section checkout-section" id="checkout" aria-labelledby="checkout-title">
      <div className="shell">
        <div className="section-heading centered">
          <span className="section-kicker">{sectionKicker}</span>
          <h2 id="checkout-title">{sectionTitle}</h2>
          <p>{sectionDetail}</p>
        </div>
        {isActivities && <CouponSpotlight />}
        {isActivities && (
          <figure className="activity-registration-poster">
            <div className="activity-poster-visual">
              <img
                src={ASSETS.activityRegistrationPoster}
                alt="Poster Aktiviti Program Percuma: pertandingan mewarna kategori 7 hingga 9 tahun dan 4 hingga 6 tahun, pertandingan gubahan sejadah dan pertandingan menyediakan masakan kerabu pada 14 November 2026 di Kampung Labohan Dagang"
                loading="lazy"
              />
              <div className="poster-category-correction" aria-label="Pertandingan mewarna: kategori 7 hingga 9 tahun dan 4 hingga 6 tahun">
                <span>PERTANDINGAN MEWARNA</span>
                <strong>7–9 &amp; 4–6 TAHUN</strong>
              </div>
            </div>
            <figcaption>
              <span>🎨 KEMAS KINI KATEGORI MEWARNA</span>
              <strong>7–9 TAHUN</strong>
              <b>&amp;</b>
              <strong>4–6 TAHUN</strong>
            </figcaption>
          </figure>
        )}
        {isActivities && (
          <a className="button button-coral activity-registration-cta" href="#bcl-payment-form">
            Daftar / Sertai Sekarang <ArrowRight size={20} />
          </a>
        )}
        {isActivities && <FreePassExperience />}
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

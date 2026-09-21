import { useState } from 'react'
import BCLCheckout from './components/BCLCheckout'
import { JubileeShirtCard } from './components/RegistrationCards'
import { ASSETS, EVENT } from './data/event'
import { ArrowRight } from './components/Icons'

export default function JubileeStore() {
  const [activeImage, setActiveImage] = useState(null)

  const openCheckout = () => {
    window.requestAnimationFrame(() => {
      document.querySelector('#checkout')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Langkau ke kandungan</a>
      <header className="site-header">
        <div className="shell header-inner jubilee-store-header">
          <a className="brand" href="../" aria-label="Kembali ke halaman Karnival dan Fun Run">
            <img src={ASSETS.logo} alt="Logo rasmi Yayasan Amal Malaysia" />
            <span>Yayasan Amal<br />Malaysia</span>
          </a>
          <a className="button button-gold header-cta" href="../#pendaftaran">Kembali ke Fun Run <ArrowRight size={19} /></a>
        </div>
      </header>
      <main id="main-content">
        <section className="section registration-section jubilee-store-hero">
          <div className="shell">
            <div className="section-heading registration-heading">
              <span className="section-kicker">Koleksi Rasmi 25 Tahun</span>
              <h1>Baju Jubli Perak</h1>
              <p>Halaman tempahan khas Baju Rasmi Jubli Perak Yayasan Amal Malaysia.</p>
            </div>
            <div className="registration-deadline" role="note">
              <span>Tarikh tutup tempahan baju</span>
              <strong>{EVENT.registrationCloseLabel}</strong>
            </div>
            <div className="registration-grid registration-grid-single">
              <JubileeShirtCard onSelect={openCheckout} onOpenImage={setActiveImage} />
            </div>
          </div>
          {activeImage && <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="Paparan gambar saiz penuh" onClick={() => setActiveImage(null)}>
            <div className="image-lightbox-content" onClick={(event) => event.stopPropagation()}>
              <button className="image-lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label="Tutup paparan gambar">×</button>
              <img src={activeImage.src} alt={activeImage.alt} />
              <p>Tekan di luar gambar atau butang tutup untuk kembali.</p>
            </div>
          </div>}
        </section>
        <BCLCheckout selected="shirt" registrationIds={['shirt']} />
      </main>
    </>
  )
}

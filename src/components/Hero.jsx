import { ASSETS, EVENT } from '../data/event'
import { ArrowRight, Calendar, MapPin } from './Icons'
import { Bunting, ConfettiField, FestivalPlane, FloatingBadges } from './FestiveDecor'

export default function Hero({ onRegister }) {
  return (
    <section className="hero" id="utama">
      <div className="hero-sky" aria-hidden="true">
        <span className="cloud cloud-one" />
        <span className="cloud cloud-two" />
        <FestivalPlane />
      </div>
      <Bunting className="hero-bunting" />
      <ConfettiField className="hero-confetti" />

      <div className="shell hero-stage">
        <div className="hero-copy">
          <div className="hero-copy-inner">
            <div className="hero-eyebrow"><span aria-hidden="true">★</span> Sambutan Rasmi @25 Tahun</div>
            <h1><span className="hero-karnival">Festival</span> Labohan Dagang <em>@25 tahun</em> <small>Yayasan Amal Malaysia</small></h1>
            <div className="hero-facts" aria-label="Maklumat utama program">
              <p><Calendar /> <strong>{EVENT.dateLabel}</strong></p>
              <p><MapPin /> <strong>{EVENT.locationShort}</strong></p>
            </div>
            <p className="hero-supporting">Jom raikan 25 tahun legasi, kebersamaan dan kemeriahan bersama pelbagai aktiviti menarik untuk semua.</p>
            <p className="hero-package"><strong>Fun Run &amp; Amal Rider:</strong> RM50 setiap pendaftaran • Baju • Set sarapan • Sijil penyertaan</p>
            <div className="hero-actions">
              <button className="button button-primary" type="button" onClick={() => onRegister('selector')}>
                Daftar Aktiviti Sekarang <ArrowRight size={20} />
              </button>
              <a className="button button-ghost" href="#aktiviti">
                Lihat Aktiviti Festival <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <figure className="hero-media">
            <img src={ASSETS.hero} alt="Visual konsep suasana komuniti, keluarga, pelari dan penunggang sempena festival" />
            <figcaption>Visual konsep suasana Festival Labohan Dagang</figcaption>
          </figure>
          <FloatingBadges />
          <img className="hero-kids" src={ASSETS.festivalKids} alt="" aria-hidden="true" />
          <img className="hero-anniversary-logo" src={ASSETS.anniversaryLogo} alt="Logo rasmi 25 Tahun Yayasan Amal Malaysia" />
        </div>
      </div>
      <div className="hero-wave" aria-hidden="true" />
    </section>
  )
}

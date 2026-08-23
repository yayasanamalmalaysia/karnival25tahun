import { ASSETS, EVENT } from '../data/event'
import { ArrowRight, Calendar, MapPin } from './Icons'

export default function Hero({ onRegister }) {
  return (
    <section className="hero" id="utama">
      <div className="hero-copy">
        <div className="hero-copy-inner">
          <img className="hero-anniversary-logo" src={ASSETS.anniversaryLogo} alt="Logo rasmi 25 Tahun Yayasan Amal Malaysia" />
          <h1>Karnival Jubli Perak <span>25 Tahun Yayasan Amal Malaysia</span></h1>
          <div className="hero-facts" aria-label="Maklumat utama program">
            <p><Calendar /> <strong>{EVENT.dateLabel}</strong></p>
            <p><MapPin /> <strong>{EVENT.locationShort}</strong></p>
          </div>
          <p className="hero-tagline">{EVENT.tagline}</p>
          <div className="hero-actions">
            <button className="button button-gold" type="button" onClick={() => onRegister('selector')}>
              Daftar Aktiviti <ArrowRight size={20} />
            </button>
            <a className="button button-outline-light" href="#aktiviti">
              Lihat Aktiviti <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
      <figure className="hero-media">
        <img src={ASSETS.hero} alt="Visual draf suasana komuniti, keluarga, pelari dan penunggang sempena karnival" />
        <figcaption>Visual suasana draf — boleh diganti dengan foto rasmi program.</figcaption>
      </figure>
    </section>
  )
}

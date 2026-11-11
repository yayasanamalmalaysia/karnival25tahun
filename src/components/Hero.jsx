import { ASSETS, EVENT } from '../data/event'
import { ArrowRight, Calendar, MapPin } from './Icons'
import soutulOriginal from '../assets/soutul-amal-original-v3.png'
import profOriginal from '../assets/prof-ai-v11.png'
import latifahOriginal from '../assets/latifah-ai-v11.png'
import marlinaOriginal from '../assets/marlina-original-v3.png'
import newGuest from '../assets/figura-baharu-v4.png'

const featuredGuests = [
  'Datuk Dr. Zulkifli Mohamad Al-Bakri',
  'Muhammad Nadir Al-Nuri',
  'Zainal Rashid Ahmad (ZRA)',
  'Syed Azwan Syed Ali',
]

export default function Hero() {
  const showProgramme = () => {
    document.querySelector('#tentatif')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="utama">
      <picture className="hero-feature-backdrop" aria-hidden="true">
        <source media="(max-width: 860px)" srcSet={ASSETS.heroFeaturedMobile} />
        <img src={ASSETS.heroFeaturedDesktop} alt="" />
      </picture>
      <div className="hero-feature-shade" aria-hidden="true" />
      <div className="hero-celebration" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => <i key={index} style={{ '--piece': index }} />)}
      </div>
      <div className="hero-feature-figures" aria-hidden="true">
        <div className="hero-rear-guests">
          <img className="rear-soutul" src={soutulOriginal} alt="" />
          <img className="middle-marlina" src={marlinaOriginal} alt="" />
          <img className="middle-latifah" src={latifahOriginal} alt="" />
          <img className="middle-prof" src={profOriginal} alt="" />
        </div>
        <img className="is-zulkifli" src={ASSETS.dhuhaSpeaker} alt="" />
        <img className="is-nadir" src={ASSETS.nadirGuest} alt="" />
        <img className="is-zra" src={ASSETS.zraGuest} alt="" />
        <img className="is-syed" src={ASSETS.syedAzwanSpeaker} alt="" />
        <img className="is-new-guest" src={newGuest} alt="" />
      </div>

      <div className="shell hero-feature-stage">
        <div className="hero-feature-copy">
          <img className="hero-feature-logo" src={ASSETS.anniversaryLogo} alt="Logo rasmi 25 Tahun Yayasan Amal Malaysia" />
          <p className="hero-feature-kicker">Karnival Labohan Dagang @25 Tahun</p>
          <h1>Semua<br /><em>Dijemput Hadir!</em></h1>
          <p className="hero-feature-lead">Ayuh hadir bersama keluarga dan sahabat. Saksikan sendiri kemeriahan karnival serta pengisian istimewa bersama figura hebat yang dekat di hati masyarakat.</p>

          <div className="hero-feature-facts" aria-label="Maklumat utama program">
            <p><Calendar /> <strong>{EVENT.dateLabel}</strong><span>7.30 pagi – 9.00 malam</span></p>
            <p><MapPin /> <strong>Kompleks Yayasan Amal Malaysia</strong><span>Kg. Labohan Dagang</span></p>
          </div>

          <div className="hero-feature-actions">
            <button className="button button-coral" type="button" onClick={showProgramme}>
              Lihat Tentatif Program <ArrowRight size={20} />
            </button>
            <a className="button button-ghost" href={EVENT.rsvpUrl}>
              Daftar Kehadiran <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div className="hero-feature-guests" aria-label="Figura yang akan memeriahkan karnival">
          <p>Bersama figura yang memeriahkan karnival</p>
          <ul>{featuredGuests.map((guest) => <li key={guest}>{guest}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}

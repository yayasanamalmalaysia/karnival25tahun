import { ASSETS } from '../data/event'

export default function Organizer() {
  return (
    <section className="organizer" aria-label="Penganjur rasmi">
      <div className="shell organizer-inner">
        <div className="organizer-copy"><p>Dianjurkan oleh</p><h2>Yayasan Amal Malaysia</h2></div>
        <div className="organizer-logos">
          <img src={ASSETS.logo} alt="Logo rasmi Yayasan Amal Malaysia" />
          <span aria-hidden="true" />
          <img className="organizer-25" src={ASSETS.anniversaryLogo} alt="Logo rasmi 25 Tahun Yayasan Amal Malaysia" />
        </div>
      </div>
    </section>
  )
}

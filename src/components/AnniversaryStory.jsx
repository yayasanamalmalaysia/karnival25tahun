import { ASSETS } from '../data/event'

export default function AnniversaryStory() {
  return (
    <section className="anniversary-story" id="tentang">
      <div className="shell anniversary-grid">
        <div className="anniversary-copy">
          <h2>25 Tahun Membina Legasi</h2>
          <p>
            Sejak penubuhannya, Yayasan Amal Malaysia terus bergerak bersama masyarakat dalam misi
            kemanusiaan, kebajikan dan pembangunan komuniti.
          </p>
          <p>
            Karnival Jubli Perak menghimpunkan warga AMAL, sukarelawan, penyumbang, rakan strategik
            dan masyarakat untuk bersama-sama meraikan perjalanan 25 tahun ini.
          </p>
        </div>
        <div className="anniversary-mark" aria-hidden="true">
          <img src={ASSETS.anniversaryLogo} alt="" />
        </div>
      </div>
    </section>
  )
}

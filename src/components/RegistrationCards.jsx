import { ASSETS } from '../data/event'
import { ArrowRight, Bike, Calendar, Check, Run, Shirt } from './Icons'
import { EVENT } from '../data/event'

const Bullet = ({ children }) => <li><Check size={18} /> <span>{children}</span></li>

function ProductImage({ src, alt }) {
  return <img loading="lazy" src={src} alt={alt} />
}

export function FunRunCard({ onSelect }) {
  return (
    <article className="registration-card funrun-card" id="fun-run">
      <div className="card-heading">
        <span className="card-icon"><Run /></span>
        <div><h3>Amal Fun Run 2026</h3><p className="price"><strong>RM50</strong> / peserta</p></div>
      </div>
      <p className="card-highlight">Termasuk Baju Amal Fun Run</p>
      <div className="product-pair">
        <ProductImage src={ASSETS.funRunLong} alt="Design rasmi baju Amal Fun Run lengan panjang" />
        <ProductImage src={ASSETS.funRunShort} alt="Design rasmi baju Amal Fun Run lengan pendek" />
      </div>
      <ul className="feature-list">
        <Bullet>Penyertaan Fun Run</Bullet>
        <Bullet>Baju rasmi peserta</Bullet>
        <Bullet>Pilihan saiz semasa pendaftaran</Bullet>
        <Bullet>Penyertaan Karnival Jubli Perak</Bullet>
      </ul>
      <button className="button button-gold card-button" type="button" onClick={() => onSelect('funrun')}>
        Daftar Fun Run — RM50 <ArrowRight size={20} />
      </button>
    </article>
  )
}

export function RiderCard({ onSelect }) {
  return (
    <article className="registration-card rider-card" id="amal-rider">
      <div className="card-heading">
        <span className="card-icon"><Bike /></span>
        <div><h3>Amal Rider 2026</h3><p className="price"><strong>RM50</strong> / peserta</p></div>
      </div>
      <p className="card-highlight silver">Termasuk Baju Amal Rider</p>
      <figure className="rider-visual">
        <img loading="lazy" src={ASSETS.riderConvoy} alt="Visual draf konvoi Amal Rider memakai design baju cadangan" />
        <figcaption>Draf visual untuk semakan</figcaption>
      </figure>
      <img className="rider-shirt" loading="lazy" src={ASSETS.riderShirt} alt="Draf design baju Amal Rider 2026 pandangan depan dan belakang" />
      <ul className="feature-list">
        <Bullet>Penyertaan Amal Rider</Bullet>
        <Bullet>Draf baju sedang disemak</Bullet>
        <Bullet>Pilihan saiz baju</Bullet>
      </ul>
      <button className="button button-silver card-button" type="button" onClick={() => onSelect('rider')}>
        Daftar Amal Rider — RM50 <ArrowRight size={20} />
      </button>
    </article>
  )
}

export function JubileeShirtCard({ onSelect }) {
  return (
    <article className="registration-card shirt-card" id="baju-jubli">
      <div className="card-heading">
        <span className="card-icon"><Shirt /></span>
        <div><h3>Baju Rasmi Jubli Perak 25 Tahun</h3></div>
      </div>
      <p>Miliki koleksi rasmi Jubli Perak Yayasan Amal Malaysia.</p>
      <p className="card-highlight light">Keluaran khas • Tempahan berasingan</p>
      <div className="product-pair jubilee-products">
        <ProductImage src={ASSETS.jubileeLong} alt="Design rasmi baju Jubli Perak lengan panjang" />
        <ProductImage src={ASSETS.jubileePolo} alt="Design rasmi baju Jubli Perak jenis polo" />
      </div>
      <dl className="product-fields">
        <div><dt>Jenis</dt><dd>Akan disahkan</dd></div>
        <div><dt>Harga</dt><dd>Akan disahkan</dd></div>
        <div><dt>Saiz & kuantiti</dt><dd>Dalam borang tempahan</dd></div>
      </dl>
      <button className="button button-gold card-button" type="button" onClick={() => onSelect('shirt')}>
        Tempah Baju Jubli Perak <ArrowRight size={20} />
      </button>
    </article>
  )
}

export default function RegistrationCards({ onSelect }) {
  return (
    <section className="section registration-section" id="pendaftaran">
      <div className="shell">
        <div className="section-heading registration-heading">
          <h2>Pilih Penyertaan Anda</h2>
          <p>Sertai kemeriahan Karnival Jubli Perak Yayasan Amal Malaysia.</p>
        </div>
        <div className="registration-deadline" role="note">
          <Calendar size={22} />
          <span>Tarikh tutup pendaftaran</span>
          <strong>{EVENT.registrationCloseLabel}</strong>
        </div>
        <figure className="funrun-route-panel" id="laluan-fun-run">
          <a href={ASSETS.funRunRoute} target="_blank" rel="noreferrer" aria-label="Buka peta laluan Amal Fun Run dalam saiz penuh">
            <img
              loading="lazy"
              src={ASSETS.funRunRoute}
              alt="Peta 3D draf laluan Amal Fun Run, anggaran 5 kilometer, bermula dan tamat di HQ Yayasan Amal Malaysia"
            />
          </a>
          <figcaption>
            <div>
              <span className="route-kicker">Laluan Fun Run</span>
              <strong>Anggaran 5 KM</strong>
            </div>
            <p>Start dan finish di HQ Yayasan Amal Malaysia. Tekan peta untuk paparan penuh.</p>
            <span className="route-draft-note">Laluan tertakluk kepada pengesahan akhir penganjur.</span>
          </figcaption>
        </figure>
        <div className="registration-grid">
          <FunRunCard onSelect={onSelect} />
          <RiderCard onSelect={onSelect} />
          <JubileeShirtCard onSelect={onSelect} />
        </div>
        <p className="product-distinction" aria-label="Ketiga-tiga baju ialah design yang berasingan">
          <span>Baju Fun Run</span><strong>≠</strong><span>Baju Amal Rider</span><strong>≠</strong><span>Baju Jubli Perak</span>
        </p>
      </div>
    </section>
  )
}

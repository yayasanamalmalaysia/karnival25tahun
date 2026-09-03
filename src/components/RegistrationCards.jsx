import { ASSETS } from '../data/event'
import { ArrowRight, Calendar, Check, Run, Shirt } from './Icons'
import { EVENT } from '../data/event'

const Bullet = ({ children }) => <li><Check size={18} /> <span>{children}</span></li>

function ProductImage({ src, alt }) {
  return <img loading="lazy" src={src} alt={alt} />
}

export function FunRunCard({ onSelect }) {
  return (
    <article className="registration-card promo-card funrun-card" id="fun-run">
      <span className="promo-sticker sticker-popular">Paling Popular</span>
      <div className="card-heading">
        <span className="card-icon"><Run /></span>
        <div>
          <span className="card-kicker">Lari • Ceria • Beramal</span>
          <h3>Amal Fun Run 2026</h3>
        </div>
      </div>
      <div className="card-price-row">
        <p className="price"><strong>RM50</strong><span>/ pendaftaran</span></p>
        <span className="card-highlight">Baju • Sarapan • Sijil</span>
      </div>
      <div className="product-stage">
        <div className="product-pair">
          <ProductImage src={ASSETS.funRunLong} alt="Design rasmi baju Amal Fun Run lengan panjang" />
          <ProductImage src={ASSETS.funRunShort} alt="Design rasmi baju Amal Fun Run lengan pendek" />
        </div>
        <span className="product-splash" aria-hidden="true" />
      </div>
      <figure className="wearing-mockup">
        <img loading="lazy" src={ASSETS.funRunPeople} alt="Mockup lelaki dan wanita bertudung memakai design final baju Amal Fun Run" />
        <figcaption>Mockup pemakaian • Design baju final</figcaption>
      </figure>
      <ul className="feature-list package-list" aria-label="Pakej pendaftaran Amal Fun Run">
        <Bullet>Pendaftaran Amal Fun Run</Bullet>
        <Bullet>Baju rasmi peserta</Bullet>
        <Bullet>Set sarapan</Bullet>
        <Bullet>Sijil penyertaan</Bullet>
      </ul>
      <button className="button button-coral card-button" type="button" onClick={() => onSelect('funrun')}>
        Daftar Fun Run — RM50 <ArrowRight size={20} />
      </button>
    </article>
  )
}

export function JubileeShirtCard({ onSelect }) {
  return (
    <article className="registration-card promo-card shirt-card" id="baju-jubli">
      <span className="promo-sticker sticker-collectible">Koleksi Rasmi 25 Tahun</span>
      <div className="card-heading">
        <span className="card-icon"><Shirt /></span>
        <div>
          <span className="card-kicker">Eksklusif • Premium • Kenangan</span>
          <h3>Baju Rasmi Jubli Perak 25 Tahun</h3>
        </div>
      </div>
      <div className="card-price-row merchandise-row">
        <p className="merch-copy">Miliki koleksi rasmi sambutan Jubli Perak Yayasan Amal Malaysia.</p>
        <span className="card-highlight">Tempahan Berasingan</span>
      </div>
      <div className="product-stage merchandise-stage">
        <div className="product-pair jubilee-products">
          <ProductImage src={ASSETS.jubileeLong} alt="Design rasmi baju Jubli Perak lengan panjang" />
          <ProductImage src={ASSETS.jubileePolo} alt="Design rasmi baju Jubli Perak jenis polo" />
        </div>
      </div>
      <figure className="wearing-mockup wearing-mockup-jubilee">
        <img loading="lazy" src={ASSETS.jubileePeople} alt="Mockup lelaki dan wanita bertudung memakai design final baju rasmi Jubli Perak" />
        <figcaption>Mockup pemakaian • Koleksi rasmi 25 Tahun</figcaption>
      </figure>
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
          <span className="section-kicker">Sertai Acara Paling Meriah Tahun Ini</span>
          <h2>Pilih Penyertaan Anda</h2>
          <p>Jom jadi sebahagian daripada sejarah 25 tahun AMAL.</p>
        </div>
        <div className="registration-deadline" role="note">
          <Calendar size={22} />
          <span>Tarikh tutup pendaftaran</span>
          <strong>{EVENT.registrationCloseLabel}</strong>
        </div>
        <div className="registration-grid">
          <FunRunCard onSelect={onSelect} />
          <JubileeShirtCard onSelect={onSelect} />
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
        <p className="product-distinction" aria-label="Kedua-dua baju ialah design yang berasingan">
          <span>Baju Fun Run</span><strong>≠</strong><span>Baju Jubli Perak</span>
        </p>
      </div>
    </section>
  )
}

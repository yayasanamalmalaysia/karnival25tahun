import { useEffect, useState } from 'react'
import { ASSETS, EVENT } from '../data/event'
import { ArrowRight, Calendar, Check, Run, Shirt } from './Icons'

const Bullet = ({ children }) => <li><Check size={18} /> <span>{children}</span></li>

function ProductImage({ src, alt, onOpen }) {
  return (
    <button className="product-image-button" type="button" onClick={() => onOpen({ src, alt })} aria-label={`Besarkan gambar: ${alt}`}>
      <img loading="lazy" src={src} alt={alt} />
      <span>Besarkan</span>
    </button>
  )
}

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [image, onClose])

  if (!image) return null

  return (
    <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="Paparan gambar saiz penuh" onClick={onClose}>
      <div className="image-lightbox-content" onClick={(event) => event.stopPropagation()}>
        <button className="image-lightbox-close" type="button" onClick={onClose} aria-label="Tutup paparan gambar">×</button>
        <img src={image.src} alt={image.alt} />
        <p>Tekan di luar gambar atau butang tutup untuk kembali.</p>
      </div>
    </div>
  )
}

function CatalogueImage({ src, alt, onOpen }) {
  return (
    <button className="catalogue-preview" type="button" onClick={() => onOpen({ src, alt })} aria-label={`Besarkan gambar: ${alt}`}>
      <img loading="lazy" src={src} alt={alt} />
      <span className="image-zoom-hint">Tekan untuk besarkan</span>
    </button>
  )
}

function SizeChart({ src, alt, title, variant, onOpen }) {
  return (
    <figure className={`size-chart size-chart-${variant}`}>
      <CatalogueImage src={src} alt={alt} onOpen={onOpen} />
      <figcaption><strong>{title}</strong><span>Tekan gambar untuk lihat lebih jelas</span></figcaption>
    </figure>
  )
}

const SHIRT_DETAILS = [
  ['Material', 'Sublimation Diamond'],
  ['Ketebalan', '180gsm'],
  ['Harga', 'RM30'],
  ['Saiz & kuantiti', 'Dalam borang tempahan'],
]

const FUN_RUN_DETAILS = [
  ['Material', 'Sublimation Diamond'],
  ['Ketebalan', '180gsm'],
  ['Pendaftaran', 'RM50'],
  ['Saiz & kuantiti', 'Dalam borang pendaftaran'],
]

function ProductDetails({ details = SHIRT_DETAILS }) {
  return (
    <dl className="product-fields" aria-label="Maklumat baju">
      {details.map(([label, value]) => (
        <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
      ))}
    </dl>
  )
}

export function FunRunCard({ onSelect, onOpenImage }) {
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
        <span className="card-highlight">Baju • Medal</span>
      </div>
      <div className="product-stage">
        <div className="product-pair">
          <ProductImage src={ASSETS.funRunShort} alt="Katalog reka bentuk baju Amal Fun Run lengan pendek, paparan depan dan belakang" onOpen={onOpenImage} />
          <ProductImage src={ASSETS.funRunLong} alt="Katalog reka bentuk baju Amal Fun Run lengan panjang, paparan depan dan belakang" onOpen={onOpenImage} />
        </div>
        <span className="product-splash" aria-hidden="true" />
      </div>
      <figure className="wearing-mockup funrun-catalogue">
        <CatalogueImage src={ASSETS.funRunMuslimah} alt="Katalog reka bentuk baju muslimah Amal Fun Run, paparan depan dan belakang" onOpen={onOpenImage} />
        <figcaption>Baju muslimah • Paparan depan & belakang</figcaption>
      </figure>
      <div className="product-pair kids-product-pair">
        <ProductImage src={ASSETS.funRunKidsBoy} alt="Katalog baju kanak-kanak lelaki Amal Fun Run, paparan depan dan belakang" onOpen={onOpenImage} />
        <ProductImage src={ASSETS.funRunKidsMuslimah} alt="Katalog baju kanak-kanak muslimah Amal Fun Run, paparan depan dan belakang" onOpen={onOpenImage} />
      </div>
      <SizeChart
        src={ASSETS.sizeTshirtPolo}
        alt="Carta saiz baju T-shirt dan polo dewasa serta kanak-kanak dalam ukuran inci"
        title="Carta Saiz T-shirt & Polo"
        variant="funrun"
        onOpen={onOpenImage}
      />
      <SizeChart
        src={ASSETS.sizeLongSleeve}
        alt="Carta saiz baju lengan panjang dewasa dalam ukuran inci"
        title="Carta Saiz Lengan Panjang"
        variant="funrun"
        onOpen={onOpenImage}
      />
      <SizeChart
        src={ASSETS.sizeMuslimah}
        alt="Carta saiz baju muslimah dewasa dan kanak-kanak dalam ukuran inci"
        title="Carta Saiz Muslimah Dewasa & Kanak-kanak"
        variant="funrun"
        onOpen={onOpenImage}
      />
      <ProductDetails details={FUN_RUN_DETAILS} />
      <ul className="feature-list package-list" aria-label="Pakej pendaftaran Amal Fun Run">
        <Bullet>Pendaftaran Amal Fun Run</Bullet>
        <Bullet>Baju rasmi peserta</Bullet>
        <Bullet>Medal</Bullet>
      </ul>
      <button className="button button-coral card-button" type="button" onClick={() => onSelect('funrun')}>
        Daftar Fun Run — RM50 <ArrowRight size={20} />
      </button>
    </article>
  )
}

export function JubileeShirtCard({ onSelect, onOpenImage }) {
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
          <ProductImage src={ASSETS.jubileePolo} alt="Katalog reka bentuk baju Jubli Perak polo lengan pendek, paparan depan dan belakang" onOpen={onOpenImage} />
          <ProductImage src={ASSETS.jubileeLong} alt="Katalog reka bentuk baju Jubli Perak polo lengan panjang, paparan depan dan belakang" onOpen={onOpenImage} />
        </div>
      </div>
      <figure className="wearing-mockup wearing-mockup-jubilee jubilee-catalogue">
        <CatalogueImage src={ASSETS.jubileeMuslimah} alt="Katalog reka bentuk baju Jubli Perak muslimah A-cut, paparan depan dan belakang" onOpen={onOpenImage} />
        <figcaption>Baju muslimah A-cut • Paparan depan & belakang</figcaption>
      </figure>
      <div className="product-pair kids-product-pair">
        <ProductImage src={ASSETS.funRunKidsBoy} alt="Katalog baju kanak-kanak lelaki, paparan depan dan belakang" onOpen={onOpenImage} />
        <ProductImage src={ASSETS.funRunKidsMuslimah} alt="Katalog baju kanak-kanak muslimah, paparan depan dan belakang" onOpen={onOpenImage} />
      </div>
      <SizeChart
        src={ASSETS.sizeTshirtPolo}
        alt="Carta saiz baju T-shirt dan polo dewasa serta kanak-kanak dalam ukuran inci"
        title="Carta Saiz T-shirt & Polo"
        variant="jubilee"
        onOpen={onOpenImage}
      />
      <SizeChart
        src={ASSETS.sizeLongSleeve}
        alt="Carta saiz baju lengan panjang dewasa dalam ukuran inci"
        title="Carta Saiz Lengan Panjang"
        variant="jubilee"
        onOpen={onOpenImage}
      />
      <SizeChart
        src={ASSETS.sizeMuslimah}
        alt="Carta saiz baju muslimah dewasa dan kanak-kanak dalam ukuran inci"
        title="Carta Saiz Muslimah Dewasa & Kanak-kanak"
        variant="jubilee"
        onOpen={onOpenImage}
      />
      <ProductDetails />
      <button className="button button-gold card-button" type="button" onClick={() => onSelect('shirt')}>
        Tempah Baju Jubli Perak <ArrowRight size={20} />
      </button>
    </article>
  )
}

export default function RegistrationCards({ onSelect }) {
  const [activeImage, setActiveImage] = useState(null)

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
          <span>Tarikh tutup 1st batch tempahan baju</span>
          <strong>{EVENT.shirtFirstBatchCloseLabel}</strong>
        </div>
        <div className="registration-grid">
          <FunRunCard onSelect={onSelect} onOpenImage={setActiveImage} />
          <JubileeShirtCard onSelect={onSelect} onOpenImage={setActiveImage} />
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
      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  )
}

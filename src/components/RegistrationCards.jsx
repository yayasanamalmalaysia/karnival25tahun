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

const JUBILEE_SHIRT_DETAILS = [
  ['Material', 'Sublimation Diamond'],
  ['Ketebalan', '180gsm'],
  ['Harga', 'RM30'],
  ['Saiz & kuantiti', 'Dalam borang tempahan'],
]

function ProductDetails({ details }) {
  return (
    <dl className="product-fields" aria-label="Maklumat baju">
      {details.map(([label, value]) => (
        <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
      ))}
    </dl>
  )
}

const FUN_RUN_PACKAGES = [
  {
    name: 'Larian Sahaja', price: 'RM15', label: 'PALING JIMAT', className: 'run-only',
    features: ['Penyertaan larian 3KM atau 5KM', 'Nombor bib', 'Medal finisher', 'Minuman ringan'],
    note: 'Tidak termasuk baju',
  },
  {
    name: 'Larian + Baju Dewasa', price: 'RM50', label: 'PAKEJ LENGKAP', className: 'adult-shirt',
    features: ['Penyertaan larian 3KM atau 5KM', 'Baju rasmi Amal Fun Run', 'Pilihan Muslimin lengan pendek / panjang dan Muslimah', 'Saiz dewasa XS hingga 6XL', 'Nombor bib, medal finisher dan minuman ringan'],
  },
  {
    name: 'Larian + Baju Kanak-kanak', price: 'RM45', label: 'KIDS FUN RUN', className: 'kids-shirt',
    features: ['Penyertaan larian 3KM atau 5KM', 'Baju rasmi kanak-kanak', 'Pilihan lelaki dan perempuan', 'Saiz 24, 26, 28, 30, 32 dan 34', 'Nombor bib, medal finisher dan minuman ringan'],
  },
]

const FUN_RUN_DETAILS = [
  ['Yuran pendaftaran', 'RM15 / RM50 / RM45 mengikut pakej'],
  ['Termasuk', 'Larian, nombor bib, medal & minuman ringan'],
  ['Material baju', 'Sublimation Diamond'],
  ['Ketebalan baju', '180gsm'],
  ['Saiz baju', 'Dalam borang pendaftaran bagi pakej berbaju'],
]

function FunRunOffers({ onSelect, onOpenImage }) {
  return (
    <div id="fun-run">
      <div className="funrun-offer">
        <div className="funrun-offer-copy">
          <h2>AMAL FUN RUN 2026</h2>
          <p className="funrun-offer-pretitle">PENDAFTARAN SERENDAH</p>
          <p className="funrun-offer-price">RM15 SAHAJA!</p>
          <p className="funrun-offer-description">Jom sertai Amal Fun Run 2026 bersama keluarga dan rakan-rakan! Pilih larian santai 3KM atau 5KM dan nikmati kemeriahan Karnival 25 Tahun Yayasan Amal Malaysia.</p>
          <div className="funrun-offer-actions">
            <button className="button button-coral" type="button" onClick={() => onSelect('funrun')}>DAFTAR SEKARANG SERENDAH RM15 <ArrowRight size={20} /></button>
            <a className="button funrun-gallery-link" href="#pilihan-baju">LIHAT PILIHAN BAJU <ArrowRight size={20} /></a>
          </div>
        </div>
        <div className="funrun-offer-facts" aria-label="Maklumat larian">
          <div><Calendar size={20} /><span>Tarikh Tutup Pendaftaran</span><strong>{EVENT.registrationCloseLabel}</strong></div>
          <div><Calendar size={20} /><span>Tarikh Larian</span><strong>{EVENT.dateLabel}</strong></div>
          <div><Run size={20} /><span>Lokasi</span><strong>Kompleks Yayasan Amal Malaysia, Kg Labohan Dagang, Banting, Selangor</strong></div>
        </div>
      </div>

      <div className="funrun-packages" aria-label="Pilihan pakej Amal Fun Run 2026">
        {FUN_RUN_PACKAGES.map((item) => (
          <article className={`funrun-package ${item.className}`} key={item.name}>
            <span className="funrun-package-label">{item.label}</span>
            <h3>{item.name}</h3>
            <p className="funrun-package-price"><strong>{item.price}</strong><span>/ peserta</span></p>
            <ul className="feature-list" aria-label={`Kandungan pakej ${item.name}`}>
              {item.features.map((feature) => <Bullet key={feature}>{feature}</Bullet>)}
            </ul>
            {item.note && <p className="funrun-package-note">{item.note}</p>}
            <button type="button" onClick={() => onSelect('funrun')}>Pilih dalam borang BCL <ArrowRight size={18} /></button>
          </article>
        ))}
      </div>
      <p className="funrun-package-clarifier">Pilihan pakej, kategori larian dan saiz baju dibuat dalam borang pendaftaran BCL di bawah.</p>

      <section className="funrun-gallery" id="pilihan-baju" aria-labelledby="funrun-gallery-title">
        <div className="funrun-gallery-heading">
          <div><span className="section-kicker">Katalog Rasmi</span><h3 id="funrun-gallery-title">Pilihan Baju Amal Fun Run</h3></div>
          <p>Baju disertakan dalam pakej dewasa dan kanak-kanak. Tekan gambar untuk paparan lebih besar.</p>
        </div>
        <div className="registration-card promo-card funrun-card funrun-catalogue-card">
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
          <div className="product-stage merchandise-stage">
            <div className="product-pair">
              <ProductImage src={ASSETS.funRunKidsShort} alt="Katalog terkini baju Amal Fun Run kanak-kanak lengan pendek, paparan depan dan belakang" onOpen={onOpenImage} />
              <ProductImage src={ASSETS.funRunKidsMuslimah} alt="Katalog terkini baju Amal Fun Run kanak-kanak muslimah lengan panjang, paparan depan dan belakang" onOpen={onOpenImage} />
            </div>
          </div>
          <SizeChart src={ASSETS.sizeChartTshirtPolo} alt="Carta saiz terkini baju T-shirt dan polo untuk dewasa serta kanak-kanak" title="Carta Saiz T-shirt & Polo" variant="funrun" onOpen={onOpenImage} />
          <SizeChart src={ASSETS.sizeChartLongSleeve} alt="Carta saiz terkini baju lengan panjang untuk dewasa" title="Carta Saiz Lengan Panjang" variant="funrun" onOpen={onOpenImage} />
          <SizeChart src={ASSETS.sizeChartMuslimah} alt="Carta saiz terkini baju muslimah untuk dewasa dan kanak-kanak" title="Carta Saiz Muslimah Dewasa & Kanak-kanak" variant="funrun" onOpen={onOpenImage} />
          <ProductDetails details={FUN_RUN_DETAILS} />
          <button className="button button-coral card-button" type="button" onClick={() => onSelect('funrun')}>Pilih pakej pendaftaran <ArrowRight size={20} /></button>
        </div>
      </section>
    </div>
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
        <CatalogueImage src={ASSETS.jubileeLongRoundneck} alt="Katalog reka bentuk baju Jubli Perak long sleeve roundneck, paparan depan dan belakang" onOpen={onOpenImage} />
        <figcaption>Baju long sleeve roundneck • Paparan depan & belakang</figcaption>
      </figure>
      <figure className="wearing-mockup wearing-mockup-jubilee jubilee-catalogue">
        <CatalogueImage src={ASSETS.jubileeMuslimah} alt="Katalog reka bentuk baju Jubli Perak muslimah A-cut, paparan depan dan belakang" onOpen={onOpenImage} />
        <figcaption>Baju muslimah A-cut • Paparan depan & belakang</figcaption>
      </figure>
      <div className="product-stage merchandise-stage">
        <div className="product-pair">
          <ProductImage src={ASSETS.jubileeKidsPolo} alt="Katalog terkini baju Jubli Perak kanak-kanak polo, paparan depan dan belakang" onOpen={onOpenImage} />
          <ProductImage src={ASSETS.jubileeKidsMuslimah} alt="Katalog terkini baju Jubli Perak kanak-kanak muslimah, paparan depan dan belakang" onOpen={onOpenImage} />
        </div>
      </div>
      <SizeChart
        src={ASSETS.sizeChartTshirtPolo}
        alt="Carta saiz terkini baju T-shirt dan polo untuk dewasa serta kanak-kanak"
        title="Carta Saiz T-shirt & Polo"
        variant="jubilee"
        onOpen={onOpenImage}
      />
      <SizeChart
        src={ASSETS.sizeChartLongSleeve}
        alt="Carta saiz terkini baju lengan panjang untuk dewasa"
        title="Carta Saiz Lengan Panjang"
        variant="jubilee"
        onOpen={onOpenImage}
      />
      <SizeChart
        src={ASSETS.sizeChartMuslimah}
        alt="Carta saiz terkini baju muslimah untuk dewasa dan kanak-kanak"
        title="Carta Saiz Muslimah Dewasa & Kanak-kanak"
        variant="jubilee"
        onOpen={onOpenImage}
      />
      <ProductDetails details={JUBILEE_SHIRT_DETAILS} />
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
        <FunRunOffers onSelect={onSelect} onOpenImage={setActiveImage} />
        <figure className="funrun-route-panel" id="laluan-fun-run">
          <a href={ASSETS.funRunRoute} target="_blank" rel="noreferrer" aria-label="Buka peta laluan Amal Fun Run dalam saiz penuh">
            <img
              loading="lazy"
              src={ASSETS.funRunRoute}
              alt="Peta laluan Amal Fun Run dengan dua kategori: 3 kilometer dan 5 kilometer, bermula dan tamat di HQ Yayasan Amal Malaysia"
            />
          </a>
          <figcaption>
            <div>
              <span className="route-kicker">Laluan Fun Run</span>
              <strong>2 Kategori: 3 KM &amp; 5 KM</strong>
            </div>
            <p>Pilih laluan 3 KM atau 5 KM. Start dan finish di HQ Yayasan Amal Malaysia. Tekan peta untuk paparan penuh.</p>
            <span className="route-draft-note">Laluan tertakluk kepada pengesahan akhir penganjur.</span>
          </figcaption>
        </figure>
      </div>
      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  )
}

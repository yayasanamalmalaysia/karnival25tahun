import { ASSETS, EVENT } from '../data/event'
import { Calendar, MapPin } from './Icons'

const footerLinks = [
  'Tentang Program',
  'Aktiviti',
  { label: 'Tempahan Baju Jubli Perak', href: './baju-jubli-perak/' },
  { label: 'Pre-order Baju Fun Run Sahaja', href: './pre-order-baju-fun-run/' },
  { label: 'Pertanyaan Fun Run', href: 'https://wa.me/60176788930' },
  { label: 'Pertanyaan Vendor', href: 'https://wa.me/601135826720' },
  'Polisi Privasi',
  'Terma & Syarat',
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src={ASSETS.anniversaryLogo} alt="Logo 25 Tahun Yayasan Amal Malaysia" />
          <h2>Yayasan Amal Malaysia</h2>
          <p>Karnival Labohan Dagang @25 tahun</p>
          <p><Calendar size={18} /> {EVENT.dateLabel}</p>
          <p><MapPin size={18} /> Kg. Labohan Dagang, Selangor</p>
        </div>
        <nav className="footer-nav" aria-label="Pautan footer">
          {footerLinks.map((link) => typeof link === 'string'
            ? <span key={link}>{link}</span>
            : <a key={link.label} href={link.href}>{link.label}</a>)}
          <small>Tempahan Baju Jubli Perak dan pre-order Baju Fun Run sahaja disediakan melalui halaman berasingan.</small>
        </nav>
      </div>
      <div className="footer-swoop" aria-hidden="true" />
    </footer>
  )
}

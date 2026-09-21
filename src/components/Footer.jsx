import { ASSETS, EVENT } from '../data/event'
import { Calendar, MapPin } from './Icons'

const footerLinks = [
  'Tentang Program',
  'Aktiviti',
  { label: 'Tempahan Baju Jubli Perak', href: './baju-jubli-perak/' },
  { label: 'Hubungi Kami', href: 'https://wa.me/601135826720' },
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
          <small>Pautan tempahan Baju Jubli Perak disediakan secara berasingan.</small>
        </nav>
      </div>
      <div className="footer-swoop" aria-hidden="true" />
    </footer>
  )
}

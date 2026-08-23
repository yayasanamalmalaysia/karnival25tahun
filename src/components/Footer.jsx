import { ASSETS } from '../data/event'
import { Calendar, MapPin } from './Icons'

const footerLinks = ['Tentang Program', 'Aktiviti', 'Pendaftaran', 'Hubungi Kami', 'Polisi Privasi', 'Terma & Syarat']

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src={ASSETS.anniversaryLogo} alt="Logo 25 Tahun Yayasan Amal Malaysia" />
          <h2>Yayasan Amal Malaysia</h2>
          <p>Karnival Jubli Perak 25 Tahun</p>
          <p><Calendar size={18} /> 3 Oktober 2026</p>
          <p><MapPin size={18} /> Kg. Labohan Dagang, Selangor</p>
        </div>
        <nav className="footer-nav" aria-label="Pautan footer">
          {footerLinks.map((link) => <span key={link}>{link}</span>)}
          <small>Pautan rasmi akan disambungkan selepas URL disahkan.</small>
        </nav>
      </div>
      <div className="footer-swoop" aria-hidden="true" />
    </footer>
  )
}

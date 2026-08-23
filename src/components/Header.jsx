import { useState } from 'react'
import { ASSETS } from '../data/event'
import { ArrowRight, Close, Menu } from './Icons'

const items = [
  ['Utama', '#utama'],
  ['Aktiviti', '#aktiviti'],
  ['Fun Run', 'funrun'],
  ['Amal Rider', 'rider'],
  ['Baju Jubli Perak', 'shirt'],
  ['Lokasi', '#lokasi'],
  ['FAQ', '#faq'],
]

export default function Header({ onRegister }) {
  const [open, setOpen] = useState(false)

  const handle = (target) => {
    setOpen(false)
    if (target.startsWith('#')) {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    onRegister(target)
  }

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#utama" aria-label="Yayasan Amal Malaysia — kembali ke utama">
          <img src={ASSETS.logo} alt="Logo rasmi Yayasan Amal Malaysia" />
          <span>Yayasan Amal<br />Malaysia</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Tutup menu' : 'Buka menu'}</span>
          {open ? <Close /> : <Menu />}
        </button>

        <nav id="main-navigation" className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navigasi utama">
          {items.map(([label, target]) => (
            <button key={label} type="button" onClick={() => handle(target)}>{label}</button>
          ))}
        </nav>

        <button className="button button-gold header-cta" type="button" onClick={() => onRegister('selector')}>
          Daftar Sekarang <ArrowRight size={19} />
        </button>
      </div>
    </header>
  )
}

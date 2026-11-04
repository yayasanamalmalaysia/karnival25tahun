import { useState } from 'react'
import { ASSETS, EVENT } from '../data/event'
import {
  AntiqueCar,
  ArrowRight,
  Bike,
  BookOpen,
  Booth,
  Calendar,
  Community,
  Family,
  Food,
  HeartPulse,
  Music,
  Run,
  Stage,
  Target,
  Ticket,
} from './Icons'
import { Bunting, ConfettiField } from './FestiveDecor'

const PROGRAM = [
  ['7.00 pagi', 'Amal Fun Run', Run],
  ['10.00 pagi', 'Bual Bicara Wanita', Community],
  ['11.00 pagi', 'Kuliah Dhuha bersama Datuk Dr. Zulkifli Mohamad Albakri', BookOpen, 'speaker'],
  ['12.00 tengah hari', 'Bicara Afghanistan bersama Syed Azwan Syed Ali', Community, 'speaker-syed'],
  ['12.00 tengah hari – 5.00 petang', 'Kenduri Rakyat', Food],
  ['2.00 petang', 'Ketibaan Konvoi Kereta Mewah', AntiqueCar],
  ['2.30 petang', 'Majlis Perasmian', Stage],
  ['4.00 petang', 'Ketibaan Konvoi Amal Rider — Memperingati 3 Tahun Genosida dan Taufan', Bike, 'speaker-nadir', 'Muhammad Nadir Al-Nuri bin Kamaruzaman'],
  ['5.00 petang', 'Meet & Greet bersama Zainal Rashid Ahmad (ZRA)', Family, 'speaker-zra'],
  ['6.30 petang', 'Selawat Busking bersama Soutul Amal', Music],
  ['8.30 malam', 'Bicara Kemanusiaan', Community],
]

const ALL_DAY = [
  {
    title: 'Aktiviti Indoor',
    Icon: Community,
    tone: 'rose',
    items: ['Mewarna kanak-kanak (10.00 pagi)', 'Masak lauk kerabu (11.30 pagi)', 'Gubahan sejadah (11.30 pagi)'],
  },
  { title: 'Happy Hour Kolam Pancing', Icon: Target, tone: 'blue', items: ['Aktiviti santai untuk kaki pancing'] },
  { title: 'Pameran & Gerai Makanan', Icon: Food, tone: 'coral', items: ['Pameran aktiviti, jualan dan aneka hidangan'] },
  { title: 'Aktiviti Outdoor', Icon: Bike, tone: 'green', items: ['Memanah', 'ATV Riding', 'Belon Supa Dupa'] },
  { title: 'Saringan Kesihatan', Icon: HeartPulse, tone: 'pink', items: ['Rawatan kesihatan PEKA B40', 'Perubatan Islam', 'Kaunter Derma Darah'] },
]

export default function ProgramSchedule() {
  const [activeProgram, setActiveProgram] = useState(null)

  const toggleProgram = (index) => {
    setActiveProgram((current) => (current === index ? null : index))
  }

  return (
    <section className="section program-section" id="tentatif" aria-labelledby="program-title">
      <Bunting className="program-bunting" />
      <ConfettiField className="program-confetti" />
      <div className="shell program-shell">
        <header className="program-hero">
          <div className="program-heading">
            <span className="section-kicker">Tentatif Program</span>
            <h2 id="program-title">Sehari Penuh <em>Kemeriahan</em></h2>
            <p>Pelbagai pengisian menarik menanti dari pagi hingga malam. Datang bersama keluarga dan sahabat—setiap detik ada sesuatu untuk dinikmati.</p>
          </div>
          <img src={ASSETS.festivalLandscape} alt="Suasana meriah Karnival Labohan Dagang bersama keluarga, gerai, pameran dan pentas" loading="lazy" />
        </header>

        <div className="program-grid">
          <article className="schedule-board" aria-labelledby="schedule-board-title">
            <div className="schedule-board-heading">
              <span className="schedule-heading-icon"><Calendar size={26} /></span>
              <div><h3 id="schedule-board-title">Program Utama</h3><p>Tekan mana-mana program untuk hidupkan kemeriahan!</p></div>
            </div>
            <ol className="program-timeline">
              {PROGRAM.map(([time, title, Icon, variant, guestName], index) => {
                const portrait = variant === 'speaker'
                  ? ASSETS.dhuhaSpeaker
                  : variant === 'speaker-syed'
                    ? ASSETS.syedAzwanSpeaker
                    : variant === 'speaker-nadir'
                      ? ASSETS.nadirGuest
                      : variant === 'speaker-zra'
                        ? ASSETS.zraGuest
                        : null
                const portraitAlt = variant === 'speaker'
                  ? 'Datuk Dr. Zulkifli Mohamad Albakri'
                  : variant === 'speaker-syed'
                    ? 'Syed Azwan Syed Ali'
                    : variant === 'speaker-nadir'
                      ? 'Muhammad Nadir Al-Nuri bin Kamaruzaman'
                      : 'Zainal Rashid Ahmad atau ZRA'
                const isActive = activeProgram === index

                return (
                  <li className="program-slot-shell" key={`${time}-${title}`}>
                    <button
                      type="button"
                      className={`program-slot${variant?.startsWith('speaker') ? ' has-speaker' : ''}${isActive ? ' is-active' : ''}`}
                      aria-expanded={isActive}
                      aria-controls={`program-detail-${index}`}
                      onClick={() => toggleProgram(index)}
                    >
                      <span className="timeline-node" aria-hidden="true" />
                      <time>{time}</time>
                      {portrait ? (
                        <span className={`program-speaker-portrait${variant === 'speaker-zra' ? ' is-zra' : ''}${variant === 'speaker-syed' ? ' is-syed-azwan' : ''}${variant === 'speaker-nadir' ? ' is-nadir' : ''}`}>
                          <img src={portrait} alt={portraitAlt} loading="lazy" />
                        </span>
                      ) : (
                        <span className="program-slot-icon"><Icon size={28} /></span>
                      )}
                      <span className="program-slot-copy">
                        <strong>{title}</strong>
                        {guestName ? <span className="program-guest-name">{guestName}</span> : null}
                        <span className="program-tap-hint">{isActive ? 'Tekan semula untuk tutup' : 'Tekan untuk lihat kejutan'}</span>
                      </span>
                      <span className="program-pop-mark" aria-hidden="true">+</span>
                      <span className="program-burst" aria-hidden="true">
                        {Array.from({ length: 10 }, (_, burstIndex) => <i key={burstIndex} />)}
                      </span>
                      <span className="program-reveal" id={`program-detail-${index}`} aria-hidden={!isActive}>
                        <b>Jom meriahkan!</b>
                        <span>Jumpa anda di Karnival Labohan Dagang.</span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </article>

          <aside className="all-day-board" aria-labelledby="all-day-title">
            <div className="all-day-heading">
              <span className="schedule-heading-icon"><Booth size={26} /></span>
              <div><h3 id="all-day-title">Aktiviti Sepanjang Karnival</h3><p>Singgah, cuba dan nikmati bersama-sama.</p></div>
            </div>
            <div className="all-day-list">
              {ALL_DAY.map(({ title, Icon, tone, items }) => (
                <section className={`all-day-item tone-${tone}`} key={title}>
                  <div className="all-day-item-heading"><Icon size={25} /><h4>{title}</h4></div>
                  <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>
              ))}
            </div>
          </aside>
        </div>

        <aside className="rsvp-banner" aria-label="Pendaftaran kehadiran Karnival Labohan Dagang">
          <span className="rsvp-ticket"><Ticket size={38} /></span>
          <div className="rsvp-copy">
            <h3>Daftar Kehadiran &amp; Dapatkan Kupon</h3>
            <p>Sahkan kehadiran anda untuk membantu urusan penyelarasan karnival.</p>
          </div>
          <a className="rsvp-button" href={EVENT.rsvpUrl} target="_blank" rel="noopener noreferrer">
            <span><small>Borang RSVP Rasmi</small>hadir.amalmalaysia.org.my</span>
            <ArrowRight size={24} />
          </a>
        </aside>
      </div>
    </section>
  )
}

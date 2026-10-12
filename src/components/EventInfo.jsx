import { EVENT } from '../data/event'
import { Calendar, Info, MapPin, Stage } from './Icons'

const pending = ['Waze', 'Tentatif', 'Waktu mula', 'Parking']

export default function EventInfo() {
  return (
    <section className="section event-info-section" id="lokasi">
      <div className="shell event-info-panel">
        <h2>Maklumat Karnival</h2>
        <dl className="event-facts">
          <div><dt><Calendar /> Tarikh</dt><dd>{EVENT.dateLabel}</dd></div>
          <div><dt><MapPin /> Lokasi</dt><dd>HQ Yayasan Amal Malaysia<br />Kg. Labohan Dagang, Selangor</dd></div>
          <div><dt><Stage /> Program</dt><dd>Karnival Labohan Dagang @25 tahun<br />Yayasan Amal Malaysia</dd></div>
        </dl>
        <div className="map-link">
          <span><Info size={18} /> Google Maps</span>
          <a href={EVENT.mapUrl} target="_blank" rel="noreferrer">Buka peta <span aria-hidden="true">↗</span></a>
        </div>
        <div className="pending-info" aria-label="Maklumat yang akan dikemas kini">
          {pending.map((item) => (
            <div key={item}><span><Info size={18} /> {item}</span><strong>Akan dikemas kini</strong></div>
          ))}
          <div><span><Info size={18} /> Pertanyaan Fun Run</span><a className="event-whatsapp" href="https://wa.me/60176788930" target="_blank" rel="noreferrer">017-678 8930 <span aria-hidden="true">↗</span></a></div>
          <div><span><Info size={18} /> Pertanyaan Vendor</span><a className="event-whatsapp" href="https://wa.me/601135826720" target="_blank" rel="noreferrer">011-3582 6720 <span aria-hidden="true">↗</span></a></div>
        </div>
      </div>
    </section>
  )
}

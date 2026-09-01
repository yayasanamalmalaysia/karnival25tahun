import { Calendar, Info, MapPin, Stage } from './Icons'

const pending = ['Google Maps', 'Waze', 'Tentatif', 'Waktu mula', 'Parking', 'Pegawai untuk dihubungi']

export default function EventInfo() {
  return (
    <section className="section event-info-section" id="lokasi">
      <div className="shell event-info-panel">
        <h2>Maklumat Festival</h2>
        <dl className="event-facts">
          <div><dt><Calendar /> Tarikh</dt><dd>3 Oktober 2026</dd></div>
          <div><dt><MapPin /> Lokasi</dt><dd>HQ Yayasan Amal Malaysia<br />Kg. Labohan Dagang, Selangor</dd></div>
          <div><dt><Stage /> Program</dt><dd>Festival Labohan Dagang @25 tahun<br />Yayasan Amal Malaysia</dd></div>
        </dl>
        <div className="pending-info" aria-label="Maklumat yang akan dikemas kini">
          {pending.map((item) => (
            <div key={item}><span><Info size={18} /> {item}</span><strong>Akan dikemas kini</strong></div>
          ))}
        </div>
      </div>
    </section>
  )
}

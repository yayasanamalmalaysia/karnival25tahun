import { ACTIVITY_ICONS } from './Icons'
import { CARNIVAL_ACTIVITIES } from '../data/event'

export default function CarnivalActivities() {
  return (
    <section className="section carnival-section" id="aktiviti">
      <div className="shell">
        <div className="section-heading">
          <h2>Lebih Banyak Menanti Anda</h2>
          <p>Karnival besar untuk komuniti, keluarga dan warga AMAL.</p>
        </div>
        <div className="activity-rail" role="list" aria-label="Senarai aktiviti karnival">
          {CARNIVAL_ACTIVITIES.map(([icon, title, status], index) => {
            const ActivityIcon = ACTIVITY_ICONS[icon]
            return (
              <article className={index < 2 ? 'activity-item is-open' : 'activity-item'} role="listitem" key={title}>
                <ActivityIcon size={30} />
                <h3>{title}</h3>
                <p>{status}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

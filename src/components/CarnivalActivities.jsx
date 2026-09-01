import { ACTIVITY_ICONS } from './Icons'
import { ASSETS, CARNIVAL_ACTIVITIES } from '../data/event'
import { Bunting, ConfettiField } from './FestiveDecor'

export default function CarnivalActivities() {
  return (
    <section className="section carnival-section" id="aktiviti">
      <Bunting className="carnival-bunting" />
      <ConfettiField className="carnival-confetti" />
      <div className="shell">
        <div className="section-heading carnival-heading">
          <span className="section-kicker">Aktiviti Untuk Semua</span>
          <h2>Meriahnya Festival Labohan Dagang</h2>
          <p>Meriah, ceria dan berkeluarga—pelbagai pengalaman menanti seluruh komuniti.</p>
        </div>
        <div className="activity-rail" role="list" aria-label="Senarai aktiviti festival">
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
        <img className="carnival-landscape" loading="lazy" src={ASSETS.festivalLandscape} alt="Ilustrasi suasana festival patuh syariah dengan booth, pentas, pameran dan aktiviti keluarga" />
      </div>
      <div className="carnival-road" aria-hidden="true"><span /></div>
    </section>
  )
}

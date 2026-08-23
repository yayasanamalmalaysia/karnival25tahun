import { FAQS } from '../data/event'
import { ChevronDown } from './Icons'

export default function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="shell faq-shell">
        <div className="section-heading centered"><h2>Soalan Lazim</h2></div>
        <div className="faq-list">
          {FAQS.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>{item.question}<ChevronDown className="faq-chevron" /></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

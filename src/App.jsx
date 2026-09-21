import Header from './components/Header'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import RegistrationCards from './components/RegistrationCards'
import BCLCheckout from './components/BCLCheckout'
import CarnivalActivities from './components/CarnivalActivities'
import AnniversaryStory from './components/AnniversaryStory'
import EventInfo from './components/EventInfo'
import Organizer from './components/Organizer'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import MobileStickyCTA from './components/MobileStickyCTA'

export default function App() {
  const selectRegistration = (id = 'selector') => {
    window.requestAnimationFrame(() => {
      document.querySelector(id === 'selector' ? '#pendaftaran' : '#checkout')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Langkau ke kandungan</a>
      <Header onRegister={selectRegistration} />
      <main id="main-content">
        <Hero onRegister={selectRegistration} />
        <Countdown />
        <RegistrationCards onSelect={selectRegistration} />
        <CarnivalActivities />
        <BCLCheckout selected="funrun" onSelect={selectRegistration} registrationIds={['funrun']} />
        <AnniversaryStory />
        <EventInfo />
        <Organizer />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyCTA onSelect={selectRegistration} />
    </>
  )
}

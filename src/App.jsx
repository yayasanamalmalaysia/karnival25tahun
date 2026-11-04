import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import ProgramSchedule from './components/ProgramSchedule'
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
  const [selectedRegistration, setSelectedRegistration] = useState('funrun')

  const selectRegistration = (id = 'funrun') => {
    if (id === 'funrun' || id === 'activities') setSelectedRegistration(id)
    window.requestAnimationFrame(() => {
      document.querySelector('#checkout')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Langkau ke kandungan</a>
      <Header onRegister={selectRegistration} />
      <main id="main-content">
        <Hero onRegister={selectRegistration} />
        <Countdown />
        <ProgramSchedule />
        <RegistrationCards onSelect={selectRegistration} />
        <BCLCheckout
          selected={selectedRegistration}
          onSelect={selectRegistration}
          registrationIds={['funrun', 'activities']}
        />
        <CarnivalActivities />
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

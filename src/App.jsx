import { useState } from 'react'
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
  const [selectedRegistration, setSelectedRegistration] = useState('activities')

  const selectRegistration = (id = 'selector') => {
    if (id === 'activities' || id === 'funrun') {
      setSelectedRegistration(id)
    }

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
        <BCLCheckout
          selected={selectedRegistration}
          onSelect={selectRegistration}
          registrationIds={['activities', 'funrun']}
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

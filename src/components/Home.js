'use client'
import React from 'react'
import { useLang } from '../components/LanguageContext'
import Landing from '../components/Landing'
import '../styles/Home.css'
import Stats from '../components/Stats'
import Projects from '../components/Projects'
import Cta from '../components/Cta'
import Process from '../components/Process'
import Customers from '../components/Customers'

function Home() {
  const { lang } = useLang()
  return (
    <div className="home-container">
      <div className="home-content">
        <Landing lang={lang} />
        <Stats lang={lang} />
        <Projects lang={lang} />
        <Customers lang={lang} />
        <Cta lang={lang} />
      </div>
    </div>
  )
}

export default Home
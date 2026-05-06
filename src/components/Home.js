'use client'
import React from 'react'
import Landing from '../components/Landing'
import '../styles/Home.css'
import Stats from '../components/Stats'
import Projects from '../components/Projects'
import Cta from '../components/Cta'
import Tech from '../components/Tech'
import Process from '../components/Process'
import Customers from '../components/Customers'
import Footer from '../components/Footer'




function Home({ lang }) {
  return (
    <div className="home-container">
      <div className="home-content">
        <Landing lang={lang} />
        <Stats lang={lang}/>
        <Projects lang={lang}/>
        <Customers lang={lang}/>
        <Cta lang={lang}/>
        <Footer lang={lang}/>

      </div>
    </div>
  )
}

export default Home
'use client'
import React from 'react'
import Landing from '../components/Landing'
import '../styles/Home.css'
import Stats from '../components/Stats'
import Projects from '../components/Projects'
import Cta from '../components/Cta'
import Tech from '../components/Tech'



function Home({ lang }) {
  return (
    <div className="home-container">
      <div className="home-content">
        <Landing lang={lang} />
        <Stats lang={lang}/>
        <Projects lang={lang}/>

      </div>
    </div>
  )
}

export default Home
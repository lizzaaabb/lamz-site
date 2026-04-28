'use client'
import React from 'react'
import Landing from '../components/Landing'
import '../styles/Home.css'
import Stats from '../components/Stats'
import Projects from '../components/Projects'

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
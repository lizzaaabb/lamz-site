'use client'
import React from 'react'
import Landing from '../components/Landing'
import '../styles/Home.css'
import Stats from '../components/Stats'

function Home({ lang }) {
  return (
    <div className="home-container">
      <div className="home-content">
        <Landing lang={lang} />
        <Stats />
      </div>
    </div>
  )
}

export default Home
'use client'
import React, { useState, useEffect } from 'react'
import '../styles/Header.css'

const geo  = '/geo.png'
const eng  = '/eng.png'
const logo = '/logo.png'

const content = {
  ka: {
    nav: ['მთავარი', 'სერვისები', 'პროექტები'],
    btn: 'კონტაქტი',
  },
  en: {
    nav: ['Home', 'Services', 'Projects'],
    btn: 'Contact Us',
  },
}

function Header({ onLangChange }) {
  const [activeLang, setActiveLang] = useState('ka')
  const [scrolled,   setScrolled]   = useState(false)
  const [activeNav,  setActiveNav]  = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const t = content[activeLang]

  const switchLang = (code) => {
    setActiveLang(code)
    onLangChange?.(code)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  return (
    <>
      <header className={`header-root${scrolled ? ' header-scrolled' : ''}`}>
        <span className="header-glow-left" />
        <span className="header-glow-right" />
        <span className="header-shimmer" />

        {/* logo */}
        <div className="header-logo">
          <img src={logo} alt="Apollo Creations" />
          <span className="header-logo-dot" />
        </div>

        {/* desktop nav */}
        <nav className="header-nav">
          {t.nav.map((item, i) => (
            
             <a href="#"
              key={i}
              className={`header-nav-link${activeNav === i ? ' header-nav-link--active' : ''}`}
              onClick={e => { e.preventDefault(); setActiveNav(i) }}
            >
              {item}
              <span className="header-nav-underline" />
            </a>
          ))}
        </nav>

        {/* right */}
        <div className="header-right">
          <div className="header-lang">
            {[['ka', geo, 'Georgian'], ['en', eng, 'English']].map(([code, src, label]) => (
              <button
                key={code}
                className={`header-lang-btn${activeLang === code ? ' header-lang-btn--active' : ''}`}
                onClick={() => switchLang(code)}
                aria-label={label}
              >
                <img src={src} alt={label} className="header-lang-flag" />
                <span className="header-lang-code">{code.toUpperCase()}</span>
              </button>
            ))}
          </div>

          <span className="header-divider" />

          {/* desktop CTA */}
          <button className="header-cta header-cta--desktop">
            <span className="header-cta-glow" />
            <span className="header-cta-text">{t.btn}</span>
            <svg className="header-cta-arrow" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* hamburger */}
          <button
            className={`header-hamburger${sidebarOpen ? ' header-hamburger--open' : ''}`}
            onClick={() => setSidebarOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* overlay */}
      <div
        className={`sidebar-overlay${sidebarOpen ? ' sidebar-overlay--visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* sidebar */}
      <aside className={`sidebar${sidebarOpen ? ' sidebar--open' : ''}`}>
        <div className="sidebar-shimmer" />

        {/* sidebar logo */}
       

        {/* sidebar nav */}
        <nav className="sidebar-nav">
          {t.nav.map((item, i) => (
            
              <a href="#"
              key={i}
              className={`sidebar-nav-link${activeNav === i ? ' sidebar-nav-link--active' : ''}`}
              onClick={e => { e.preventDefault(); setActiveNav(i); setSidebarOpen(false) }}
            >
              <span className="sidebar-nav-index">0{i + 1}</span>
              {item}
            </a>
          ))}
        </nav>

        {/* sidebar CTA */}
        <button className="header-cta sidebar-cta">
          <span className="header-cta-glow" />
          <span className="header-cta-text">{t.btn}</span>
          <svg className="header-cta-arrow" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </aside>
    </>
  )
}

export default Header
'use client'
import React, { useState, useEffect } from 'react'
import '../styles/Header.css'
import { useLang } from '../components/LanguageContext'

const logo = '/logo.png'

const LangSwitcher = ({ className = '' }) => {
  const { lang, setLang } = useLang()
  return (
    <div className={`lang-switcher ${className}`}>
      {[['ka', 'GEO'], ['en', 'EN']].map(([code, label]) => (
        <button
          key={code}
          className={`lang-btn${lang === code ? ' lang-btn--active' : ''}`}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

function Header() {
  const { lang, prefix } = useLang()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted]         = useState(false)
  const [scrolled, setScrolled]       = useState(false)

  const openSidebar = () => {
    setSidebarOpen(true)
    setTimeout(() => setMounted(true), 10)
    document.body.style.overflow = 'hidden'
  }

  const closeSidebar = () => {
    setMounted(false)
    setTimeout(() => setSidebarOpen(false), 500)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.body.style.overflow = ''
    }
  }, [])

  const content = {
    ka: {
      left: [
        { label: 'ბლოგი',     href: `${prefix}/blog` },
        { label: 'სერვისები', href: `${prefix}/services` },
      ],
      right: [
        { label: 'პროექტები', href: `${prefix}/projects` },
        { label: 'კონტაქტი',  href: `${prefix}/contact` },
      ],
      nav: [
        { label: 'მთავარი',   href: `${prefix}/`,        num: '00' },
        { label: 'ბლოგი',     href: `${prefix}/blog`,    num: '01' },
        { label: 'სერვისები', href: `${prefix}/services`, num: '02' },
        { label: 'პროექტები', href: `${prefix}/projects`, num: '03' },
        { label: 'კონტაქტი',  href: `${prefix}/contact`,  num: '04' },
      ],
    },
    en: {
      left: [
        { label: 'Blog',     href: `/blog` },
        { label: 'Services', href: `/services` },
      ],
      right: [
        { label: 'Projects', href: `/projects` },
        { label: 'Contact',  href: `/contact` },
      ],
      nav: [
        { label: 'Home',     href: `/`,         num: '00' },
        { label: 'Blog',     href: `/blog`,     num: '01' },
        { label: 'Services', href: `/services`, num: '02' },
        { label: 'Projects', href: `/projects`, num: '03' },
        { label: 'Contact',  href: `/contact`,  num: '04' },
      ],
    },
  }

  const t = content[lang]

  return (
    <>
      <div
        className={`header-container${scrolled ? ' header-scrolled' : ''}`}
        data-lang={lang}
      >
        <div className="header-glass" />

        {/* LEFT */}
        <div className="first-block">
          {t.left.map((item, i) => (
            <a key={i} href={item.href} className="nav-link">
              <span className="nav-link-text">{item.label}</span>
              <span className="nav-link-line" />
            </a>
          ))}
          <LangSwitcher className="lang-switcher--mobile" />
        </div>

        {/* CENTER — logo */}
        <div className="second-block">
          <a href={prefix || '/'} className="header-logo-link" aria-label="Apollo Creations">
            <div className="logo-glow-ring" />
            <img src={logo} alt="Apollo Creations" className="header-logo-img" />
          </a>
        </div>

        {/* RIGHT */}
        <div className="third-block">
          {t.right.map((item, i) => (
            <a key={i} href={item.href} className="nav-link">
              <span className="nav-link-text">{item.label}</span>
              <span className="nav-link-line" />
            </a>
          ))}
          <LangSwitcher className="lang-switcher--desktop" />
          <button className="hamburger" onClick={openSidebar} aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {sidebarOpen && (
        <>
          <div
            className={`sidebar-backdrop ${mounted ? 'sidebar-backdrop--visible' : ''}`}
            onClick={closeSidebar}
            aria-hidden="true"
          />
          <aside
            className={`sidebar-panel ${mounted ? 'sidebar-panel--open' : ''}`}
            data-lang={lang}
            aria-label="Navigation menu"
          >
            <div className="sidebar-top">
              <span className="sidebar-tagline">Digital Agency</span>
              <button className="sidebar-close" onClick={closeSidebar} aria-label="Close menu">
                <span className="sidebar-close-icon"><span /><span /></span>
              </button>
            </div>

            <div className="sidebar-divider" />

            <nav className="sidebar-nav">
              {t.nav.map((item, i) => (
                
                  <a key={i}
                  href={item.href}
                  className="sidebar-link"
                  style={{ '--i': i }}
                  onClick={closeSidebar}
                >
                  <span className="sidebar-link-num">{item.num}</span>
                  <span className="sidebar-link-label">{item.label}</span>
                  <span className="sidebar-link-arrow">→</span>
                </a>
              ))}
            </nav>

            <div className="sidebar-bottom">
              <div className="sidebar-divider" />
              <p className="sidebar-bottom-text">APOLLO CREATIONS © 2025</p>
            </div>

            <div className="sidebar-corner-accent" aria-hidden="true" />
          </aside>
        </>
      )}
    </>
  )
}

export default Header
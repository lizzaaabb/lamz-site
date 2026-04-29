'use client'
import React, { useEffect, useRef } from 'react'
import AnimatedBackground from './AnimatedBackgorund'
import '../styles/Landing.css'

const BRANDS = [
  'Litox', 'Motors N1', 'Medikids', 'Greenhall Capital', 'Builde',
  'Utopia VIP Travel', 'Yourhood', 'Art Gallery Vake', 'Tarinoks', 'Davson',
]

const content = {
  ka: {
    preTag:       'ვებსაიტები · ბრენდინგი · ზრდა',
    titleLine1:   'საიტის',
    titleLine2:   'დამზადება',
    sub:          'სადაც იდეები ფრთებს ისხამს',
    ctaPrimary:   'ჩვენი პროექტები',
    ctaSecondary: 'კონტაქტი',
    trustedBy:    'ჩვენ გვენდობიან',
  },
  en: {
    preTag:       'Design · Motion · Vision',
    titleLine1:   'Website',
    titleLine2:   'Development',
    sub:          'Where ideas take form',
    ctaPrimary:   'Our Projects',
    ctaSecondary: 'Contact Us',
    trustedBy:    'Trusted by',
  },
}

function BrandPill({ name }) {
  return (
    <div className="brand-pill">
      <div className="pill-mirror" />
      <div className="pill-shimmer" />
      <div className="pill-top-edge" />
      <div className="pill-bottom-edge" />
      <span className="pill-label">{name}</span>
    </div>
  )
}

function Landing({ lang = 'ka' }) {
  const tickerRef = useRef(null)
  const t = content[lang] || content['ka']

  useEffect(() => {
    const el = tickerRef.current
    if (!el) return
    const pause  = () => el.classList.add('paused')
    const resume = () => el.classList.remove('paused')
    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)
    return () => {
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
    }
  }, [])

  const doubled = [...BRANDS, ...BRANDS]

  return (
    <div className="landing-container">
      <img src="/des.gif" alt="" aria-hidden="true" className="landing-gif-bg" />
      <AnimatedBackground />
      <div className="landing-vignette" />
      <div className="landing-bottom-fade" /> 

      <div className="landing-ui">
        <p className="landing-pre-tag">{t.preTag}</p>
        <div className="landing-title-wrap">
          <h1 className={`landing-title landing-title--${lang}`}>
            <span className="word-apollo">{t.titleLine1}</span>
            <span className={`word-creations word-creations--${lang}`}>{t.titleLine2}</span>
          </h1>
        </div>
        <div className="landing-rule" />
        <p className="landing-sub">{t.sub}</p>
        <div className="landing-cta">
          <button className="cta-btn cta-primary" onClick={() => window.location.href = '/projects'}>
            <span className="cta-shimmer" /><span className="cta-dot" />{t.ctaPrimary}
          </button>
          <button className="cta-btn cta-secondary" onClick={() => window.location.href = '/contact'}>
            <span className="cta-shimmer" /><span className="cta-dot" />{t.ctaSecondary}
          </button>
        </div>
      </div>

      <div className="ticker-section">
        <p className="ticker-eyebrow">{t.trustedBy}</p>
        <div className="ticker-outer">
          <div className="ticker-track" ref={tickerRef}>
            {doubled.map((name, i) => <BrandPill key={i} name={name} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
'use client'
import React, { useEffect, useRef } from 'react'
import AnimatedBackground from './AnimatedBackgorund'
import '../styles/Landing.css'
import { useLang } from '../components/LanguageContext'

const logos = ['/ndoba1.png', '/ndoba2.png', '/ndoba3.svg', '/ndoba4.png', '/ndoba6.png', '/ndoba7.png', '/ndoba8.png']

const content = {
  ka: {
    preTag:       'საიტები · ბრენდინგი · ზრდა',
    titleLine1:   'საიტის',
    titleLine2:   'დამზადება',
    sub:          'სადაც იდეები ფრთებს ისხამენ',
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

function BrandPill({ src, name }) {
  return (
    <div className="brand-pill">
      <div className="pill-mirror" />
      <div className="pill-shimmer" />
      <div className="pill-top-edge" />
      <div className="pill-bottom-edge" />
      <img src={src} alt={name} className="pill-logo" />
    </div>
  )
}

function Landing() {
  const { lang, prefix } = useLang()
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
            <span className={`word-apollo word-apollo--${lang}`}>{t.titleLine1}</span>
            <span className={`word-creations word-creations--${lang}`}>{t.titleLine2}</span>
          </h1>
        </div>
        <div className="landing-rule" />
        <p className="landing-sub">{t.sub}</p>
        <div className="landing-cta">
         <button className="cta-btn cta-primary" onClick={() => window.location.href = `${prefix}/projects`}>
  <span className="cta-shimmer" /><span className="cta-dot" />{t.ctaPrimary}
</button>
        <button className="cta-btn cta-secondary" onClick={() => window.location.href = `${prefix}/contact`}>
  <span className="cta-shimmer" /><span className="cta-dot" />{t.ctaSecondary}
</button>
        </div>
      </div>
      <div className="ticker-section">
        <p className="ticker-eyebrow">{t.trustedBy}</p>
        <div className="ticker-outer">
          <div className="ticker-track" ref={tickerRef}>
            {[...logos, ...logos, ...logos, ...logos].map((src, i) => (
              <BrandPill key={i} src={src} name={`brand-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
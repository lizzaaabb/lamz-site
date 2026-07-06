'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/Projects.css'
import { useLang } from '../components/LanguageContext'

const content = {
  ka: {
    title: 'პროექტები',
    projects: [
      { num: '01', name: 'Art Of Movement', desc: 'ლენდინგ გვერდი', url: 'https://artofmovement.net', img: '/mock11.jpg' },
      { num: '02', name: 'Your Hood', desc: 'ონლაინ მაღაზია', url: 'https://yourhood.ge/', img: '/mockup2.jpg' },
      { num: '03', name: 'Utopia VIP Tourism', desc: 'ტურისტული კომპანია', url: 'https://www.utopiaviptravel.com/', img: '/mockup.jpg' },
    ],
    more: 'იხილეთ პროექტები',
    viewSite: 'საიტის ნახვა',
  },
  en: {
    title: 'Projects',
    projects: [
      { num: '01', name: 'Art Of Movement', desc: 'Landing Page', url: 'https://artofmovement.net', img: '/mock11.jpg' },
      { num: '02', name: 'Your Hood', desc: 'Online Shop', url: 'https://yourhood.ge/', img: '/mockup2.jpg' },
      { num: '03', name: 'Utopia VIP Tourism', desc: 'Tourism Company', url: 'https://www.utopiaviptravel.com/', img: '/mockup.jpg' },
    ],
    more: 'More projects',
    viewSite: 'View site',
  },
}

function Projects() {
  const { lang, prefix } = useLang()
  const t = content[lang]
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Mobile (<=1024px, same breakpoint as CSS): skip the reveal
    // animation entirely so cards/images never get stuck at opacity:0.
    const isMobile = window.matchMedia('(max-width: 1024px)').matches
    if (isMobile) return

    const animatedEls = container.querySelectorAll('.pj-section-title, .pj-card, .pj-more-wrap')

    // Elements are visible by default in CSS.
    // We only ADD the hidden state here — if this code never runs
    // (JS error, slow chunk load, etc.) everything just stays visible.
    animatedEls.forEach((el, i) => {
      el.classList.add('pj-pre-anim')
      el.style.transitionDelay = `${Math.min(i * 0.08, 0.3)}s`
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pj-in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
    )
    animatedEls.forEach((el) => observer.observe(el))

    // Safety net: if the observer never fires for some reason
    // (browser quirk, webview, timing issue), reveal everything anyway
    // after a short delay so content is never permanently hidden.
    const fallback = setTimeout(() => {
      animatedEls.forEach((el) => el.classList.add('pj-in-view'))
    }, 1500)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return (
    <div ref={containerRef} className={`projects-container projects-container--${lang}`}>
      <div className="pj-header">
        <h2 className="pj-section-title">{t.title}</h2>
      </div>
      <div className="pj-grid">
        {t.projects.map((p, i) => (
          <div key={i} className="pj-card">
            <img
              src={p.img}
              alt={p.name}
              className="pj-image"
              loading="lazy"
              style={i === 1 || i === 2 ? { transform: 'scale(1.05)', transformOrigin: 'center top' } : undefined}
            />
            <div className="pj-fade" />
            <div className="pj-card-number">{p.num}</div>
            <div className="pj-info">
              <p className="pj-name">{p.name}</p>
              <span className="pj-badge">
                <span className="pj-dot" />
                {p.desc}
              </span>
            </div>
            <div className="pj-hover-overlay">
              <a className="pj-view-btn" href={p.url} target="_blank" rel="noopener noreferrer">
                {t.viewSite} →
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="pj-more-wrap">
        <a href={`${prefix}/projects`} className="pj-more-btn">
          {t.more}
        </a>
      </div>
    </div>
  )
}

export default Projects
'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/Projects.css'
import { useLang } from '../components/LanguageContext'

const content = {
  ka: {
    title: 'პროექტები',
    projects: [
      {
        num: '01',
        name: 'Art Of Movement',
        desc: 'ლენდინგ გვერდი',
        url: 'https://artofmovement.net',
        img: '/mock11.jpg',
      },
      {
        num: '02',
        name: 'Your Hood',
        desc: 'ონლაინ მაღაზია',
        url: 'https://yourhood.ge/',
        img: '/mockup2.jpg',
      },
      {
        num: '03',
        name: 'Utopia VIP Tourism',
        desc: 'ტურისტული კომპანია',
        url: 'https://www.utopiaviptravel.com/',
        img: '/mockup.jpg',
      },
    ],
    more: 'იხილეთ პროექტები',
    viewSite: 'საიტის ნახვა',
  },
  en: {
    title: 'Projects',
    projects: [
      {
        num: '01',
        name: 'Art Of Movement',
        desc: 'Landing Page',
        url: 'https://artofmovement.net',
        img: '/mock11.jpg',
      },
      {
        num: '02',
        name: 'Your Hood',
        desc: 'Online Shop',
        url: 'https://yourhood.ge/',
        img: '/mockup2.jpg',
      },
      {
        num: '03',
        name: 'Utopia VIP Tourism',
        desc: 'Tourism Company',
        url: 'https://www.utopiaviptravel.com/',
        img: '/mockup.jpg',
      },
    ],
    more: 'More projects',
    viewSite: 'View site',
  },
}

function Projects() {
  const { lang, prefix } = useLang()  // ← added prefix
  const t = content[lang]
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.set('.pj-section-title, .pj-rule, .pj-card, .pj-more-wrap', {
          opacity: 0,
          y: 36,
        })
        const fadeUp = (target, delay = 0) => {
          gsap.fromTo(
            target,
            { opacity: 0, y: 36 },
            {
              scrollTrigger: {
                trigger: target,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay,
              ease: 'power3.out',
            }
          )
        }
        fadeUp('.pj-section-title')
        fadeUp('.pj-rule', 0.1)
        gsap.fromTo(
          '.pj-card',
          { opacity: 0, y: 48 },
          {
            scrollTrigger: {
              trigger: '.pj-grid',
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.15,
            ease: 'power3.out',
          }
        )
        fadeUp('.pj-more-wrap', 0.2)
      }, containerRef)
    }
    init()
    return () => ctx && ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className={`projects-container projects-container--${lang}`}>
      <div className="pj-header">
        <h2 className="pj-section-title">{t.title}</h2>
        <div className="pj-rule" />
      </div>
      <div className="pj-grid">
        {t.projects.map((p, i) => (
          <div key={i} className="pj-card">
            <img
              src={p.img}
              alt={p.name}
              className="pj-image"
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
        <a href={`${prefix}/projects`} className="pj-more-btn"> {/* ← fixed */}
          {t.more}
        </a>
      </div>
    </div>
  )
}

export default Projects
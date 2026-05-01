'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/Projects.css'

const mockup = '/mock1.png'

const content = {
  ka: {
    title: 'პროექტები',
    projects: [
      {
        num: '01',
        name: 'Your Hood',
        desc: 'ფეშენ ონლაინ მაღაზია',
        tags: ['Next.js', 'BOG Pay', 'Admin Panel'],
        url: 'https://yourhood.ge',
      },
      {
        num: '02',
        name: 'Studio Arch',
        desc: 'არქიტექტურის სტუდიის საიტი',
        tags: ['React', 'GSAP', 'Figma'],
        url: '#',
      },
      {
        num: '03',
        name: 'Fresh Market',
        desc: 'პროდუქტების ონლაინ კატალოგი',
        tags: ['Next.js', 'Supabase', 'WhatsApp API'],
        url: '#',
      },
    ],
    more: 'მეტი პროექტი',
  },
  en: {
    title: 'Projects',
    projects: [
      {
        num: '01',
        name: 'Your Hood',
        desc: 'Fashion online store',
        tags: ['Next.js', 'BOG Pay', 'Admin Panel'],
        url: 'https://yourhood.ge',
      },
      {
        num: '02',
        name: 'Studio Arch',
        desc: 'Architecture studio website',
        tags: ['React', 'GSAP', 'Figma'],
        url: '#',
      },
      {
        num: '03',
        name: 'Fresh Market',
        desc: 'Products online catalogue',
        tags: ['Next.js', 'Supabase', 'WhatsApp API'],
        url: '#',
      },
    ],
    more: 'More projects',
  },
}

function Projects({ lang = 'ka' }) {
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
          
          <a  key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pj-card"
          >
            <div className="pj-card-number">{p.num}</div>

            <div className="pj-image-wrap">
              <img src={mockup} alt={p.name} className="pj-image" />
              <div className="pj-image-overlay" />
            </div>

            <div className="pj-card-body">
              <div className="pj-card-top">
                <p className="pj-name">{p.name}</p>
                <p className="pj-desc">{p.desc}</p>
              </div>
              <div className="pj-divider" />
              <div className="pj-tags">
                {p.tags.map((tag, j) => (
                  <span key={j} className="pj-tag">{tag}</span>
                ))}
              </div>
              <div className="pj-link-row">
                <span className="pj-link-text">
                  {lang === 'ka' ? 'საიტის ნახვა' : 'View site'}
                </span>
                <span className="pj-arrow">↗</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="pj-more-wrap">
        <a href="/projects" className="pj-more-btn">
          {t.more}
          <span className="pj-more-arrow">↗</span>
        </a>
      </div>
    </div>
  )
}

export default Projects
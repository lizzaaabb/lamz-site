'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/Tech.css'

const tech = [
  '/tech1.png',
  '/tech10.png',
  '/tech3.svg',
  '/tech.png',
  '/tech2.svg',
  '/tech4.png',
  '/tech5.png',
  '/tech6.png',
  '/tech7.png',
  '/tech8.png',
  '/tech9.png',
]

const content = {
  ka: { title: 'რა ტექნოლოგიებს ვიყენებთ თქვენი წარმატებისთვის' },
  en: { title: 'What technologies we use for your success' },
}

function Tech({ lang = 'ka' }) {
  const t = content[lang]
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx

    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        gsap.set('.tech-title, .tech-item', { opacity: 0, y: 30 })

        gsap.to('.tech-title', {
          scrollTrigger: {
            trigger: '.tech-title',
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        })

        gsap.to('.tech-item', {
          scrollTrigger: {
            trigger: '.tech-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: 'power3.out',
        })
      }, containerRef)
    }

    init()
    return () => ctx && ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="tech-container">
      <div className="tech-pattern" />
      <div className="tech-glow" />

      <h2 className="tech-title">
        {lang === 'ka' ? (
          <>რა ტექნოლოგიებს ვიყენებთ <span>თქვენი წარმატებისთვის</span></>
        ) : (
          <>What technologies we use for <span>your success</span></>
        )}
      </h2>

      <div className="tech-grid">
        {tech.map((src, i) => (
          <div key={i} className="tech-item">
            <div className="tech-logo-wrap">
              <img src={src} alt={`tech-${i}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tech
'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/Cta.css'

const content = {
  ka: {
    heading: 'გსურთ თქვენი ბიზნესის განვითარება ონლაინ სივრცეში?',
    sub: 'ჩვენ ვქმნით საიტებს, რომლებიც არა მხოლოდ ვიზუალურად მიმზიდველია, არამედ რეალური შედეგებიც მოაქვთ.',
    btnText: 'დაწერეთ ჩვენს',
    btnCall: 'დარეკეთ ახლა',
    phone: 'tel:+995555000000',
    contact: '/contact',
  },
  en: {
    heading: 'Want to grow your business in the online space?',
    sub: 'We build websites that are not only visually compelling, but deliver real results.',
    btnText: 'Message us',
    btnCall: 'Call now',
    phone: 'tel:+995555000000',
    contact: '/contact',
  },
}

function Cta({ lang = 'ka' }) {
  const t = content[lang]
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        gsap.set('.cta-heading, .cta-sub, .cta-btns', { opacity: 0, y: 32 })

        const fadeUp = (target, delay = 0) =>
          gsap.fromTo(
            target,
            { opacity: 0, y: 32 },
            {
              scrollTrigger: { trigger: target, start: 'top 88%', toggleActions: 'play none none none' },
              opacity: 1, y: 0, duration: 0.85, delay, ease: 'power3.out',
            }
          )

        fadeUp('.cta-heading', 0)
        fadeUp('.cta-sub', 0.12)
        fadeUp('.cta-btns', 0.24)
      }, containerRef)
    }
    init()
    return () => ctx && ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className={`cta-section cta-section--${lang}`}>
      <div className="cta-grid-overlay" />
      <div className="cta-fade-overlay" />

      <div className="cta-inner">
        <h2 className="cta-heading">{t.heading}</h2>
        <p className="cta-sub">{t.sub}</p>

        <div className="cta-btns">
          <a href={t.contact} className="cta-btn cta-btn--primary">
            {t.btnText}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2.5 12.5L11.5 3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M8 3.5H11.5V7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a href={t.phone} className="cta-btn cta-btn--ghost">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2 3.5C2 3.5 2.5 2 4 2C5 2 5.5 3 6 4C6.5 5 5 5.5 5 6.5C5 7.5 8.5 11 9.5 11C10.5 11 11 9.5 12 10C13 10.5 13.5 11 13 12C12.5 13 11 13.5 10 13C5 11 2 7 2 4.5C2 4 2 3.5 2 3.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t.btnCall}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cta
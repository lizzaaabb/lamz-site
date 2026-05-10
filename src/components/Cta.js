'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/Cta.css'
import { useLang } from '../components/LanguageContext'

const WHATSAPP_NUMBER = '995574065469'

const content = {
  ka: {
    heading: 'გსურთ თქვენი ბიზნესის განვითარება ონლაინ სივრცეში?',
    sub: 'ჩვენ ვქმნით საიტებს, რომლებიც არა მხოლოდ ვიზუალურად მიმზიდველია, არამედ რეალური შედეგებიც მოაქვთ.',
    btnWhatsapp: 'მოგვწერეთ',
    btnCall: 'დაგვირეკეთ',
    phone: 'tel:+995574065469',
    whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  en: {
    heading: 'Want to grow your business in the online space?',
    sub: 'We build websites that are not only visually compelling, but deliver real results.',
    btnWhatsapp: 'Message us',
    btnCall: 'Call us',
    phone: 'tel:+995574065469',
    whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
}

function Cta() {
  const { lang } = useLang()
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
              scrollTrigger: {
                trigger: target,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
              opacity: 1,
              y: 0,
              duration: 0.85,
              delay,
              ease: 'power3.out',
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
      <div className="cta-bg-glow cta-bg-glow--left" />
      <div className="cta-bg-glow cta-bg-glow--right" />

      <div className="cta-inner">
        <div className="cta-card">
          <div className="cta-card-border" />
          <div className="cta-card-content">
            <h2 className="cta-heading">{t.heading}</h2>
            <p className="cta-sub">{t.sub}</p>
            <div className="cta-btns">

              
               <a href={t.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn2 cta-btn--primary2"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.532 5.856L.036 23.25a.75.75 0 0 0 .922.903l5.347-1.717A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.662-.523-5.168-1.432l-.364-.216-3.747 1.203 1.116-3.645-.231-.373A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                {t.btnWhatsapp}
              </a>

              
              <a  href={t.phone}
                className="cta-btn2 cta-btn--call2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {t.btnCall}
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
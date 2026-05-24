'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/Services.css'
import { useLang } from '../components/LanguageContext'

const servicePictures = ['service.jpg', 'service2.jpg']

const content = {
  ka: {
    preTag: 'ჩვენი შეთავაზება',
    title: 'სერვისები',
    services: [
      {
        num: '01',
        tag: 'Web Development',
        title: 'ვებ გვერდის დამზადება',
        desc: 'ვქმნით თანამედროვე, სწრაფ და SEO ოპტიმიზებულ ვებსაიტებს, რომლებიც არა მხოლოდ პროფესიონალურად გამოიყურება, არამედ ხელს უწყობს ბიზნესის ზრდას, ნდობის ჩამოყალიბებასა და ახალი კლიენტების მოზიდვას.',
        cta: 'დეტალურად →',
        slug: 'web-development-service',
      },
      {
        num: '02',
        tag: 'Branding',
        title: 'ბრენდინგი',
        desc: 'ვქმნით გამორჩეულ და დასამახსოვრებელ ბრენდის იდენტობას - ლოგოდან და ფერთა პალიტრიდან დაწყებული, სრულყოფილი ვიზუალური სტილის შექმნით დასრულებული, რათა თქვენი ბიზნესი უფრო ცნობილი და კონკურენტებისგან გამორჩეული გახდეს.',
        cta: 'დეტალურად →',
        slug: 'branding',
      },
   
    ],
  },
  en: {
    preTag: 'What we offer',
    title: 'Services',
    services: [
      {
        num: '01',
        tag: 'Web Development',
        title: 'Website Development',
        desc: 'We build modern, fast and SEO-optimized websites focused on real results — bringing your business the clients it deserves.',
        cta: 'Learn more →',
        slug: 'web-development-service',
      },
      {
        num: '02',
        tag: 'Branding',
        title: 'Branding',
        desc: 'We craft strong brand identities — from logo design to full visual style guides — that make your business stand out from the competition.',
        cta: 'Learn more →',
        slug: 'branding',
      },
     
    ],
  },
}

function Services() {
  const { lang, prefix } = useLang()
  const t = content[lang] || content['en']
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.fromTo(
          '.sv-pre-tag, .sv-title',
          { opacity: 0, y: 28 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: '.sv-header', start: 'top 88%', toggleActions: 'play none none none' },
          }
        )
        gsap.fromTo(
          '.sv-card',
          { opacity: 0, y: 48 },
          {
            scrollTrigger: { trigger: '.sv-grid', start: 'top 85%', toggleActions: 'play none none none' },
            opacity: 1, y: 0, duration: 0.85, stagger: 0.15, ease: 'power3.out',
          }
        )
      }, containerRef)
    }
    init()
    return () => ctx && ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className={`sv-container sv-container--${lang}`}>

      {/* HEADER */}
      <div className="sv-header">
        <p className="sv-pre-tag">{t.preTag}</p>
        <h2 className="sv-title">{t.title}</h2>
      </div>

      {/* GRID */}
      <div className="sv-grid">
        {t.services.map((s, i) => (
         <div
  key={i}
  className="sv-card"
  onClick={() => window.location.href = s.slug ? `${prefix}/${s.slug}` : `${prefix}/contact`}
>

            {/* IMAGE */}
            <div className="sv-card-img-wrap">
              <img
                src={`/${servicePictures[i]}`}
                alt={s.title}
                className="sv-card-img"
              />
              <div className="sv-card-img-overlay" />
              <span className="sv-tag sv-tag--over">{s.tag}</span>
            </div>

            {/* BODY */}
            <div className="sv-card-body">
              <div className="sv-card-meta">
                <span className="sv-num">{s.num}</span>
              </div>
              <h3 className="sv-post-title">{s.title}</h3>
              <p className="sv-desc">{s.desc}</p>
            </div>

            {/* FOOTER */}
            <div className="sv-card-footer">
              <a
                href={s.slug ? `${prefix}/${s.slug}` : `${prefix}/contact`}
                className="sv-cta"
              >
                {s.cta}
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Services
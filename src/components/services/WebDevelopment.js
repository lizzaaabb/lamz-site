'use client'
import React, { useEffect, useRef } from 'react'
import '../../components/services/WebDevelopment.css'
import { useLang } from '../../components/LanguageContext'

const pics = ['/web1.jpg', '/web2.jpg', '/web3.jpg', '/web4.jpg', '/web5.jpg', '/web6.jpg', '/web7.jpg']

const content = {
  ka: {
    preTag: 'ვებ დეველოპმენტი',
    title: 'სერვისები',
    subtitle: 'ვქმნით თანამედროვე, სწრაფ და SEO-ოპტიმიზებულ ვებსაიტებს — ყველა ტიპის ბიზნესისთვის.',
    back: '← სერვისები',
    ctaLabel: 'დაიწყეთ პროექტი',
    services: [
      { num: '01', title: 'ბიზნეს ვებსაიტების შექმნა',          subtitle: 'პროფესიონალური საიტები თქვენი ბიზნესისთვის',    tag: 'ბიზნესი'    },
      { num: '02', title: 'ონლაინ მაღაზიების შექმნა',            subtitle: 'ონლაინ მაღაზიები გაყიდვების გაზრდისთვის',      tag: 'ე-კომერცია' },
      { num: '03', title: 'უძრავი ქონების სააგენტოს ვებსაიტები', subtitle: 'ობიექტების განცხადება და სააგენტოს პლატფორმა',  tag: 'უძ. ქონება' },
      { num: '04', title: 'მანქანების გაქირავების ვებსაიტები',   subtitle: 'დაჯავშნის და ფლოტის მართვის სისტემები',         tag: 'ქირავნობა'  },
      { num: '05', title: 'ტურისტული ვებსაიტები',                subtitle: 'სამოგზაურო და დანიშნულების ვებ პლატფორმები',    tag: 'ტურიზმი'    },
      { num: '06', title: 'ონლაინ კატალოგის ვებსაიტები',         subtitle: 'წარმოაჩინეთ თქვენი პროდუქცია ონლაინ',           tag: 'კატალოგი'   },
      { num: '07', title: 'ინდივიდუალური ვებ პლატფორმები',       subtitle: 'მორგებული გადაწყვეტილებები ნებისმიერი საჭიროებისთვის', tag: 'Custom' },
    ],
  },
  en: {
    preTag: 'Web Development',
    title: 'Services',
    subtitle: 'We build modern, fast and SEO-optimized websites for every type of business.',
    back: '← Services',
    ctaLabel: 'Start Your Project',
    services: [
      { num: '01', title: 'Corporate Websites',         subtitle: 'Professional sites for your business',         tag: 'Business'   },
      { num: '02', title: 'E-Commerce Solutions',       subtitle: 'Online stores built to convert',               tag: 'E-Commerce' },
      { num: '03', title: 'Real Estate Platforms',      subtitle: 'Property listings and agency websites',        tag: 'Real Estate'},
      { num: '04', title: 'Car Rental Systems',         subtitle: 'Booking and fleet management websites',        tag: 'Car Rental' },
      { num: '05', title: 'Tourism & Travel Websites',  subtitle: 'Destination and travel booking platforms',     tag: 'Tourism'    },
      { num: '06', title: 'Product Catalog Websites',   subtitle: 'Showcase your products online',                tag: 'Catalog'    },
      { num: '07', title: 'Custom Web Applications',    subtitle: 'Tailor-made platforms for any need',           tag: 'Custom'     },
    ],
  },
}

function WebDevelopment() {
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
          '.wd-back, .wd-pre-tag, .wd-title, .wd-subtitle',
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: '.wd-header', start: 'top 90%', toggleActions: 'play none none none' },
          }
        )
        gsap.fromTo(
          '.wd-item',
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: 'power3.out',
            scrollTrigger: { trigger: '.wd-list', start: 'top 88%', toggleActions: 'play none none none' },
          }
        )
        gsap.fromTo(
          '.wd-cta-wrap',
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: '.wd-cta-wrap', start: 'top 93%', toggleActions: 'play none none none' },
          }
        )
      }, containerRef)
    }
    init()
    return () => ctx && ctx.revert()
  }, [])

  return (
    <div className="wd-page">
      <div ref={containerRef} className={`wd-container wd-container--${lang}`}>

        {/* BACK */}
        <a href={`${prefix}/services`} className="wd-back">{t.back}</a>

        {/* HEADER */}
        <div className="wd-header">
          <p className="wd-pre-tag">{t.preTag}</p>
          <h2 className="wd-title">{t.title}</h2>
          <p className="wd-subtitle">{t.subtitle}</p>
        </div>

        {/* SERVICE LIST */}
        <div className="wd-list">
          {t.services.map((s, i) => (
            <a
              key={i}
              href={`${prefix}/contact`}
              className="wd-item"
            >
              {/* IMAGE PANEL */}
              <div className="wd-item-img-wrap">
                <img
                  className="wd-item-img"
                  src={pics[i]}
                  alt={s.title}
                />
                <div className="wd-item-img-fade" />
                <span className="wd-item-tag">{s.tag}</span>
              </div>

              {/* TEXT */}
              <div className="wd-item-content">
                <h3 className="wd-item-title">{s.title}</h3>
                <p className="wd-item-subtitle">{s.subtitle}</p>
              </div>

              {/* GHOST NUMBER */}
              <span className="wd-item-num">{s.num}</span>

              {/* ARROW */}
              <span className="wd-item-arrow">→</span>
            </a>
          ))}
        </div>

      
      </div>
    </div>
  )
}

export default WebDevelopment
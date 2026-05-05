'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/Stats.css'
import Triangle from '../components/Triangle'

const content = {
  ka: {
    title: 'სერვისები',
    cards: [
      {
        price: '799₾-იდან',
        title: 'ერთგვერდიანი საიტი',
        num: '01',
        items: [
          'Landing გვერდი',
          'ჩვენს შესახებ სექცია',
          'სერვისების სექცია',
          'სოც. მედიის ლინკები',
          'CTA',
          'კონტაქტის და მისამართის სექცია',
        ],
      },
      {
        price: '1,499₾-იდან',
        title: 'ონლაინ კატალოგი',
        num: '02',
        items: [
          'მთავარი გვერდი',
          'პროდუქტების გვერდი',
          'პროდუქტის დეტალების გვერდი',
          'კონტაქტის გვერდი',
          'ადმინ პანელი პროდუქტების ასატვირთად',
          'შეკვეთა WhatsApp-ით ან მეილით',
        ],
      },
      {
        price: '2,499₾-იდან',
        title: 'ონლაინ მაღაზია',
        num: '03',
        items: [
          'მთავარი გვერდი',
          'პროდუქტები და ფილტრები',
          'პროდუქტის დეტალების გვერდი',
          'BOG და TBC ონლაინ გადახდები',
          'SMS შეტყობინება შეკვეთაზე',
          'ადმინ პანელი — პროდუქტები, კატეგორიები, შეკვეთები, გადახდები',
          'მომხმარებლის ავტორიზაცია ',
        ],
      },
    ],
    bonus: {
      tag: '1,000₾-ზე მეტის გადახდის შემთხვევაში',
      title: 'საჩუქარი ახალ მომხმარებელს',
      items: [
        'ლოგო - საჩუქრად',
        'Google Search Console-ში საიტის დამატება - საჩუქრად',
        'Google Business Profile-ის გამართვა - საჩუქრად',
        'ტექნიკური მხარდაჭერა 1 თვე - საჩუქრად',
      ],
    },
  },
  en: {
    title: 'Services',
    cards: [
      {
        price: 'From 799₾',
        title: 'One-Page Website',
        num: '01',
        items: [
          'Landing section',
          'About us section',
          'Services section',
          'Social media links',
          'CTA',
          'Contact & address section',
        ],
      },
      {
        price: 'From 1,499₾',
        title: 'Online Catalogue',
        num: '02',
        items: [
          'Home page',
          'Products page',
          'Product detail page',
          'Contact page',
          'Admin panel for uploading products',
          'Orders via WhatsApp or email',
        ],
      },
      {
        price: 'From 2,499₾',
        title: 'Online Store',
        num: '03',
        items: [
          'Home page',
          'Products page with filters',
          'Product detail page',
          'BOG & TBC online payments',
          'SMS notification on order',
          'Admin panel — products, categories, orders & payments',
          'User authentication (optional)',
        ],
      },
    ],
    bonus: {
      tag: 'For packages over 1,000₾',
      title: 'Gift for New Clients',
      items: [
        'Logo - as a gift',
        'Adding your site to Google Search Console - as a gift',
        'Google Business Profile setup - as a gift',
        '1 month technical support - as a gift',
      ],
    },
  },
}

const WHATSAPP_NUMBER = '995574065469'

function getWhatsAppUrl(cardTitle, lang) {
  const message =
    lang === 'ka'
      ? `გამარჯობა! მინდა ${cardTitle}.`
      : `Hello! I'm interested in the ${cardTitle}.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function Stats({ lang = 'ka' }) {
  const t = content[lang]
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx

    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        gsap.set('.sv-section-title, .sv-rule, .sv-card, .sv-bonus-card', {
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

        fadeUp('.sv-section-title')
        fadeUp('.sv-rule', 0.1)

        gsap.fromTo(
          '.sv-card',
          { opacity: 0, y: 48 },
          {
            scrollTrigger: {
              trigger: '.sv-grid--3',
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

        fadeUp('.sv-bonus-card', 0.1)
      }, containerRef)
    }

    init()
    return () => ctx && ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className={`services-container services-container--${lang}`}>
      <div className="sv-header">
        <h2 className="sv-section-title">{t.title}</h2>
        <div className="sv-rule" />
      </div>

      <div className="sv-grid--3">
        {t.cards.map((c, i) => (
          <div className="sv-card" key={i}>
            <div className="sv-card-number">{c.num}</div>
            <div className="sv-card-top">
              <div className="sv-price">{c.price}</div>
             <p className={`sv-title sv-title--${lang}`}>{c.title}</p>
            </div>
            <div className="sv-divider" />
            <ul className="sv-list">
              {c.items.map((item, j) => (
                <li key={j} className="sv-list-item">
                  <span className="sv-check-icon">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <circle cx="6.5" cy="6.5" r="6" stroke="rgba(209,102,255,0.5)" strokeWidth="0.8" />
                      <path d="M4 6.5L5.8 8.3L9 5" stroke="#d166ff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="sv-btn-wrapper">
              <a
                className="sv-order-btn"
                href={getWhatsAppUrl(c.title, lang)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cta-shimmer" />
                {lang === 'ka' ? 'შეკვეთა' : 'Order Now'}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="sv-bonus-card">
        <div className="sv-bonus-badge">{t.bonus.tag}</div>
        <div className="sv-bonus-inner">
          <div className="sv-bonus-left">
            <div className="sv-bonus-left-inner">
              <Triangle size={70} />
              <p className={`sv-bonus-title sv-bonus-title--${lang}`}>{t.bonus.title}</p>
            </div>
          </div>
          <ul className="sv-bonus-list">
            {t.bonus.items.map((item, i) => (
              <li key={i} className="sv-list-item sv-list-item--bonus">
                <span className="sv-gift-icon">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Stats
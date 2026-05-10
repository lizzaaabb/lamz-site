'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/Contact.css'
import { useLang } from '../components/LanguageContext'

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
)
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 11.8a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.04 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
  </svg>
)
const IconInstagram = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
  </svg>
)
const IconTikTok = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.15a8.16 8.16 0 0 0 4.77 1.52V7.22a4.85 4.85 0 0 1-1-.53z"/>
  </svg>
)
const IconFacebook = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const IconWhatsApp = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.532 5.856L.036 23.25a.75.75 0 0 0 .922.903l5.347-1.717A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.662-.523-5.168-1.432l-.364-.216-3.747 1.203 1.116-3.645-.231-.373A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

const content = {
  ka: {
    preTag: 'დაგვიკავშირდით',
    title: 'კონტაქტი',
    sub: 'მზად ვართ თქვენი იდეა რეალობად ვაქციოთ',
    cards: [
      { Icon: IconMail,  label: 'ელ-ფოსტა', value: 'business@apollocreations.net', href: 'mailto:business@apollocreations.net' },
      { Icon: IconPhone, label: 'ტელეფონი', value: '+995 574 06 54 69',             href: 'tel:+995574065469' },
    ],
    socialsLabel: 'სოციალური მედია',
    cta: 'WhatsApp',
    ctaHref: 'https://wa.me/995574065469',
  },
  en: {
    preTag: 'Get in touch',
    title: 'Contact',
    sub: 'we are ready to turn your idea into reality',
    cards: [
      { Icon: IconMail,  label: 'Email', value: 'business@apollocreations.net', href: 'mailto:business@apollocreations.net' },
      { Icon: IconPhone, label: 'Phone', value: '+995 574 06 54 69',             href: 'tel:+995574065469' },
    ],
    socialsLabel: 'Social Media',
    cta: 'WhatsApp',
    ctaHref: 'https://wa.me/995574065469',
  },
}

const socials = [
  { label: 'Instagram', Icon: IconInstagram, href: 'https://instagram.com/apollocreations' },
  { label: 'TikTok',    Icon: IconTikTok,    href: 'https://tiktok.com/@apollocreations'  },
  { label: 'Facebook',  Icon: IconFacebook,  href: 'https://facebook.com/apollocreations'  },
  { label: 'WhatsApp',  Icon: IconWhatsApp,  href: 'https://wa.me/995574065469'            },
]

function Contact() {
  const { lang } = useLang()
  const t = content[lang] || content['en']
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        const fadeUp = (target, delay = 0) => {
          gsap.fromTo(target,
            { opacity: 0, y: 32 },
            {
              scrollTrigger: { trigger: target, start: 'top 90%', toggleActions: 'play none none none' },
              opacity: 1, y: 0, duration: 0.8, delay, ease: 'power3.out',
            }
          )
        }
        fadeUp('.ct-pre-tag', 0)
        fadeUp('.ct-title', 0.05)
        fadeUp('.ct-rule', 0.08)
        fadeUp('.ct-sub', 0.1)
        fadeUp('.ct-glass', 0.18)
      }, containerRef)
    }
    init()
    return () => ctx && ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className={`ct-section ct-section--${lang}`}>
      <div className="ct-glow ct-glow--tl" />
      <div className="ct-glow ct-glow--br" />

      <div className="ct-inner">
        <div className="ct-header">
          <p className="ct-pre-tag">{t.preTag}</p>
          <h2 className="ct-title">{t.title}</h2>
          <div className="ct-rule" />
          <p className="ct-sub">{t.sub}</p>
        </div>

        <div className="ct-glass">
          <div className="ct-glass-border" />
          <div className="ct-glass-inner">

            <div className="ct-cards">
              {t.cards.map((c, i) => (
                <a key={i} href={c.href} className="ct-card">
                  <div className="ct-card-icon"><c.Icon /></div>
                  <div className="ct-card-body">
                    <span className="ct-card-label">{c.label}</span>
                    <span className="ct-card-value">{c.value}</span>
                  </div>
                  <span className="ct-card-arrow">→</span>
                </a>
              ))}
            </div>

            <div className="ct-divider" />

            <div className="ct-socials-wrap">
              <p className="ct-socials-label">{t.socialsLabel}</p>
              <div className="ct-socials">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} className="ct-social-btn"
                    aria-label={s.label} target="_blank" rel="noopener noreferrer">
                    <s.Icon />
                    <span className="ct-social-label">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="ct-divider" />

            <div className="ct-cta-wrap">
              <a href={t.ctaHref} className="ct-cta-btn" target="_blank" rel="noopener noreferrer">
                <span className="ct-shimmer" />
                <IconWhatsApp />
                {t.cta}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
'use client'
import React from 'react'
import '../styles/Footer.css'
import { useLang } from '../components/LanguageContext'

const content = {
  ka: {
    desc: 'სადაც იდეები ფრთებს ისხამენ. ციფრული სააგენტო, რომელიც ქმნის ვებსაიტებს, ბრენდინგსა და ზრდის სტრატეგიებს.',
    navLabel: 'ნავიგაცია',
    contactLabel: 'კონტაქტი',
    links: [
      { label: 'მთავარი', href: '/ka/' },
      { label: 'ბლოგი', href: '/ka/blog' },
      { label: 'სერვისები', href: '/ka/services' },
      { label: 'პროექტები', href: '/ka/projects' },
      { label: 'კონტაქტი', href: '/ka/contact' },
    ],
    copy: 'Apollo Creations © 2025 — ყველა უფლება დაცულია',
    location: 'თბილისი, საქართველო',
  },
  en: {
    desc: 'Where ideas take form. Digital agency crafting websites, branding & growth strategies.',
    navLabel: 'Navigation',
    contactLabel: 'Contact',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Services', href: '/services' },
      { label: 'Projects', href: '/projects' },
      { label: 'Contact', href: '/contact' },
    ],
    copy: 'Apollo Creations © 2025 — All rights reserved',
    location: 'Tbilisi, Georgia',
  },
}

const socials = [
  {
    label: 'Instagram',
    icon: '/instagram.png',
    href: 'https://www.instagram.com/apollocreations_net/',
  },
  {
    label: 'TikTok',
    icon: '/tiktok.png',
    href: 'https://www.tiktok.com/@apollocreations.net',
  },
  {
    label: 'Facebook',
    icon: '/facebook.png',
    href: 'https://www.facebook.com/profile.php?id=61579611981687',
  },
  {
    label: 'WhatsApp',
    icon: '/whatsapp.png',
    href: 'https://wa.me/995574065469',
  },
]

function Footer() {
  const { lang, prefix } = useLang()
  const t = content[lang] || content['ka']

  return (
    <footer className={`ft ft--${lang}`}>
      <div className="ft-inner">
        <div className="ft-grid">

          {/* Brand */}
          <div className="ft-col-brand">
            <div className="ft-brand-name">APOLLO CREATIONS</div>
            <p className="ft-brand-desc">{t.desc}</p>
            <div className="ft-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="ft-social-btn"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={s.icon} alt={s.label} width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="ft-col">
            <p className="ft-col-label">{t.navLabel}</p>
            {t.links.map((item, i) => (
              <a key={i} href={item.href} className="ft-nav-link">
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="ft-col">
            <p className="ft-col-label">{t.contactLabel}</p>
            <div className="ft-contact-item">
              <div className="ft-contact-icon">
                <img src="/gmail.png" alt="Email" width={13} height={13} />
              </div>
              <a href="mailto:business@apollocreations.net" className="ft-contact-text">
                business@apollocreations.net
              </a>
            </div>
            <div className="ft-contact-item">
              <div className="ft-contact-icon">
                <img src="/phone.png" alt="Phone" width={13} height={13} />
              </div>
              <a href="tel:+995575755712" className="ft-contact-text">
                +995 575 75 57 12
              </a>
            </div>
          </div>

        </div>

        <div className="ft-bottom">
          <p className="ft-copy">{t.copy}</p>
          <div className="ft-rule" />
          <p className="ft-copy">{t.location}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
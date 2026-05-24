'use client'
import React, { useState } from 'react'
import { useLang } from '../../../components/LanguageContext'
import './Logo.css'

const WHATSAPP_NUMBER = '995574065469'

const TEXT = {
  en: {
    pre: 'Our Services',
    title: 'Logo Design',
    price: '650₾',
    priceNote: '+400₾ for Georgian version',
    desc: 'A clean and professional logo designed to work across websites, social media, and print.',
    includesLabel: 'Includes',
    includes: [
      'Main logo',
      'Alternate logo variations',
      'Black & white versions',
      'Export files for web and print',
      'Basic logo presentation / mockups',
      'Simple visual direction for a more consistent brand look',
    ],
    optionalLabel: 'Optional',
    optional: [
      'Georgian logo adaptation: +400₾',
    ],
    cta: 'Order',
  },
  ka: {
    pre: 'ჩვენი სერვისები',
    title: 'ლოგოს დიზაინი',
    price: '650₾',
    priceNote: '+400₾ ქართული ვერსიისთვის',
    desc: 'სუფთა და პროფესიონალური ლოგო, შექმნილი ვებსაიტებზე, სოციალურ მედიასა და პრინტზე გამოსაყენებლად.',
    includesLabel: 'მოიცავს',
    includes: [
      'მთავარი ლოგო',
      'ლოგოს ალტერნატიული ვარიანტები',
      'შავ-თეთრი ვერსიები',
      'ექსპორტ ფაილები ვებისა და პრინტისთვის',
      'ლოგოს პრეზენტაცია / მოქაფები',
      'მარტივი ვიზუალური მიმართულება ბრენდის თანმიმდევრულობისთვის',
    ],
    optionalLabel: 'დამატებით',
    optional: [
      'ქართული ლოგოს ადაპტაცია: +400₾',
    ],
    cta: 'შეკვეთა',
  },
}

export default function Logo() {
  const { lang } = useLang()
  const t = TEXT[lang]
  const [hovered, setHovered] = useState(null)

  const handleOrder = () => {
    const msg = lang === 'ka'
      ? 'გამარჯობა, მინდა შევუკვეთო ლოგოს დიზაინი'
      : 'Hello, I would like to order Logo Design'
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section className={`lg-section${lang === 'ka' ? ' lg-section--ka' : ''}`}>
      <div className="lg-header">
        <span className="lg-pre">{t.pre}</span>
        <h2 className="lg-title">{t.title}</h2>
      </div>

      <div className="lg-card">
        <div className="lg-accent-bar" />

        {/* Price */}
        <div className="lg-price-wrap">
          <span className="lg-price">{t.price}</span>
          <span className="lg-price-note">{t.priceNote}</span>
        </div>

        {/* Description */}
        <p className="lg-desc">{t.desc}</p>

        <div className="lg-divider" />

        {/* Includes */}
        <div className="lg-block">
          <p className="lg-block-label">{t.includesLabel}</p>
          <ul className="lg-list">
            {t.includes.map((item, i) => (
              <li
                key={i}
                className={`lg-list-item${hovered === i ? ' hovered' : ''}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="lg-check">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6.5L4.5 9L10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg-divider" />

        {/* Optional */}
        <div className="lg-block">
          <p className="lg-block-label lg-block-label--optional">{t.optionalLabel}</p>
          <ul className="lg-list">
            {t.optional.map((item, i) => (
              <li key={i} className="lg-list-item lg-list-item--optional">
                <span className="lg-plus">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button className="lg-cta" onClick={handleOrder}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {t.cta}
        </button>

        <div className="lg-glow-corner" />
      </div>
    </section>
  )
}
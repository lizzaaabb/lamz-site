'use client'
import React, { useState } from 'react'
import { useLang } from '../../../components/LanguageContext'
import './Basic.css'

const WHATSAPP_NUMBER = '995574065469'

const TEXT = {
  en: {
    pre: 'Our Services',
    title: 'Basic Branding',
    price: '1100₾',
    priceNote: '+600₾ for full Georgian adaptation',
    desc: 'A complete visual foundation for businesses that want a professional and cohesive online presence.',
    includesLabel: 'Includes',
    includes: [
      'Logo design',
      'Brand color palette',
      'Font system',
      'Logo variations',
      'Basic branding guidelines',
      'Visual direction and style references',
      'Website-oriented identity setup',
      'Recommendations for how the brand should look online',
      'Consistent design direction for future website and content creation',
    ],
    note: 'This package helps create a stronger and more professional-looking website experience from the start.',
    optionalLabel: 'Optional',
    optional: [
      'Georgian logo + Georgian typography system: +600₾',
    ],
    cta: 'Order',
  },
  ka: {
    pre: 'ჩვენი სერვისები',
    title: 'საბაზისო ბრენდინგი',
    price: '1100₾',
    priceNote: '+600₾ სრული ქართული ადაპტაციისთვის',
    desc: 'სრული ვიზუალური საფუძველი ბიზნესებისთვის, რომლებსაც სურთ პროფესიონალური და თანმიმდევრული ონლაინ სახე.',
    includesLabel: 'მოიცავს',
    includes: [
      'ლოგოს დიზაინი',
      'ბრენდის ფერთა პალიტრა',
      'შრიფტების სისტემა',
      'ლოგოს ვარიანტები',
      'საბაზისო ბრენდინგის სახელმძღვანელო',
      'ვიზუალური მიმართულება და სტილის მაგალითები',
      'ვებსაიტზე ორიენტირებული იდენტობის გამართვა',
      'რეკომენდაციები ბრენდის ონლაინ გარეგნობისთვის',
      'თანმიმდევრული დიზაინის მიმართულება მომავალი ვებსაიტისა და კონტენტისთვის',
    ],
    note: 'ეს პაკეტი ეხმარება შექმნას უფრო ძლიერი და პროფესიონალური ვებსაიტის გამოცდილება თავიდანვე.',
    optionalLabel: 'დამატებით',
    optional: [
      'ქართული ლოგო + ქართული ტიპოგრაფიის სისტემა: +600₾',
    ],
    cta: 'შეკვეთა',
  },
}

export default function Basic() {
  const { lang } = useLang()
  const t = TEXT[lang]
  const [hovered, setHovered] = useState(null)

  const handleOrder = () => {
    const msg = lang === 'ka'
      ? 'გამარჯობა, მინდა შევუკვეთო საბაზისო ბრენდინგი'
      : 'Hello, I would like to order Basic Branding'
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section className={`bb-section${lang === 'ka' ? ' bb-section--ka' : ''}`}>
      <div className="bb-header">
        <span className="bb-pre">{t.pre}</span>
        <h2 className="bb-title">{t.title}</h2>
      </div>

      <div className="bb-card">
        <div className="bb-accent-bar" />

        <div className="bb-price-wrap">
          <span className="bb-price">{t.price}</span>
          <span className="bb-price-note">{t.priceNote}</span>
        </div>

        <p className="bb-desc">{t.desc}</p>

        <div className="bb-divider" />

        <div className="bb-block">
          <p className="bb-block-label">{t.includesLabel}</p>
          <ul className="bb-list">
            {t.includes.map((item, i) => (
              <li
                key={i}
                className={`bb-list-item${hovered === i ? ' hovered' : ''}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="bb-check">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6.5L4.5 9L10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {t.note && (
          <p className="bb-note">{t.note}</p>
        )}

        <div className="bb-divider" />

        <div className="bb-block">
          <p className="bb-block-label bb-block-label--optional">{t.optionalLabel}</p>
          <ul className="bb-list">
            {t.optional.map((item, i) => (
              <li key={i} className="bb-list-item bb-list-item--optional">
                <span className="bb-plus">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button className="bb-cta" onClick={handleOrder}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {t.cta}
        </button>

        <div className="bb-glow-corner" />
      </div>
    </section>
  )
}
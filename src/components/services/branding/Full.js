'use client'
import React, { useState } from 'react'
import { useLang } from '../../../components/LanguageContext'
import './Full.css'

const WHATSAPP_NUMBER = '995574065469'

const TEXT = {
  en: {
    pre: 'Our Services',
    title: 'Full Brandbook',
    price: '1700₾',
    priceNote: '+800₾ for bilingual system',
    desc: 'A full professional identity system designed for businesses that want a polished, scalable, and highly consistent brand across websites, social media, print, packaging, and marketing.',
    includesLabel: 'Includes everything from Basic Branding, plus',
    includes: [
      'Full brand guidelines',
      'Logo usage rules',
      'Web and print usage examples',
      'Typography hierarchy',
      'Color usage system',
      'Brand style breakdown',
      'Photography and visual direction',
      "Examples of what fits and doesn't fit the brand",
      'Layout and spacing principles',
      'Clear identity system for future designers and developers',
    ],
    note: 'Perfect for businesses building a serious online presence and long-term brand consistency.',
    optionalLabel: 'Optional',
    optional: [
      'Full English + Georgian brand system: +800₾',
    ],
    cta: 'Order',
  },
  ka: {
    pre: 'ჩვენი სერვისები',
    title: 'სრული ბრენდბუქი',
    price: '1700₾',
    priceNote: '+800₾ ორენოვანი სისტემისთვის',
    desc: 'სრული პროფესიონალური იდენტობის სისტემა ბიზნესებისთვის, რომლებსაც სურთ გაპრიალებული, მასშტაბირებადი და თანმიმდევრული ბრენდი ვებსაიტებზე, სოციალურ მედიაში, პრინტსა და მარკეტინგში.',
    includesLabel: 'მოიცავს საბაზისო ბრენდინგის ყველაფერს, პლუს',
    includes: [
      'სრული ბრენდის სახელმძღვანელო',
      'ლოგოს გამოყენების წესები',
      'ვებ და პრინტის გამოყენების მაგალითები',
      'ტიპოგრაფიის იერარქია',
      'ფერების გამოყენების სისტემა',
      'ბრენდის სტილის დეტალური ანალიზი',
      'ფოტოგრაფიის და ვიზუალური მიმართულება',
      'მაგალითები — რა ერგება ბრენდს და რა არა',
      'განლაგებისა და გამოსახლების პრინციპები',
      'მკაფიო იდენტობის სისტემა მომავალი დიზაინერებისა და დეველოპერებისთვის',
    ],
    note: 'იდეალურია ბიზნესებისთვის, რომლებიც სერიოზულ ონლაინ სახეს და გრძელვადიან ბრენდის თანმიმდევრულობას აშენებენ.',
    optionalLabel: 'დამატებით',
    optional: [
      'სრული ინგლისური + ქართული ბრენდის სისტემა: +800₾',
    ],
    cta: 'შეკვეთა',
  },
}

export default function Full() {
  const { lang } = useLang()
  const t = TEXT[lang]
  const [hovered, setHovered] = useState(null)

  const handleOrder = () => {
    const msg = lang === 'ka'
      ? 'გამარჯობა, მინდა შევუკვეთო სრული ბრენდბუქი'
      : 'Hello, I would like to order a Full Brandbook'
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section className={`fb-section${lang === 'ka' ? ' fb-section--ka' : ''}`}>
      <div className="fb-header">
        <span className="fb-pre">{t.pre}</span>
        <h2 className="fb-title">{t.title}</h2>
      </div>

      <div className="fb-card">
        <div className="fb-accent-bar" />

        <div className="fb-price-wrap">
          <span className="fb-price">{t.price}</span>
          <span className="fb-price-note">{t.priceNote}</span>
        </div>

        <p className="fb-desc">{t.desc}</p>

        <div className="fb-divider" />

        <div className="fb-block">
          <p className="fb-block-label">{t.includesLabel}</p>
          <ul className="fb-list">
            {t.includes.map((item, i) => (
              <li
                key={i}
                className={`fb-list-item${hovered === i ? ' hovered' : ''}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="fb-check">
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
          <p className="fb-note">{t.note}</p>
        )}

        <div className="fb-divider" />

        <div className="fb-block">
          <p className="fb-block-label fb-block-label--optional">{t.optionalLabel}</p>
          <ul className="fb-list">
            {t.optional.map((item, i) => (
              <li key={i} className="fb-list-item fb-list-item--optional">
                <span className="fb-plus">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button className="fb-cta" onClick={handleOrder}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {t.cta}
        </button>

        <div className="fb-glow-corner" />
      </div>
    </section>
  )
}
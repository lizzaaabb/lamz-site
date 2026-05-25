'use client'
import React from 'react'
import './Video.css'
import { useLang } from '../../../components/LanguageContext'

const CheckIcon = () => (
  <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
    <path d="M1 4L4 7.5L10 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const packagesEn = [
  {
    id: 'essential',
    badge: 'Starter',
    title: 'Essential',
    subtitle: 'Shoot',
    price: '300₾',
    items: [
      '1 filming session',
      '1 edited reel',
      'Creative direction',
      'Raw footage included',
    ],
  },
  {
    id: 'standard',
    badge: 'Popular',
    title: 'Standard',
    subtitle: 'Content Package',
    price: '500₾',
    featured: true,
    items: [
      '1 filming session',
      '2–3 edited short videos',
      'Storytelling approach',
      'Raw footage included',
    ],
  },
  {
    id: 'monthly',
    badge: 'Best Value',
    title: 'Monthly',
    subtitle: 'Content Support',
    price: '1500₾',
    priceNote: '/ month',
    items: [
      '2–4 filming sessions monthly',
      'Ongoing edited content',
      'Raw footage archive',
    ],
  },
  {
    id: 'longform',
    badge: 'Editing',
    title: 'Long-Form',
    subtitle: 'Editing',
    price: 'from 350₾',
    items: [
      'Editing existing footage',
      'Structured storytelling',
      'Sound + pacing',
      'Final export (YouTube / website / promo)',
    ],
  },
  {
    id: 'event',
    badge: 'Events',
    title: 'Event',
    subtitle: 'Coverage',
    price: 'from 700₾',
    items: [
      'Filming during event (live capture)',
      'Aftermovie + highlight reel (1–3 videos)',
      'Atmosphere + key moments',
      'Raw footage delivery',
    ],
  },
  {
    id: 'story',
    badge: 'Social',
    title: 'Story',
    subtitle: 'Promotion',
    price: '150₾',
    items: [
      '3+ Instagram story frames',
      'Natural integration',
      'Organic recommendation style',
    ],
  },
]

const packagesKa = [
  {
    id: 'essential',
    badge: 'საწყისი',
    title: 'Essential',
    subtitle: 'გადაღება',
    price: '300₾',
    items: [
      '1 გადაღების სესია',
      '1 რილსი',
      'კრეატიული მიმართულება',
      'ნედლი მასალა შედის',
    ],
  },
  {
    id: 'standard',
    badge: 'პოპულარული',
    title: 'Standard',
    subtitle: 'კონტენტ პაკეტი',
    price: '500₾',
    featured: true,
    items: [
      '1 გადაღების სესია',
      '2–3 დამონტაჟებული მოკლე ვიდეო',
      'სტორითელინგი',
      'ნედლი მასალა შედის',
    ],
  },
  {
    id: 'monthly',
    badge: 'საუკეთესო ფასი',
    title: 'monthly',
    subtitle: 'კონტენტ მხარდაჭერა',
    price: '1500₾',
    priceNote: '/ თვეში',
    items: [
      'თვეში 2–4 გადაღების სესია',
      'მიმდინარე მონტაჟი',
      'ნედლი მასალის არქივი',
    ],
  },
  {
    id: 'longform',
    badge: 'მონტაჟი',
    title: 'long-form',
    subtitle: 'მონტაჟი',
    price: '350₾-დან',
    items: [
      'არსებული მასალის მონტაჟი',
      'სტრუქტურირებული სტორითელინგი',
      'ხმა + რიტმი',
      'საბოლოო ექსპორტი (YouTube / საიტი / პრომო)',
    ],
  },
  {
    id: 'event',
    badge: 'ივენთები',
    title: 'event',
    subtitle: 'გაშუქება',
    price: '700₾-დან',
    items: [
      'გადაღება ივენთის დროს',
      'აფთერმუვი + ჰაილაითი (1–3 ვიდეო)',
      'ატმოსფერო + მთავარი მომენტები',
      'ნედლი მასალის გადაცემა',
    ],
  },
  {
    id: 'story',
    badge: 'სოციალური',
    title: 'story',
    subtitle: 'პრომოუშენი',
    price: '150₾',
    items: [
      '3+ Instagram სთორის ფრეიმი',
      'ბუნებრივი ინტეგრაცია',
      'პირადი გამოცდილების გაზიარების სტილში',
    ],
  },
]

const perfectForEn = [
  'cafes & restaurants',
  'Airbnbs & hotels',
  'events & retreats',
  'personal brands',
  'coaches & creators',
  'creative spaces',
]

const perfectForKa = [
  'კაფეები და რესტორნები',
  'Airbnb და სასტუმროები',
  'ივენთები და რეთრითები',
  'პერსონალური ბრენდები',
  'ქოუჩები და კრეატორები',
  'კრეატიული სივრცეები',
]

function Video() {
  const { lang } = useLang()
  const isKa = lang === 'ka'
  const packages = isKa ? packagesKa : packagesEn
  const perfectFor = isKa ? perfectForKa : perfectForEn

  return (
    <div className={`vid-section${isKa ? ' vid-section--ka' : ''}`}>
      <div className="vid-header">
        <p className="vid-pre">
          {isKa ? 'კონტენტის შექმნა · ვიდეოგრაფია' : 'Content Creation · Videography'}
        </p>
        <h2 className="vid-title">
          {isKa ? 'ჩვენი პაკეტები' : 'Our Packages'}
        </h2>
        <p className="vid-subtitle">
          {isKa ? 'ვიღებთ კადრებს, რომლებიც ბრენდს აცოცხლებს' : 'We create atmosphere people want to experience.'}
        </p>
        <div className="vid-for">
          {perfectFor.map((item) => (
            <span key={item} className="vid-for-pill">{item}</span>
          ))}
        </div>
      </div>

      <div className="vid-grid">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`vid-card${pkg.featured ? ' vid-card--featured' : ''}`}
          >
            <div className="vid-accent-bar" />
            <div className="vid-glow" />

            {pkg.badge && (
              <div className="vid-badge">{pkg.badge}</div>
            )}

            <h3 className="vid-card-title">{pkg.title}</h3>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginBottom: '12px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {pkg.subtitle}
            </p>

            <div className="vid-price-wrap">
              <span className="vid-price">{pkg.price}</span>
              {pkg.priceNote && (
                <span className="vid-price-note">{pkg.priceNote}</span>
              )}
            </div>

            <div className="vid-divider" />

            <ul className="vid-list">
              {pkg.items.map((item, idx) => (
                <li key={idx} className="vid-list-item">
                  <span className="vid-check"><CheckIcon /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Video
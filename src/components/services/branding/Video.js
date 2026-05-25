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

  const waText = isKa
    ? 'გამარჯობა! მინდა ვიდეო პაკეტის შეკვეთა'
    : 'Hello! I would like to order a video package'

  const waLink = `https://wa.me/995574065469?text=${encodeURIComponent(waText)}`

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

      {/* WhatsApp CTA */}
      <div className="vid-wa-wrap">
        
       <a href={waLink}
  target="_blank"
  rel="noopener noreferrer"
  className="vid-wa-btn"
>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {isKa ? 'შესაკვეთად დაგვიკავშირდით' : 'Contact us to place an order'}
        </a>
      </div>
    </div>
  )
}

export default Video
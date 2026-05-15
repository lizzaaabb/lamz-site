'use client'
import React, { useState, useEffect } from 'react'
import { useLang } from '../LanguageContext'
import './WebDevelopment.css'

const building = '/icons/building.png'
const catalogue = '/icons/catalogue.png'
const corp = '/icons/corp.png'
const custom = '/icons/custom.png'
const ecommerce = '/icons/ecommerce.png'
const plane = '/icons/plane.png'
const car = '/icons/car.png'

const corp1 = '/corp/corp1.jpg'
const corp2 = '/corp/corp2.jpg'
const corp3 = '/corp/corp3.jpg'

const car1 = '/car/car1.jpg'
const car2 = '/car/car2.jpg'
const car3 = '/car/car3.jpg'

const estate1 = '/estate/estate1.jpg'
const estate2 = '/estate/estate2.jpg'
const estate3 = '/estate/estate3.jpg'

const travel1 = '/travel/travel1.jpg'
const travel2 = '/travel/travel2.jpg'
const travel3 = '/travel/travel3.jpg'

const shop1 = '/shop/shop1.jpg'
const shop2 = '/shop/shop2.jpg'
const shop3 = '/shop/shop3.jpg'

const cat1 = '/cat/cat1.jpg'
const cat2 = '/cat/cat2.jpg'
const cat3 = '/cat/cat3.jpg'

const dev1 = '/dev/dev1.jpg'
const dev2 = '/dev/dev2.jpg'
const dev3 = '/dev/dev3.jpg'

const TILES = {
  en: [
    {
      label: 'Corporate Websites',
      sub: 'Polished brand presence that converts',
      slug: 'business-website-development',
      imgs: [corp1, corp2, corp3],
      accent: '#6366f1',
      icon: corp,
    },
    {
      label: 'E-Commerce Solutions',
      sub: 'Shops built to sell, 24/7',
      slug: 'ecommerce-development',
      imgs: [shop1, shop2, shop3],
      accent: '#ec4899',
      icon: ecommerce,
    },
    {
      label: 'Real Estate Platforms',
      sub: 'Listings, maps & lead capture',
      slug: 'real-estate-platforms',
      imgs: [estate1, estate2, estate3],
      accent: '#10b981',
      icon: building,
    },
    {
      label: 'Car Rental Systems',
      sub: 'Fleet management & booking flows',
      slug: 'car-rental-systems',
      imgs: [car1, car2, car3],
      accent: '#f59e0b',
      icon: car,
    },
    {
      label: 'Tourism & Travel',
      sub: 'Destinations that inspire adventure',
      slug: 'tourism-travel-websites',
      imgs: [travel1, travel2, travel3],
      accent: '#06b6d4',
      icon: plane,
    },
    {
      label: 'Product Catalogs',
      sub: 'Showcase every SKU beautifully',
      slug: 'product-catalog-websites',
      imgs: [cat1, cat2, cat3],
      accent: '#8b5cf6',
      icon: catalogue,
    },
    {
      label: 'Custom Web Apps',
      sub: 'Tailored platforms, zero compromise',
      slug: 'custom-web-applications',
      imgs: [dev1, dev2, dev3],
      accent: '#ef4444',
      icon: custom,
    },
  ],
  ka: [
    {
      label: 'ბიზნეს ვებსაიტების შექმნა',
      sub: 'ბრენდი, რომელიც გაყიდავს',
      slug: 'business-website-development',
      imgs: [corp1, corp2, corp3],
      accent: '#6366f1',
      icon: corp,
    },
    {
      label: 'ონლაინ მაღაზიების შექმნა',
      sub: 'მაღაზია, რომელიც 24/7 ყიდის',
      slug: 'ecommerce-development',
      imgs: [shop1, shop2, shop3],
      accent: '#ec4899',
      icon: ecommerce,
    },
    {
      label: 'უძრავი ქონების ვებსაიტები',
      sub: 'განცხადებები, რუქები და ლიდები',
      slug: 'real-estate-platforms',
      imgs: [estate1, estate2, estate3],
      accent: '#10b981',
      icon: building,
    },
    {
      label: 'მანქანების გაქირავება',
      sub: 'ფლოტი და ჯავშნის სისტემები',
      slug: 'car-rental-systems',
      imgs: [car1, car2, car3],
      accent: '#f59e0b',
      icon: car,
    },
    {
      label: 'ტურისტული ვებსაიტები',
      sub: 'დანიშნულებები, რომლებიც გაუბიძგებს',
      slug: 'tourism-travel-websites',
      imgs: [travel1, travel2, travel3],
      accent: '#06b6d4',
      icon: plane,
    },
    {
      label: 'ონლაინ კატალოგის ვებსაიტები',
      sub: 'ყველა პროდუქტი — ლამაზად',
      slug: 'product-catalog-websites',
      imgs: [cat1, cat2, cat3],
      accent: '#8b5cf6',
      icon: catalogue,
    },
    {
      label: 'ინდივიდუალური ვებ პლატფორმები',
      sub: 'მორგებული პლატფორმა, ნულოვანი კომპრომისი',
      slug: 'custom-web-applications',
      imgs: [dev1, dev2, dev3],
      accent: '#ef4444',
      icon: custom,
    },
  ],
}

const TEXT = {
  en: { pre: 'What We Build', title: 'Web Development' },
  ka: { pre: 'რას ვქმნით', title: 'ვებ გვერდის დამზადება' },
}

function useSlideshow(imgs, interval = 3500) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % imgs.length), interval)
    return () => clearInterval(t)
  }, [imgs.length, interval])
  return idx
}

function Tile({ tile, index, areaClass, href }) {
  const slideIdx = useSlideshow(tile.imgs, 3500 + index * 300)
  return (
    <article
      className={`wd-tile ${areaClass}`}
      style={{ '--accent': tile.accent, animationDelay: `${index * 0.08}s` }}
      onClick={() => window.location.href = href}
    >
      <div className="wd-slide-wrap">
        {tile.imgs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`wd-slide-img${i === slideIdx ? ' active' : ''}`}
          />
        ))}
      </div>
      <div className="wd-overlay" />
      <span className="wd-icon">
        {tile.icon.startsWith('/')
          ? <img src={tile.icon} alt="" className="wd-icon-img" />
          : tile.icon}
      </span>
      <div className="wd-info">
        <p className="wd-label">{tile.label}</p>
        <p className="wd-sub">{tile.sub}</p>
      </div>
      <a href={href} className="wd-cta" onClick={e => e.stopPropagation()}>↗</a>
    </article>
  )
}

export default function WebDevelopment() {
  const { lang, prefix } = useLang()
  const t = TEXT[lang]
  const tiles = TILES[lang]
  const areas = ['t0', 't1', 't2', 't3', 't4', 't5', 't6']

  return (
    <section className={`wd-section${lang === 'ka' ? ' wd-section--ka' : ''}`}>
      <div className="wd-header">
        <span className="wd-pre">{t.pre}</span>
        <h2 className="wd-title">{t.title}</h2>
      </div>
      <div className="wd-bento">
        {tiles.map((tile, i) => (
          <Tile
            key={tile.label}
            tile={tile}
            index={i}
            areaClass={areas[i]}
            href={`${prefix}/${tile.slug}`}
          />
        ))}
      </div>
    </section>
  )
}
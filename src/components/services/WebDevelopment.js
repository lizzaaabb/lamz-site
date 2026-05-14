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

const TILES = {
  en: [
    {
      label: 'Corporate Websites',
      sub: 'Polished brand presence that converts',
      imgs: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      ],
      accent: '#6366f1',
      icon: corp,
    },
    {
      label: 'E-Commerce Solutions',
      sub: 'Shops built to sell, 24/7',
      imgs: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
      ],
      accent: '#ec4899',
      icon: ecommerce,
    },
    {
      label: 'Real Estate Platforms',
      sub: 'Listings, maps & lead capture',
      imgs: [
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      ],
      accent: '#10b981',
      icon: building,
    },
    {
      label: 'Car Rental Systems',
      sub: 'Fleet management & booking flows',
      imgs: [
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
        'https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80',
      ],
      accent: '#f59e0b',
      icon: car,
    },
    {
      label: 'Tourism & Travel',
      sub: 'Destinations that inspire adventure',
      imgs: [
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
        'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80',
        'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80',
      ],
      accent: '#06b6d4',
      icon: plane,
    },
    {
      label: 'Product Catalogs',
      sub: 'Showcase every SKU beautifully',
      imgs: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      ],
      accent: '#8b5cf6',
      icon: catalogue,
    },
    {
      label: 'Custom Web Apps',
      sub: 'Tailored platforms, zero compromise',
      imgs: [
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
      ],
      accent: '#ef4444',
      icon: custom,
    },
  ],
  ka: [
    {
      label: 'ბიზნეს ვებსაიტების შექმნა',
      sub: 'ბრენდი, რომელიც გაყიდავს',
      imgs: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      ],
      accent: '#6366f1',
      icon: corp,
    },
    {
      label: 'ონლაინ მაღაზიების შექმნა',
      sub: 'მაღაზია, რომელიც 24/7 ყიდის',
      imgs: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
      ],
      accent: '#ec4899',
      icon: ecommerce,
    },
    {
      label: 'უძრავი ქონების ვებსაიტები',
      sub: 'განცხადებები, რუქები და ლიდები',
      imgs: [
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      ],
      accent: '#10b981',
      icon: building,
    },
    {
      label: 'მანქანების გაქირავება',
      sub: 'ფლოტი და ჯავშნის სისტემები',
      imgs: [
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
        'https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80',
      ],
      accent: '#f59e0b',
      icon: car,
    },
    {
      label: 'ტურისტული ვებსაიტები',
      sub: 'დანიშნულებები, რომლებიც გაუბიძგებს',
      imgs: [
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
        'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80',
        'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80',
      ],
      accent: '#06b6d4',
      icon: plane,
    },
    {
      label: 'ონლაინ კატალოგის ვებსაიტები',
      sub: 'ყველა პროდუქტი — ლამაზად',
      imgs: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      ],
      accent: '#8b5cf6',
      icon: catalogue,
    },
    {
      label: 'ინდივიდუალური ვებ პლატფორმები',
      sub: 'მორგებული პლატფორმა, ნულოვანი კომპრომისი',
      imgs: [
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
      ],
      accent: '#ef4444',
      icon: custom,
    },
  ],
}

const TEXT = {
  en: { pre: 'What We Build', title: 'Web Development' },
  ka: { pre: 'რას ვქმნით', title: 'ვებ დეველოპმენტი' },
}

function useSlideshow(imgs, interval = 3500) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % imgs.length), interval)
    return () => clearInterval(t)
  }, [imgs.length, interval])
  return idx
}

function Tile({ tile, index, areaClass }) {
  const slideIdx = useSlideshow(tile.imgs, 3500 + index * 300)
  return (
    <article
      className={`wd-tile ${areaClass}`}
      style={{ '--accent': tile.accent, animationDelay: `${index * 0.08}s` }}
    >
      <div className="wd-slide-wrap">
        {tile.imgs.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`wd-slide-img${i === slideIdx ? ' active' : ''}`}
            loading="lazy"
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
      <button className="wd-cta">↗</button>
    </article>
  )
}

export default function WebDevelopment() {
  const { lang } = useLang()
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
          />
        ))}
      </div>
    </section>
  )
}
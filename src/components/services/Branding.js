'use client'
import React, { useState, useEffect } from 'react'
import { useLang } from '../LanguageContext'
import './Branding.css'

const corp1 = '/branding/b1.jpg'
const corp2 = '/branding/b2.jpg'
const corp3 = '/branding/b3.jpg'
const shop1 = '/branding/l1.PNG'
const shop2 = '/branding/l2.PNG'
const shop3 = '/branding/l3.PNG'
const estate1 = '/branding/full1.jpg'
const estate2 = '/branding/full2.jpg'
const estate3 = '/branding/full3.jpg'
const travel1 = '/branding/vid1.jpg'
const travel2 = '/branding/vid2.jpg'
const travel3 = '/branding/vid3.jpg'

const icon1 = '/branding/br1.png'
const icon2 = '/branding/br2.png'
const icon3 = '/branding/br3.png'
const icon4 = '/branding/br4.png'

const TILES = {
  en: [
    {
      label: 'Logo Design',
      sub: 'Memorable marks that last',
      slug: 'logo',
      imgs: [shop1, shop2, shop3],
      accent: '#f59e0b',
      icon: icon1,
    },
    {
      label: 'Basic Branding',
      sub: 'Colors, fonts & brand guidelines',
      slug: 'basic-branding',
      imgs: [corp1, corp2, corp3],
      accent: '#6366f1',
      icon: icon2,
    },
    {
      label: 'Full Brandbook',
      sub: 'Complete identity system',
      slug: 'full-brandbook',
      imgs: [estate1, estate2, estate3],
      accent: '#10b981',
      icon: icon3,
    },
    {
      label: 'Video Production',
      sub: 'Filming & editing that captivates',
      slug: 'video-production',
      imgs: [travel1, travel2, travel3],
      accent: '#ec4899',
      icon: icon4,
    },
  ],
  ka: [
    {
      label: 'ლოგოს დიზაინი',
      sub: 'დასამახსოვრებელი ნიშნები',
      slug: 'logo',
      imgs: [shop1, shop2, shop3],
      accent: '#f59e0b',
      icon: icon1,
    },
    {
      label: 'საბაზისო ბრენდინგი',
      sub: 'საბაზისო ბრენდის იდენტობა',
      slug: 'basic-branding',
      imgs: [corp1, corp2, corp3],
      accent: '#6366f1',
      icon: icon2,
    },
    {
      label: 'სრული ბრენდბუქი',
      sub: 'ბრენდის იდენტობის სრული სისტემა',
      slug: 'full-brandbook',
      imgs: [estate1, estate2, estate3],
      accent: '#10b981',
      icon: icon3,
    },
    {
      label: 'ვიდეოს გადაღება/მონტაჟი',
      sub: 'ვიდეო, რომელიც ყურადღებას იქცევს',
      slug: 'video-production',
      imgs: [travel1, travel2, travel3],
      accent: '#ec4899',
      icon: icon4,
    },
  ],
}

const TEXT = {
  en: { pre: 'What We Do', title: 'Branding' },
  ka: { pre: 'რას ვაკეთებთ', title: 'ბრენდინგი' },
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
      className={`br-tile ${areaClass}`}
      style={{ '--accent': tile.accent, animationDelay: `${index * 0.08}s` }}
      onClick={() => window.location.href = href}
    >
      <div className="br-slide-wrap">
        {tile.imgs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`br-slide-img${i === slideIdx ? ' active' : ''}`}
          />
        ))}
      </div>
      <div className="br-overlay" />
      <span className="br-icon">
        <img src={tile.icon} alt="" className="br-icon-img" />
      </span>
      <div className="br-info">
        <p className="br-label">{tile.label}</p>
        <p className="br-sub">{tile.sub}</p>
      </div>
      <a href={href} className="br-cta" onClick={e => e.stopPropagation()}>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </article>
  )
}

export default function Branding() {
  const { lang, prefix } = useLang()
  const t = TEXT[lang]
  const tiles = TILES[lang]
  const areas = ['b0', 'b1', 'b2', 'b3']

  return (
    <section className={`br-section${lang === 'ka' ? ' br-section--ka' : ''}`}>
      <div className="br-header">
        <span className="br-pre">{t.pre}</span>
        <h2 className="br-title">{t.title}</h2>
      </div>
      <div className="br-bento">
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
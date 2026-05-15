'use client'
import React, { useState, useEffect } from 'react'
import { useLang } from '../LanguageContext'
import './Marketing.css'

const corp1 = '/corp/corp1.jpg'
const corp2 = '/corp/corp2.jpg'
const corp3 = '/corp/corp3.jpg'
const shop1 = '/shop/shop1.jpg'
const shop2 = '/shop/shop2.jpg'
const shop3 = '/shop/shop3.jpg'
const estate1 = '/estate/estate1.jpg'
const estate2 = '/estate/estate2.jpg'
const estate3 = '/estate/estate3.jpg'
const travel1 = '/travel/travel1.jpg'
const travel2 = '/travel/travel2.jpg'
const travel3 = '/travel/travel3.jpg'
const cat1 = '/cat/cat1.jpg'
const cat2 = '/cat/cat2.jpg'
const cat3 = '/cat/cat3.jpg'
const dev1 = '/dev/dev1.jpg'
const dev2 = '/dev/dev2.jpg'
const dev3 = '/dev/dev3.jpg'

const TILES = {
  en: [
    {
      label: 'Facebook & Instagram Ads',
      sub: 'Social campaigns that convert',
      imgs: [shop1, shop2, shop3],
      accent: '#6366f1',
      icon: '📱',
    },
    {
      label: 'Google Ads (PPC)',
      sub: 'Top of search, every time',
      imgs: [corp1, corp2, corp3],
      accent: '#10b981',
      icon: '🎯',
    },
    {
      label: 'SEO Optimization',
      sub: 'Rank higher, get found faster',
      imgs: [estate1, estate2, estate3],
      accent: '#f59e0b',
      icon: '🔍',
    },
    {
      label: 'Google Business Setup',
      sub: 'Email setup, hosting',
      imgs: [travel1, travel2, travel3],
      accent: '#ec4899',
      icon: '✍️',
    },
    {
      label: 'Video Production',
      sub: 'Filming & editing that captivates',
      imgs: [dev1, dev2, dev3],
      accent: '#06b6d4',
      icon: '🎬',
    },
    {
      label: 'SEO Blog Writing',
      sub: 'Authority content, consistently',
      imgs: [cat1, cat2, cat3],
      accent: '#8b5cf6',
      icon: '📝',
    },
  ],
  ka: [
    {
      label: 'Facebook & Instagram რეკლამები',
      sub: 'სოციალური კამპანიები, რომლებიც ყიდიან',
      imgs: [shop1, shop2, shop3],
      accent: '#6366f1',
      icon: '📱',
    },
    {
      label: 'Google რეკლამები (PPC)',
      sub: 'საძიებლის სათავეში, ყოველთვის',
      imgs: [corp1, corp2, corp3],
      accent: '#10b981',
      icon: '🎯',
    },
    {
      label: 'SEO ოპტიმიზაცია',
      sub: 'მაღალი პოზიციები საძიებლებში',
      imgs: [estate1, estate2, estate3],
      accent: '#f59e0b',
      icon: '🔍',
    },
    {
      label: 'Google Business-ის გამართვა',
      sub: 'ტექსტი, რომელიც რეიტინგს ზრდის',
      imgs: [travel1, travel2, travel3],
      accent: '#ec4899',
      icon: '✍️',
    },
    {
      label: 'ვიდეოს გადაღება/მონტაჟი',
      sub: 'ვიდეო, რომელიც ყურადღებას იქცევს',
      imgs: [dev1, dev2, dev3],
      accent: '#06b6d4',
      icon: '🎬',
    },
    {
      label: 'SEO ბლოგის შექმნა',
      sub: 'ავტორიტეტული კონტენტი, რეგულარულად',
      imgs: [cat1, cat2, cat3],
      accent: '#8b5cf6',
      icon: '📝',
    },
  ],
}

const TEXT = {
  en: { pre: 'What We Do', title: 'Marketing' },
  ka: { pre: 'რას ვაკეთებთ', title: 'მარკეტინგი' },
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
      className={`mk-tile ${areaClass}`}
      style={{ '--accent': tile.accent, animationDelay: `${index * 0.08}s` }}
    >
      <div className="mk-slide-wrap">
        {tile.imgs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`mk-slide-img${i === slideIdx ? ' active' : ''}`}
          />
        ))}
      </div>
      <div className="mk-overlay" />
      <span className="mk-icon">{tile.icon}</span>
      <div className="mk-info">
        <p className="mk-label">{tile.label}</p>
        <p className="mk-sub">{tile.sub}</p>
      </div>
      <button className="mk-cta">↗</button>
    </article>
  )
}

export default function Marketing() {
  const { lang } = useLang()
  const t = TEXT[lang]
  const tiles = TILES[lang]
  const areas = ['t0', 't1', 't2', 't3', 't4', 't5']

  return (
    <section className={`mk-section${lang === 'ka' ? ' mk-section--ka' : ''}`}>
      <div className="mk-header">
        <span className="mk-pre">{t.pre}</span>
        <h2 className="mk-title">{t.title}</h2>
      </div>
      <div className="mk-bento">
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
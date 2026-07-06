'use client'
import React from 'react'
import '../styles/Projects.css'
import { useLang } from '../components/LanguageContext'

const content = {
  ka: {
    title: 'პროექტები',
    projects: [
      { num: '01', name: 'Art Of Movement', desc: 'ლენდინგ გვერდი', url: 'https://artofmovement.net', img: '/mock11.jpg' },
      { num: '02', name: 'Your Hood', desc: 'ონლაინ მაღაზია', url: 'https://yourhood.ge/', img: '/mockup2.jpg' },
      { num: '03', name: 'Utopia VIP Tourism', desc: 'ტურისტული კომპანია', url: 'https://www.utopiaviptravel.com/', img: '/mockup.jpg' },
    ],
    more: 'იხილეთ პროექტები',
    viewSite: 'საიტის ნახვა',
  },
  en: {
    title: 'Projects',
    projects: [
      { num: '01', name: 'Art Of Movement', desc: 'Landing Page', url: 'https://artofmovement.net', img: '/mock11.jpg' },
      { num: '02', name: 'Your Hood', desc: 'Online Shop', url: 'https://yourhood.ge/', img: '/mockup2.jpg' },
      { num: '03', name: 'Utopia VIP Tourism', desc: 'Tourism Company', url: 'https://www.utopiaviptravel.com/', img: '/mockup.jpg' },
    ],
    more: 'More projects',
    viewSite: 'View site',
  },
}

function Projects() {
  const { lang, prefix } = useLang()
  const t = content[lang]

  return (
    <div className={`projects-container projects-container--${lang}`}>
      <div className="pj-header">
        <h2 className="pj-section-title">{t.title}</h2>
      </div>
      <div className="pj-grid">
        {t.projects.map((p, i) => (
          <div key={i} className="pj-card">
            <img
              src={p.img}
              alt={p.name}
              className="pj-image"
              loading="lazy"
              style={i === 1 || i === 2 ? { transform: 'scale(1.05)', transformOrigin: 'center top' } : undefined}
            />
            <div className="pj-fade" />
            <div className="pj-card-number">{p.num}</div>
            <div className="pj-info">
              <p className="pj-name">{p.name}</p>
              <span className="pj-badge">
                <span className="pj-dot" />
                {p.desc}
              </span>
            </div>
            <div className="pj-hover-overlay">
              <a className="pj-view-btn" href={p.url} target="_blank" rel="noopener noreferrer">
                {t.viewSite} →
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="pj-more-wrap">
        <a href={`${prefix}/projects`} className="pj-more-btn">
          {t.more}
        </a>
      </div>
    </div>
  )
}

export default Projects
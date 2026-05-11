'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/Blog.css'
import { useLang } from '../components/LanguageContext'

const content = {
  ka: {
    preTag: 'სტატიები',
    title: 'ბლოგი',
    posts: [
      {
        num: '01',
        tag: 'დიზაინი',
        date: '12 მაისი, 2025',
        title: 'რატომ არის პირველი შთაბეჭდილება ყველაფერი',
        desc: 'თქვენი საიტის ვიზიტორი 3 წამში წყვეტს — დარჩეს თუ გადავიდეს. გაიგეთ, როგორ ქმნის სწორი დიზაინი ნდობას.',
        readTime: '4 წუთი',
      },
      {
        num: '02',
        tag: 'SEO',
        date: '28 აპრილი, 2025',
        title: 'ვორდპრესი VS Next.js - რატომ არის Next.js უკეთესი თქვენი ბიზნესისთვის',
        desc: 'Google-ის ალგორითმი სულ უფრო ჭკვიანდება. გაიგეთ, რომელი ფაქტორები განსაზღვრავს პოზიციას დღეს.',
        readTime: '6 წუთი',
      },
      {
        num: '03',
        tag: 'ბიზნესი',
        date: '10 აპრილი, 2025',
        title: '5 მიზეზი თუ რატომ სჭირდება თქვენს ბიზნესს ვებსაიტი',
        desc: 'ბევრი ბიზნესი იხდის მეტს ვიდრე სჭირდება. გაიგეთ სხვაობა და აირჩიეთ სწორი გადაწყვეტა.',
        readTime: '5 წუთი',
      },
    ],
    readMore: 'სრულად წაკითხვა →',
  },
  en: {
    preTag: 'Articles',
    title: 'Blog',
    posts: [
      {
        num: '01',
        tag: 'Design',
        date: 'May 12, 2025',
        title: 'Why First Impressions Are Everything',
        desc: 'Your visitor decides in 3 seconds whether to stay or leave. Learn how the right design builds instant trust.',
        readTime: '4 min read',
      },
      {
        num: '02',
        tag: 'SEO',
        date: 'April 28, 2025',
        title: 'Wordpress VS Next.js - Why Next.js is Better for Your Business',
        desc: "Google's algorithm keeps getting smarter. Find out which factors actually determine your ranking today.",
        readTime: '6 min read',
      },
      {
        num: '03',
        tag: 'Business',
        date: 'April 10, 2025',
        title: '5 Reasons Why Your Business Needs a Website',
        desc: 'Many businesses overpay for features they never use. Learn the difference and choose the right solution.',
        readTime: '5 min read',
      },
    ],
    readMore: 'Read more →',
  },
}

function Blog() {
  const { lang } = useLang()
  const t = content[lang] || content['en']
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.fromTo(
          '.bl-pre-tag, .bl-title',
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: '.bl-header', start: 'top 88%', toggleActions: 'play none none none' } }
        )
        gsap.fromTo(
          '.bl-card',
          { opacity: 0, y: 48 },
          {
            scrollTrigger: { trigger: '.bl-grid', start: 'top 85%', toggleActions: 'play none none none' },
            opacity: 1, y: 0, duration: 0.85, stagger: 0.15, ease: 'power3.out',
          }
        )
      }, containerRef)
    }
    init()
    return () => ctx && ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className={`bl-container bl-container--${lang}`}>

      {/* ── HEADER ── */}
      <div className="bl-header">
        <p className="bl-pre-tag">{t.preTag}</p>
        <h2 className="bl-title">{t.title}</h2>
      </div>

      {/* ── GRID ── */}
      <div className="bl-grid">
        {t.posts.map((p, i) => (
          <div key={i} className="bl-card">
            <div className="bl-card-top">
              <span className="bl-tag">{p.tag}</span>
              <span className="bl-num">{p.num}</span>
            </div>
            <div className="bl-card-body">
              <p className="bl-date">{p.date}</p>
              <h3 className="bl-post-title">{p.title}</h3>
              <p className="bl-desc">{p.desc}</p>
            </div>
            <div className="bl-card-footer">
              <span className="bl-read-time">{p.readTime}</span>
              <a href="#" className="bl-read-more">{t.readMore}</a>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Blog
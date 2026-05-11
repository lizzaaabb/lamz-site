'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/Blog.css'
import { useLang } from '../components/LanguageContext'
import Blog1, { blogContentKa, blogContentEn } from '../components/Blog1'

const content = {
  ka: {
    preTag: 'სტატიები',
    title: 'ბლოგი',
    posts: [
      {
        num: '01',
        tag: blogContentKa.category,
        date: blogContentKa.date,
        title: blogContentKa.title,
        desc: 'თქვენი საიტის ვიზიტორი 3 წამში წყვეტს — დარჩეს თუ გადავიდეს. გაიგეთ, როგორ ქმნის სწორი დიზაინი ნდობას.',
        readTime: blogContentKa.readTime,
        slug: blogContentKa.slug,
      },
      {
        num: '02',
        tag: 'SEO',
        date: '28 აპრილი, 2025',
        title: 'ვორდპრესი VS Next.js - 5 მიზეზი თუ რატომ არის Next.js უკეთესი თქვენი ბიზნესისთვის',
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
        tag: blogContentEn.category,
        date: blogContentEn.date,
        title: blogContentEn.title,
        desc: 'Your visitor decides in 3 seconds whether to stay or leave. Learn how the right design builds instant trust.',
        readTime: blogContentEn.readTime,
        slug: blogContentEn.slug,
      },
      {
        num: '02',
        tag: 'SEO',
        date: 'April 28, 2025',
        title: 'Wordpress VS Next.js - 5 Reasons Why Next.js is Better for Your Business',
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
  // ✅ useLang() is called INSIDE the function — this is the correct place
  const { lang, prefix } = useLang()
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
              {/* ✅ prefix keeps /ka in the URL when in Georgian mode */}
              <a href={p.slug ? `${prefix}/${p.slug}` : '#'} className="bl-read-more">
                {t.readMore}
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Blog
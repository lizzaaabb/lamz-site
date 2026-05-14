'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/Blog.css'
import { useLang } from '../components/LanguageContext'
import { blogContentKa as blog1Ka, blogContentEn as blog1En } from '../components/Blog1'
import { blogContentKa as blog2Ka, blogContentEn as blog2En } from '../components/Blog2'
import { blogContentKa as blog3Ka, blogContentEn as blog3En } from '../components/Blog3'

const blogPictures = ['blog1.jpg', 'blog2.jpg', 'blog3.jpg']

const content = {
  ka: {
    preTag: 'სტატიები',
    title: 'ბლოგი',
    posts: [
      {
        num: '01',
        tag: blog1Ka.category,
        date: blog1Ka.date,
        title: blog1Ka.title,
        desc: 'ბევრი პროექტი გაუგებარი მოთხოვნების გამო ფერხდება. პროექტის სწრაფად განვითარებისთვის . . 1 .',
        readTime: blog1Ka.readTime,
        slug: blog1Ka.slug,
      },
      {
        num: '02',
        tag: blog2Ka.category,
        date: blog2Ka.date,
        title: blog2Ka.title,
        desc: 'Next.js თუ WordPress? გაიგეთ 5 მთავარი მიზეზი, რის გამოც Next.js უკეთეს შედეგებს იძლევა თქვენი ბიზნესისთვის.',
        readTime: blog2Ka.readTime,
        slug: blog2Ka.slug,
      },
      {
        num: '03',
        tag: blog3Ka.category,
        date: blog3Ka.date,
        title: blog3Ka.title,
        desc: 'ბევრი ბიზნესი კარგავს კლიენტებს იმიტომ, რომ ონლაინ არ ჩანს. გაიგეთ 5 მიზეზი, რის გამოც ვებსაიტი თქვენს ბიზნესს სჭირდება.',
        readTime: blog3Ka.readTime,
        slug: blog3Ka.slug,
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
        tag: blog1En.category,
        date: blog1En.date,
        title: blog1En.title,
        desc: 'Top 5 requirements for a successful website project. Clear goals, detailed specs, and good communication are key to fast development and great results.',
        readTime: blog1En.readTime,
        slug: blog1En.slug,
      },
      {
        num: '02',
        tag: blog2En.category,
        date: blog2En.date,
        title: blog2En.title,
        desc: 'Next.js or WordPress? Learn 5 key reasons why Next.js delivers better speed, SEO and results for your business.',
        readTime: blog2En.readTime,
        slug: blog2En.slug,
      },
      {
        num: '03',
        tag: blog3En.category,
        date: blog3En.date,
        title: blog3En.title,
        desc: 'Many businesses lose customers simply because they are not visible online. Learn 5 reasons why your business needs a website.',
        readTime: blog3En.readTime,
        slug: blog3En.slug,
      },
    ],
    readMore: 'Read more →',
  },
}

function Blog() {
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
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: '.bl-header', start: 'top 88%', toggleActions: 'play none none none' },
          }
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
        {t.posts.map((p, i) => {
          const href = p.slug ? `${prefix}/${p.slug}` : '#'
          return (
            
            <a  key={i}
              href={href}
              className="bl-card"
              style={{ textDecoration: 'none', color: 'inherit', cursor: p.slug ? 'pointer' : 'default' }}
            >
              {/* ── IMAGE ── */}
              <div className="bl-card-img-wrap">
              <img
  src={`/${blogPictures[i]}`}
  alt={p.title}
  className="bl-card-img"
/>
                <div className="bl-card-img-overlay" />
                {/* tag floated over image */}
                <span className="bl-tag bl-tag--over">{p.tag}</span>
              </div>

              <div className="bl-card-body">
                <div className="bl-card-meta">
                  <p className="bl-date">{p.date}</p>
                  <span className="bl-num">{p.num}</span>
                </div>
                <h3 className="bl-post-title">{p.title}</h3>
                <p className="bl-desc">{p.desc}</p>
              </div>

              <div className="bl-card-footer">
                <span className="bl-read-time">{p.readTime}</span>
                <span className="bl-read-more">{t.readMore}</span>
              </div>
            </a>
          )
        })}
      </div>

    </div>
  )
}

export default Blog
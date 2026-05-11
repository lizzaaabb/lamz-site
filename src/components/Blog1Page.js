'use client'
import React, { useEffect, useRef } from 'react'
import { useLang } from '../components/LanguageContext'
import { blogContentKa, blogContentEn } from '../components/Blog1'
import '../styles/BlogPage1.css'

function renderContent(lines) {
  const elements = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="bp-h2">{line.replace('## ', '')}</h2>)
      i++
    } else if (line.startsWith('- ') || line.startsWith('  - ')) {
      const items = []
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('  - '))) {
        if (lines[i].startsWith('  - ')) {
          items.push(<li key={i} className="bp-li bp-li--sub">{lines[i].replace('  - ', '')}</li>)
        } else {
          items.push(<li key={i} className="bp-li">{lines[i].replace('- ', '')}</li>)
        }
        i++
      }
      elements.push(<ul key={`ul-${i}`} className="bp-ul">{items}</ul>)
    } else {
      elements.push(<p key={i} className="bp-p">{line}</p>)
      i++
    }
  }
  return elements
}

function Blog1Page() {
  const { lang } = useLang()
  const post = lang === 'ka' ? blogContentKa : blogContentEn
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.fromTo('.bp-hero-tag, .bp-hero-title, .bp-hero-meta',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
        )
        gsap.fromTo('.bp-body',
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.4 }
        )
      }, containerRef)
    }
    init()
    return () => ctx && ctx.revert()
  }, [])

  const lines = post.content.trim().split('\n').filter(line => line.trim() !== '')

  return (
    <div ref={containerRef} className={`bp-page bp-page--${lang}`}>

      {/* HERO */}
      <div className="bp-hero">
        <span className="bp-hero-tag">{post.category}</span>
        <h1 className="bp-hero-title">{post.title}</h1>
        <div className="bp-hero-meta">
          <span className="bp-hero-date">{post.date}</span>
          <span className="bp-hero-dot" />
          <span className="bp-hero-read">{post.readTime}</span>
        </div>
        <div className="bp-hero-rule" />
      </div>

      {/* BODY */}
      <article className="bp-body">
        {renderContent(lines)}
      </article>

      {/* BACK */}
      <div className="bp-back-wrap">
        <a href="/blog" className="bp-back">
          ← {lang === 'ka' ? 'ბლოგზე დაბრუნება' : 'Back to Blog'}
        </a>
      </div>

    </div>
  )
}

export default Blog1Page
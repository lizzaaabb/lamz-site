'use client'
import React, { useEffect, useRef } from 'react'
import { useLang } from '../../LanguageContext'
import { blogContentKa, blogContentEn } from './BusinessWebBlog'
import './BusinessWeb.css'

// ─── Content renderer ────────────────────────────────────────────────────────
function renderContent(lines, prefix, lang) {
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // h3 — price highlight
    if (line.startsWith('### ')) {
      elements.push(
        <div key={i} className="bw-price-badge">
          {line.replace('### ', '')}
        </div>
      )
      i++

    // h2 — section heading
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="bp-h2">
          {line.replace('## ', '')}
        </h2>
      )
      i++

    // bullet lists (supports sub-items with "  - ")
    } else if (line.startsWith('- ') || line.startsWith('  - ')) {
      const items = []
      while (
        i < lines.length &&
        (lines[i].startsWith('- ') || lines[i].startsWith('  - '))
      ) {
        if (lines[i].startsWith('  - ')) {
          items.push(
            <li key={i} className="bp-li bp-li--sub">
              {lines[i].replace('  - ', '')}
            </li>
          )
        } else {
          items.push(
            <li key={i} className="bp-li">
              {lines[i].replace('- ', '')}
            </li>
          )
        }
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="bp-ul">
          {items}
        </ul>
      )

    // regular paragraph
    } else {
      if (line.trim() !== '') {
        elements.push(
          <p key={i} className="bp-p">
            {line}
          </p>
        )
      }
      i++
    }
  }

  return elements
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function BusinessWeb() {
  const { lang, prefix } = useLang()
  const post = lang === 'ka' ? blogContentKa : blogContentEn
  const containerRef = useRef(null)

  const TEXT = {
    ka: {
      order: 'ვებსაიტის შეკვეთა',
      services: 'სერვისების ნახვა',
      back: 'უკან დაბრუნება',
    },
    en: {
      order: 'Order a Website',
      services: 'View Services',
      back: 'Back',
    },
  }
  const t = TEXT[lang]

  useEffect(() => {
    let ctx
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.fromTo(
          '.bp-hero-tag, .bp-hero-title, .bp-hero-meta, .bw-hero-ctas',
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.1,
          }
        )
        gsap.fromTo(
          '.bp-body',
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.5 }
        )
      }, containerRef)
    }
    init()
    return () => ctx && ctx.revert()
  }, [])

  const lines = post.content
    .trim()
    .split('\n')
    .filter(line => line.trim() !== '')

  return (
    <div
      ref={containerRef}
      className={`bp-page bp-page--${lang}`}
    >
      {/* ── Hero ── */}
      <div className="bp-hero">
        <span className="bp-hero-tag">{post.category}</span>
        <h1 className="bp-hero-title">{post.title}</h1>
        <div className="bp-hero-meta">
          <span className="bp-hero-date">{post.date}</span>
          <span className="bp-hero-dot" />
          <span className="bp-hero-read">{post.readTime}</span>
        </div>
        <div className="bp-hero-rule" />

        {/* ── CTA buttons ── */}
        <div className="bw-hero-ctas">
          <a
            href={`${prefix}/contact`}
            className="cta-btn cta-primary bw-cta"
          >
            <span className="cta-shimmer" />
            {t.order}
          </a>
          <a
            href={`${prefix}/web-development-service`}
            className="cta-btn cta-secondary bw-cta"
          >
            <span className="cta-shimmer" />
            {t.services}
          </a>
        </div>
      </div>

      {/* ── Body ── */}
      <article className="bp-body">
        {renderContent(lines, prefix, lang)}
      </article>
         <div className="bw-hero-ctas" style={{ marginTop: "80px" }}>
          <a
            href={`${prefix}/contact`}
            className="cta-btn cta-primary bw-cta"
          >
            <span className="cta-shimmer" />
            {t.order}
          </a>
          <a
            href={`${prefix}/web-development-service`}
            className="cta-btn cta-secondary bw-cta"
          >
            <span className="cta-shimmer" />
            {t.services}
          </a>
        </div>

      {/* ── Back link ── */}
      <div className="bp-back-wrap">
        <a href={`${prefix}/web-development-service`} className="bp-back">
          ← {t.back}
        </a>
      

      </div>
    </div>
  )
}
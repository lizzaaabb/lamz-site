'use client'
import React, { useRef, useEffect } from 'react'
import '../styles/Customers.css'
import { useLang } from '../components/LanguageContext'

const reviews = [
  {
    name: 'Io IO',
    rating: 5,
    date: '7 weeks ago',
    text: 'They made me a website for my brand and I was amazed by their responsiveness, attention to detail and professionalism. If I ever want another website they are the first people I would turn to 10/10',
    initials: 'IO',
    color: '#a855f7',
    profileUrl: 'https://www.google.com/maps/contrib/101901655188866202714/reviews?hl=en-GB',
  },
  {
    name: 'Mental Formation',
    badge: 'Local Guide',
    rating: 5,
    date: '7 weeks ago',
    text: 'Professionals, with deep sense of style. Super recommend for your brand!!!!!!!!',
    initials: 'MF',
    color: '#67e8f9',
    profileUrl: 'https://www.google.com/maps/contrib/117941736533994726438/reviews?hl=en-GB',
  },
  {
    name: 'Forweb',
    rating: 5,
    date: '7 weeks ago',
    text: 'ძალიან მაგარი საიტია 💕💕 ძალიან დიდი მადლობა',
    initials: 'FW',
    color: '#c084fc',
    profileUrl: 'https://www.google.com/maps/contrib/109010656176008881610/reviews?hl=en-GB',
  },
  {
    name: 'ირაკლი გაფრინდაშვილი',
    rating: 5,
    date: '7 weeks ago',
    text: 'ძალიან ლამაზი და კომფორტული საიტი დამიმზადეს და რაც ყველაზე მთავარია დროულად 💙💙💙',
    initials: 'იგ',
    color: '#7CB9E8',
    profileUrl: 'https://www.google.com/maps/contrib/111678652286471321762/reviews?hl=en-GB',
  },
]

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBC04">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

function ReviewCard({ review }) {
  const { lang } = useLang()
  const verified = lang === 'ka' ? 'რეალური შეფასებები Google-ზე' : 'Verified on Google'
  const viewProfile = lang === 'ka' ? 'პროფილის ნახვა →' : 'View profile →'

  return (
    
      <a href={review.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="rv-card"
    >
      <div className="rv-card-top">
        <div className="rv-avatar" style={{ background: `${review.color}22`, border: `1.5px solid ${review.color}66` }}>
          <span className="rv-initials" style={{ color: review.color }}>{review.initials}</span>
        </div>
        <div className="rv-meta">
          <div className="rv-name-row">
            <p className="rv-name">{review.name}</p>
            {review.badge && <span className="rv-badge">Local Guide</span>}
          </div>
          <p className="rv-date">{review.date}</p>
        </div>
        <div className="rv-google-icon-wrap">
          <GoogleIcon />
        </div>
      </div>

      <div className="rv-stars">
        {Array.from({ length: review.rating }).map((_, i) => <StarIcon key={i} />)}
      </div>

      <p className="rv-text">{review.text}</p>

      <div className="rv-footer">
        <span className="rv-verified">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="white" stroke="rgba(52,211,153,0.3)" strokeWidth="1.5"/>
            <path d="M8 12l3 3 5-5" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {verified}
        </span>
        <span className="rv-link-hint">{viewProfile}</span>
      </div>
    </a>
  )
}

function Customers() {
  const { lang } = useLang()
  const containerRef = useRef(null)
  const title = lang === 'ka' ? 'რას ამბობენ ჩვენი მომხმარებლები' : 'What Our Clients Say'

  useEffect(() => {
    let ctx
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.set('.rv-section-title, .rv-rule, .rv-card', { opacity: 0, y: 36 })
        gsap.fromTo(
          '.rv-section-title',
          { opacity: 0, y: 36 },
          {
            scrollTrigger: { trigger: '.rv-section-title', start: 'top 88%', toggleActions: 'play none none none' },
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          }
        )
        gsap.fromTo(
          '.rv-rule',
          { opacity: 0, y: 36 },
          {
            scrollTrigger: { trigger: '.rv-rule', start: 'top 88%', toggleActions: 'play none none none' },
            opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power3.out',
          }
        )
        gsap.fromTo(
          '.rv-card',
          { opacity: 0, y: 48 },
          {
            scrollTrigger: { trigger: '.rv-grid', start: 'top 85%', toggleActions: 'play none none none' },
            opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out',
          }
        )
      }, containerRef)
    }
    init()
    return () => ctx && ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className={`customers-container customers-container--${lang}`}>
      <div className="rv-header">
        <h2 className="rv-section-title">{title}</h2>
        <div className="rv-rule" />
      </div>
      <div className="rv-grid">
        {reviews.map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </div>
    </div>
  )
}

export default Customers
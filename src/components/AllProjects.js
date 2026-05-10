'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/AllProjects.css'
import { useLang } from '../components/LanguageContext'
const content = {
  ka: {
    preTag: 'ჩვენი სამუშაოები',
    title: 'პროექტები',
    projects: [
      { num: '01', name: 'Art Of Movement', desc: 'ლენდინგ გვერდი',    url: 'https://artofmovement.net',        img: '/mock11.jpg'   },
      { num: '02', name: 'Your Hood',        desc: 'ონლაინ მაღაზია',    url: 'https://yourhood.ge/',             img: '/mockup2.jpg'  },
      { num: '03', name: 'Utopia VIP Tourism', desc: 'ტურისტული კომპანია', url: 'https://www.utopiaviptravel.com/', img: '/mockup.jpg'   },
      { num: '04', name: 'Motors N1',        desc: 'ონლაინ მაღაზია',    url: 'https://motorsn1.ge/',             img: '/mockup4.jpg'  },
    { num: '05', name: 'Greenhall Capital',        desc: 'ბიზნეს საიტი',    url: 'https://greenhallcapital.com/', img: '/mockup5.jpg'  },
    { num: '06', name: 'Builde',        desc: 'ლენდინგ გვერდი',    url: 'https://builde.ge/', img: '/mockup6.jpg'  },
    { num: '07', name: 'Litox',        desc: 'ონლაინ კატალოგი',    url: 'https://litox.ge/', img: '/mockup77.jpg'  },
        { num: '08', name: 'Rent Car Geo',        desc: 'მანქანების გაქირავება',    url: 'https://rentcargeo.com/', img: '/mockup9.jpg'  },
    ],
    viewSite: 'საიტის ნახვა',
  },
  en: {
    preTag: 'Our Work',
    title: 'Projects',
    projects: [
      { num: '01', name: 'Art Of Movement', desc: 'Landing Page',    url: 'https://artofmovement.net',        img: '/mock11.jpg'   },
      { num: '02', name: 'Your Hood',        desc: 'Online Shop',     url: 'https://yourhood.ge/',             img: '/mockup2.jpg'  },
      { num: '03', name: 'Utopia VIP Tourism', desc: 'Tourism Company', url: 'https://www.utopiaviptravel.com/', img: '/mockup.jpg'   },
      { num: '04', name: 'Motors N1',        desc: 'Online Shop',     url: 'https://motorsn1.ge/',             img: '/mockup4.jpg'  },
    { num: '05', name: 'Greenhall Capital',        desc: 'Business Website',    url: 'https://greenhallcapital.com/',             img: '/mockup5.jpg'  },
        { num: '06', name: 'Builde',        desc: 'Landing Page',    url: 'https://builde.ge/', img: '/mockup6.jpg'  },
           { num: '07', name: 'Litox',        desc: 'Online Catalog',    url: 'https://litox.ge/', img: '/mockup77.jpg'  },
        { num: '08', name: 'Rent Car Geo',        desc: 'Car Rental',    url: 'https://rentcargeo.com/', img: '/mockup9.jpg'  },
    ],
    viewSite: 'View site',
  },
}
function AllProjects() {
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
          '.ap-pre-tag, .ap-title, .ap-rule',
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out' }
        )
        gsap.fromTo(
          '.ap-card',
          { opacity: 0, y: 48 },
          {
            scrollTrigger: { trigger: '.ap-grid', start: 'top 85%', toggleActions: 'play none none none' },
            opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out',
          }
        )
      }, containerRef)
    }
    init()
    return () => ctx && ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className={`ap-container ap-container--${lang}`}>

      {/* ── HEADER ── */}
      <div className="ap-header">
        <p className="ap-pre-tag">{t.preTag}</p>
        <h1 className="ap-title">{t.title}</h1>
   
      </div>

      {/* ── GRID ── */}
      <div className="ap-grid">
        {t.projects.map((p, i) => (
          <div key={i} className="ap-card">
            <img
              src={p.img}
              alt={p.name}
              className="ap-image"
              style={i === 1 || i === 2 ? { transform: 'scale(1.05)', transformOrigin: 'center top' } : undefined}
            />
            <div className="ap-fade" />
            <div className="ap-card-number">{p.num}</div>
            <div className="ap-info">
              <p className="ap-name">{p.name}</p>
              <span className="ap-badge">
                <span className="ap-dot" />
                {p.desc}
              </span>
            </div>
            <div className="ap-hover-overlay">
              <a className="ap-view-btn" href={p.url} target="_blank" rel="noopener noreferrer">
                {t.viewSite} →
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default AllProjects
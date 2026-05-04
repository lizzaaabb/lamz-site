'use client'
import React, { useEffect, useRef } from 'react'
import '../styles/Process.css'

const content = {
  ka: {
    eyebrow: 'როგორ ვმუშაობთ',
    title: 'პროცესი',
    steps: [
      { num: '01', title: 'მოთხოვნების განხილვა',       desc: 'თქვენთან საუბარი და მიზნების გარკვევა' },
      { num: '02', title: 'დაგეგმვა',           desc: 'ფუნქციონალისა და დიზაინის შეთანხმება' },
      { num: '03', title: 'გადახდა',            desc: '20% წინასწარ, დანარჩენი - დასრულების შემდეგ' },
      { num: '04', title: 'ტექნიკური მომზადება',    desc: 'სერვერის, ბაზების, სისტემების გამართვა' },
      { num: '05', title: 'დიზაინი & კოდი',     desc: 'გაჩვენებთ შედეგებს და ვიღებთ უკუკავშირს' },
      { num: '06', title: 'ტესტი & გაშვება',    desc: 'სრული შემოწმება, დომენის და ჰოსტინგის გამართვა' },
      { num: '07', title: 'Google-ში დამატება', desc: 'ვამატებთ საიტს Google-ში, რომ მარტივად გიპოვონ' },
    ],
  },
  en: {
    eyebrow: 'How we work',
    title: 'Process',
    steps: [
      { num: '01', title: 'Understanding',   desc: 'Deep dive into your goals and vision' },
      { num: '02', title: 'Planning',        desc: 'Scope, design direction, agreement' },
      { num: '03', title: 'Kickoff',         desc: '20% upfront, rest on delivery' },
      { num: '04', title: 'Infrastructure',  desc: 'Server, database, all systems' },
      { num: '05', title: 'Design & Build',  desc: 'Step by step with your feedback' },
      { num: '06', title: 'Test & Launch',   desc: 'QA, domain, go live' },
      { num: '07', title: 'Google Indexing', desc: 'Indexed and discoverable from day one' },
    ],
  },
}

function StepCard({ step }) {
  return (
    <div className="proc-card">
      <div className="proc-card__shimmer" />
      <span className="proc-card__ghost-num">{step.num}</span>
      <div className="proc-card__body">
        <p className="proc-card__title">{step.title}</p>
        <p className="proc-card__desc">{step.desc}</p>
      </div>
    </div>
  )
}

function Process({ lang = 'ka' }) {
  const t = content[lang]
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // header fade up
        gsap.fromTo(
          '.proc-eyebrow, .proc-title, .proc-rule',
          { opacity: 0, y: 24 },
          {
            scrollTrigger: { trigger: '.proc-header', start: 'top 88%' },
            opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: 'power3.out',
          }
        )

        // cards slide in from alternating sides
        gsap.fromTo(
          '.proc-row',
          (i) => ({ opacity: 0, x: i % 2 === 0 ? 50 : -50 }),
          {
            scrollTrigger: { trigger: '.proc-list', start: 'top 82%' },
            opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          }
        )

        // scroll-driven line fill
        ScrollTrigger.create({
          trigger: '.proc-list',
          start: 'top 75%',
          end: 'bottom 25%',
          onUpdate: (self) => {
            const fill = document.querySelector('.proc-line-fill')
            if (fill) fill.style.transform = `scaleY(${self.progress})`
          },
        })
      }, containerRef)
    }
    init()
    return () => ctx && ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="process-container">
      <div className="proc-header">
        <h2 className="proc-title">{t.title}</h2>
        <div className="proc-rule" />
      </div>

      <div className="proc-list">
        <div className="proc-line-track">
          <div className="proc-line-bg" />
          <div className="proc-line-fill" />
        </div>

        {t.steps.map((step, i) => (
          <div key={i} className={`proc-row ${i % 2 === 0 ? 'proc-row--right' : 'proc-row--left'}`}>
            <div className="proc-slot">{i % 2 !== 0 && <StepCard step={step} />}</div>
            <div className="proc-dot-wrap">
              <div className="proc-dot">
                <div className="proc-dot__ring" />
                <div className="proc-dot__core" />
              </div>
            </div>
            <div className="proc-slot">{i % 2 === 0 && <StepCard step={step} />}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Process
'use client'
import React, { useEffect, useRef, useState } from 'react'
import '../styles/Trust.css'

const content = {
  ka: {
    stats: [
      { value: 5,   suffix: '+', labelEn: 'Years of Experience', labelKa: 'გამოცდილების წელი', duration: 2000 },
      { value: 20,  suffix: '+', labelEn: 'Projects Delivered',  labelKa: 'შესრულებული პროექტი', duration: 2200 },
      { value: 5,   suffix: '+', labelEn: 'Countries Reached',   labelKa: 'ქვეყანა',              duration: 1800 },
      { value: 100, suffix: '%', labelEn: 'Client Satisfaction', labelKa: 'კლიენტის კმაყოფილება', duration: 2400 },
    ],
  },
  en: {
    stats: [
      { value: 5,   suffix: '+', labelEn: 'Years of Experience', labelKa: 'გამოცდილების წელი', duration: 2000 },
      { value: 20,  suffix: '+', labelEn: 'Projects Delivered',  labelKa: 'შესრულებული პროექტი', duration: 2200 },
      { value: 5,   suffix: '+', labelEn: 'Countries Reached',   labelKa: 'ქვეყანა',              duration: 1800 },
      { value: 100, suffix: '%', labelEn: 'Client Satisfaction', labelKa: 'კლიენტის კმაყოფილება', duration: 2400 },
    ],
  },
}

function useCounter(target, duration, trigger) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 5)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [trigger, target, duration])
  return count
}

function StatCard({ value, suffix, labelEn, labelKa, duration, trigger, lang }) {
  const count = useCounter(value, duration, trigger)
  return (
    <div className='stat-card'>
      <div className='card-shimmer' />
      <div className='stat-number'>
        {count}<span className='suffix'>{suffix}</span>
      </div>
      {lang === 'ka' ? (
        <div className='stat-label-ka'>{labelKa}</div>
      ) : (
        <>
          <div className='stat-label'>{labelEn}</div>
          <div className='stat-label-ka'>{labelKa}</div>
        </>
      )}
    </div>
  )
}

function Trust({ lang = 'ka' }) {
  const sectionRef = useRef(null)
  const [triggered, setTriggered] = useState(false)

  const t = content[lang] ?? content['ka']

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect() } },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className='trust-container' ref={sectionRef}>
      <div className='trust-content'>
        <div className='trust-stats'>
          {t.stats.map((s, i) => (
            <StatCard key={i} {...s} trigger={triggered} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trust
'use client'
import React from 'react'
import '../styles/Projects2.css'
import { useLang } from '../components/LanguageContext'

const data = {
    ka: {
        heading: 'პროექტები',
        items: [
            { id: '01', title: 'Art Of Movement', tag: 'ლენდინგ გვერდი', link: 'https://artofmovement.net', image: '/mock11.jpg' },
            { id: '02', title: 'Your Hood', tag: 'ონლაინ მაღაზია', link: 'https://yourhood.ge/', image: '/mockup2.jpg' },
            { id: '03', title: 'Utopia VIP Tourism', tag: 'ტურისტული კომპანია', link: 'https://www.utopiaviptravel.com/', image: '/mockup.jpg' },
        ],
        more: 'იხილეთ პროექტები',
        view: 'საიტის ნახვა',
    },
    en: {
        heading: 'Projects',
        items: [
            { id: '01', title: 'Art Of Movement', tag: 'Landing Page', link: 'https://artofmovement.net', image: '/mock11.jpg' },
            { id: '02', title: 'Your Hood', tag: 'Online Shop', link: 'https://yourhood.ge/', image: '/mockup2.jpg' },
            { id: '03', title: 'Utopia VIP Tourism', tag: 'Tourism Company', link: 'https://www.utopiaviptravel.com/', image: '/mockup.jpg' },
        ],
        more: 'More projects',
        view: 'View site',
    },
}

function Projects2() {
    // ── DEBUG STEP 1: is useLang() even returning something? ──
    const langCtx = useLang()
    console.log('[Projects2 debug] useLang() returned:', langCtx)

    const lang = langCtx?.lang
    const prefix = langCtx?.prefix ?? ''

    console.log('[Projects2 debug] lang =', lang, 'prefix =', prefix)

    // ── DEBUG STEP 2: does `data` have a key matching `lang`? ──
    // This is the #1 cause of "nothing renders" bugs: if lang is
    // undefined, null, or something like "ka-GE" instead of "ka",
    // data[lang] is undefined and the whole component silently
    // renders nothing (or throws, which some browsers swallow
    // differently than others).
    const t = data[lang] ?? data.en

    if (!data[lang]) {
        console.warn(
            '[Projects2 debug] No content found for lang="' + lang + '". Falling back to "en". ' +
            'Check what useLang() is actually returning — the key must be exactly "ka" or "en".'
        )
    }

    console.log('[Projects2 debug] resolved content t =', t)
    console.log('[Projects2 debug] items to render:', t.items.length)

    return (
        <section className={`prj2-wrap prj2-wrap--${lang ?? 'en'}`}>
            {/* Visible on-page debug banner — remove once fixed */}
            {process.env.NODE_ENV !== 'production' && (
                <div
                    style={{
                        background: '#000',
                        color: '#0f0',
                        fontFamily: 'monospace',
                        fontSize: '11px',
                        padding: '8px 12px',
                        marginBottom: '16px',
                        borderRadius: '8px',
                        wordBreak: 'break-all',
                    }}
                >
                    DEBUG · lang="{String(lang)}" · prefix="{String(prefix)}" · items={t.items.length}
                </div>
            )}

            <div className="prj2-head">
                <h2 className="prj2-title">{t.heading}</h2>
            </div>

            <div className="prj2-grid">
                {t.items.map((item) => (
                    <div key={item.id} className="prj2-tile">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="prj2-img"
                            loading="lazy"
                            onLoad={() => console.log('[Projects2 debug] image loaded OK:', item.image)}
                            onError={(e) =>
                                console.error(
                                    '[Projects2 debug] IMAGE FAILED TO LOAD:',
                                    item.image,
                                    '— check it exists in /public and the path/case matches exactly.',
                                    e
                                )
                            }
                        />
                        <div className="prj2-overlay" />
                        <span className="prj2-num">{item.id}</span>

                        <div className="prj2-body">
                            <p className="prj2-name">{item.title}</p>
                            <span className="prj2-tag">
                                <span className="prj2-tag-dot" />
                                {item.tag}
                            </span>
                            <a
                                className="prj2-link"
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.view} →
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="prj2-more-row">
                <a href={`${prefix}/projects`} className="prj2-more">
                    {t.more}
                </a>
            </div>
        </section>
    )
}

export default Projects2
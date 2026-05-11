'use client'
import { createContext, useContext } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const LangContext = createContext()

export function LangProvider({ children }) {
  const pathname = usePathname()
  const router = useRouter()

  // Detect lang from URL: /ka or /ka/... = ka, everything else = en
  const lang = pathname.startsWith('/ka') ? 'ka' : 'en'

  // Use this in any component to build links that keep the language prefix
  // e.g. prefix + '/blog' = '/ka/blog' or '/blog'
  const prefix = lang === 'ka' ? '/ka' : ''

  const setLang = (newLang) => {
    if (newLang === lang) return

    if (newLang === 'ka') {
      // /projects → /ka/projects, / → /ka
      const newPath = '/ka' + (pathname === '/' ? '' : pathname)
      router.push(newPath)
    } else {
      // /ka/projects → /projects, /ka → /
      const newPath = pathname.replace(/^\/ka/, '') || '/'
      router.push(newPath)
    }
  }

  return (
    <LangContext.Provider value={{ lang, setLang, prefix }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
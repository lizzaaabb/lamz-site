'use client'
import React, { useState } from 'react'
import Header from '../components/Header'
import Landing from '../components/Landing'

export default function Page() {
  const [lang, setLang] = useState('ka')

  return (
    <>
      <Header onLangChange={setLang} />
      <Landing lang={lang} />
    </>
  )
}
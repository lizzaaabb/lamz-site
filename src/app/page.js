'use client'
import React, { useState } from 'react'
import Header from '../components/Header'
import Home from '../components/Home'

export default function Page() {
  const [lang, setLang] = useState('ka')

  return (
    <>
      <Home lang={lang}/>
    </>
  )
}
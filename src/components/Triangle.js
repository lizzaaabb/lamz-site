'use client'
import React from 'react'
import '../styles/Triangle.css'

function Triangle({ size = 100 }) {
  const px = typeof size === 'number' ? `${size}px` : size
  return (
    <div className="pyramid-wrapper" style={{ width: px, height: px }}>
      <div className="pyramid-loader" style={{ width: px, height: px }}>
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="side side5"></span>
          <span className="side side6"></span>
          <span className="side side7"></span>
          <span className="side side8"></span>
          <span className="shadow"></span>
        </div>
      </div>
    </div>
  )
}

export default Triangle
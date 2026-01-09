import { useState, useEffect } from 'react'
import '../App.css'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000) // Show for 3 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`loading-screen ${isVisible ? 'loading-visible' : 'loading-hidden'}`}>
      <div className="loading-content">
        <div className="rocket-container">
          <i className="bi bi-rocket-takeoff rocket-icon" />
        </div>
        <h1 className="loading-title">Hi, Welcome to Portfolio</h1>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

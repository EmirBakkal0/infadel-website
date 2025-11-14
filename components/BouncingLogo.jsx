"use client"
import { useState, useEffect, useRef } from 'react'

export default function BouncingLogo() {
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [velocity, setVelocity] = useState({ x: 2, y: 1.5 })
  const [isVisible, setIsVisible] = useState(true)
  const logoRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Hide logo when user scrolls past 600px (adjust as needed)
      setIsVisible(scrollY < 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isVisible) return // Don't animate if not visible

    const animate = () => {
      setPosition(prev => {
        const newX = prev.x + velocity.x
        const newY = prev.y + velocity.y
        
        // Get viewport dimensions
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight
        
        // Get logo dimensions (approximate)
        const logoWidth = 400 // approximate width of the logo container
        const logoHeight = 100 // approximate height of the logo container
        
        // Limit to top portion of the page (first 600px of viewport)
        const maxY = Math.min(500, viewportHeight - logoHeight - 100)
        
        // Check boundaries and bounce
        let newVelX = velocity.x
        let newVelY = velocity.y
        
        if (newX <= 0 || newX >= viewportWidth - logoWidth) {
          newVelX = -velocity.x
          setVelocity(prev => ({ ...prev, x: newVelX }))
        }
        
        if (newY <= 100 || newY >= maxY) {
          newVelY = -velocity.y
          setVelocity(prev => ({ ...prev, y: newVelY }))
        }
        
        return {
          x: Math.max(0, Math.min(newX, viewportWidth - logoWidth)),
          y: Math.max(100, Math.min(newY, maxY))
        }
      })
    }

    const intervalId = setInterval(animate, 16) // ~60fps
    return () => clearInterval(intervalId)
  }, [velocity, isVisible])

  if (!isVisible) return null

  return (
    <div 
      ref={logoRef}
      className="hidden md:block absolute z-10 pointer-events-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: 'opacity 0.3s ease-out',
        opacity: isVisible ? 1 : 0
      }}
    >
      <div className="flex flex-row justify-center items-center bg-[var(--color-card)] opacity-70 hover:opacity-90 transition p-5 rounded-2xl pointer-events-auto">
        <img src="logo.png" alt="Infadel Logo" width={250} className="p-6 border-r-black border-r-2" />
        <h1 className="text-3xl font-[delius] p-4 m-2">Happy Bellies <br></br> Happy Babies</h1>
      </div>
    </div>
  )
}
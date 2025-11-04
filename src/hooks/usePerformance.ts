import { useEffect } from 'react'

export function usePreloadCriticalAssets() {
  useEffect(() => {
    // Preconnect to critical origins
    const criticalOrigins = [
      'https://res.cloudinary.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ]

    criticalOrigins.forEach((origin) => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = origin
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })
  }, [])
}

export function useDeferNonCritical() {
  useEffect(() => {
    // Defer non-critical JavaScript
    const timeout = setTimeout(() => {
      // Load analytics, third-party scripts, etc.
      // Example: window.analytics?.load()
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])
}

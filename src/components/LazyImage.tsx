import { useState, useEffect, useRef } from 'react'
import { AdvancedImage } from '@cloudinary/react'
import { CloudinaryImage } from '@cloudinary/url-gen'

interface LazyImageProps {
  cldImg: CloudinaryImage
  alt: string
  className?: string
  title?: string
}

export default function LazyImage({ cldImg, alt, className = '', title }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px',
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isLoaded && (
        <div className='absolute inset-0 bg-slate-200 dark:bg-gray-500/30 animate-pulse  rounded-lg' />
      )}
      {isInView && (
        <AdvancedImage
          cldImg={cldImg}
          alt={alt}
          title={title}

          className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  )
}

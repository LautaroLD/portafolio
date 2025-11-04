import { useEffect } from 'react'
import ButtonCv from '../ButtonCv'
import MyImage from '../MyImage'
import Social from '../Social'
import Technologies from '../Technologies'

function PrincipalSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.observe').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-500'>
      {/* Animated background orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-3xl animate-float' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/30 rounded-full blur-3xl animate-float' style={{ animationDelay: '1s' }} />
        <div className='absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400/15 dark:bg-cyan-500/20 rounded-full blur-3xl animate-float' style={{ animationDelay: '2s' }} />
      </div>

      <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-6 lg:px-20 max-w-7xl mx-auto items-center'>
        {/* Left side - Text content */}
        <div className='space-y-6 observe opacity-0'>
          <div className='space-y-2'>
            <p className='text-cyan-600 dark:text-cyan-400 text-lg font-medium tracking-wider uppercase'>
              Hola, soy
            </p>
            <h1 className='text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight'>
              Lautaro Durán
            </h1>
            <h2 className='text-3xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 bg-clip-text text-transparent'>
              Desarrollador Web Full Stack
            </h2>
          </div>

          <p className='text-slate-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl'>
            Apasionado por crear experiencias web excepcionales con código limpio y 
            diseño innovador. Especializado en React, TypeScript y tecnologías modernas 
            para construir aplicaciones escalables y de alto rendimiento.
          </p>

          <div className='flex flex-wrap gap-4 pt-4'>
            <ButtonCv />
            <a
              href='#projects'
              className='group px-8 py-4 rounded-lg border-2 border-cyan-600 dark:border-cyan-400 text-cyan-700 dark:text-cyan-400 font-semibold hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 flex items-center gap-2'
            >
              Ver Proyectos
              <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </a>
          </div>

          <div className='pt-6'>
            <Social />
          </div>
        </div>

        {/* Right side - Image and tech stack */}
        <div className='space-y-8 observe opacity-0' style={{ animationDelay: '0.2s' }}>
          <div className='relative group'>
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-40 dark:opacity-50 group-hover:opacity-60 dark:group-hover:opacity-75 transition-opacity' />
            <div className='relative w-80 h-80 mx-auto'>
              <div className='absolute inset-0 border-4 border-cyan-500/40 dark:border-cyan-400/50 rounded-full animate-pulse' />
              <div className='absolute inset-4 border-4 border-blue-500/30 rounded-full animate-pulse' style={{ animationDelay: '0.5s' }} />
              <MyImage />
            </div>
          </div>

          <div className='glassmorphism-strong rounded-2xl p-8 space-y-4'>
            <h3 className='text-slate-900 dark:text-white text-xl font-semibold text-center mb-6'>
              Stack Tecnológico
            </h3>
            <Technologies />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator'>
        <div className='w-6 h-10 border-2 border-cyan-600 dark:border-cyan-400 rounded-full flex items-start justify-center p-2'>
          <div className='w-1 h-3 bg-cyan-600 dark:bg-cyan-400 rounded-full animate-bounce' />
        </div>
      </div>
    </section>
  )
}

export default PrincipalSection

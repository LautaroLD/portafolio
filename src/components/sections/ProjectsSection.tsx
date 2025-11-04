import { useEffect } from 'react'
import ProjectItem from '../ProjectItem'

function ProjectsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in-up')
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.project-observe').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id='projects' className='relative min-h-screen bg-figures py-20 px-6 lg:px-12 bg-slate-100 dark:bg-slate-900 transition-colors duration-500'>
      {/* Floating particles effect */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute w-2 h-2 bg-blue-400/20 dark:bg-blue-500/20 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Section header */}
        <div className='text-center mb-16 space-y-4'>
          <h2 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 bg-clip-text text-transparent inline-block'>
            Mis Proyectos
          </h2>
          <div className='w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full' />
          <p className='text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'>
            Explora una selección de mis trabajos más recientes y destacados
          </p>
        </div>

        {/* Projects grid */}
        <div className='space-y-12'>
          <ProjectItem />
        </div>
      </div>

      {/* Background decoration */}
      <div className='absolute top-1/4 left-0 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl' />
    </section>
  )
}

export default ProjectsSection

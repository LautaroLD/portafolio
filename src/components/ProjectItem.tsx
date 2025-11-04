import React from 'react'
import proyectos from '../assets/projects.json'
import { Project } from '../models'
import { cld } from '../utils/cloudinary'
import { format, quality } from '@cloudinary/url-gen/actions/delivery'
import LazyImage from './LazyImage'

function ProjectItem() {
  const projects: Project[] = proyectos
  const mobile = ['Compañero viajero', 'Cuentas claras']

  return (
    <React.Fragment>
      {projects.map((item, index) => {
        const optimizedImage = cld
          .image(item.img)
          // .resize(fill().width(800).height(item.mobile ? 800 : 450))
          .delivery(format('auto'))
          .delivery(quality('auto'))

        return (
          <article
            key={`project-${index}`}
            className='project-observe opacity-0 project-card glassmorphism-strong rounded-2xl p-8 card-hover group'
          >
            <div className={`grid gap-8 ${item.mobile ? 'lg:grid-cols-5' : 'lg:grid-cols-2'}`}>
              {/* Image container */}
              <div className={`${item.mobile ? 'lg:col-span-2' : 'lg:col-span-1'} relative overflow-hidden rounded-xl`}>
                <div className={`relative ${item.mobile ? 'aspect-square' : 'aspect-video'} overflow-hidden rounded-xl border-2 border-slate-200 dark:border-slate-700`}>
                  <LazyImage
                    cldImg={optimizedImage}
                    alt={`${item.name} preview`}
                    title={item.name}
                    className='w-full h-full object-scale-down transform group-hover:scale-110 transition-transform duration-700'
                  />
                </div>
                
                {/* Tech badges overlay */}
                <div className='absolute top-4 left-4 flex flex-wrap gap-2 z-20'>
                  {item.technologies?.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i}
                      className='px-3 py-1 text-xs font-semibold bg-slate-900/80 dark:bg-black/70 backdrop-blur-sm text-cyan-400 rounded-full border border-cyan-400/30'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className={`${item.mobile ? 'lg:col-span-3' : 'lg:col-span-1'} flex flex-col justify-between space-y-6`}>
                {/* Header */}
                <div className='space-y-4'>
                  <div className='flex items-start justify-between gap-4'>
                    <h3 className='text-3xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 dark:group-hover:from-cyan-400 dark:group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300'>
                      {item.name}
                    </h3>
                    <div className='flex gap-2'>
                      {!mobile.includes(item.name) && (
                        <div className='w-3 h-3 rounded-full bg-green-500 animate-pulse' title='Live' />
                      )}
                    </div>
                  </div>
                  
                  <p className='text-slate-700 dark:text-gray-300 leading-relaxed text-lg'>
                    {item.info}
                  </p>
                </div>

                {/* Technologies used */}
                {item.technologies && (
                  <div className='space-y-2'>
                    <p className='text-sm text-slate-600 dark:text-gray-500 font-semibold uppercase tracking-wider'>
                      Stack Tecnológico
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {item.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className='px-3 py-1 text-sm bg-slate-200/80 dark:bg-gray-800/50 text-slate-700 dark:text-gray-300 rounded-lg border border-slate-300 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400/50 transition-colors'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className='flex flex-wrap gap-4 pt-4'>
                  {!mobile.includes(item.name) && (
                    <a
                      href={item.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 dark:hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105'
                    >
                      <span>Ver Proyecto</span>
                      <svg className='w-5 h-5 group-hover/btn:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                      </svg>
                    </a>
                  )}
                  <a
                    href={item.repository}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group/btn flex items-center gap-2 px-6 py-3 border-2 border-slate-400 dark:border-gray-600 text-slate-700 dark:text-gray-300 font-semibold rounded-lg hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                    </svg>
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </React.Fragment>
  )
}

export default ProjectItem

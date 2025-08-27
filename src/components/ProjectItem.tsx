import React from 'react'
import proyectos from '../assets/projects.json'
import { Project } from '../models'
import { AdvancedImage } from '@cloudinary/react'
import { cld } from '../utils/cloudinary'
import { fill } from '@cloudinary/url-gen/actions/resize'
function ProjectItem() {
  const projects: Project[] = proyectos
  const mobile = ['Compañero viajero', 'Cuentas claras']

  return (
    <React.Fragment>
      {projects.map((item, index) => (
        <article
          key={`project-${index}`}
          className='min-w-[95vw] lg:min-w-[60vw] lg:flex-row border border-solid border-light flex flex-col rounded-xl bg-gray p-4'
        >
          <div
            className={`flex object-contain m-auto w-full  relative ${
              item.mobile
                ? 'lg:max-w-[40%] aspect-square'
                : 'lg:max-w-[60%] aspect-video'
            }`}
          >
            <AdvancedImage
              cldImg={cld.image(item.img).resize(fill()).format('webp')}
              alt={`${item.name} image`}
              title={`${item.name} image`}
              className=' object-contain'
            />
          </div>
          <div className=' flex w-full lg:max-w-[45%] mt-8 min-h-full flex-col gap-2'>
            <h3 className='text-s-title font-bold text-title m-0'>
              {item.name}
            </h3>
            <p className='text-s-text text-white'>{item.info}</p>
            <div className='flex justify-around items-center pt-3 flex-col gap-3 sm:flex-row mt-auto'>
              {!mobile.includes(item.name) && (
                <a
                  href={item.url}
                  target='_blank'
                  className='text-dark bg-light text-s-text text-center font-w-b py-3 px-8 decoration-0 transition-all duration-500 border w-full sm:w-fit hover:bg-dark hover:text-light '
                  rel='noreferrer'
                >
                  Visitar
                </a>
              )}
              <a
                href={item.repository}
                target='_blank'
                className='rounded-xl text-s-text font-w-l py-2 px-4 decoration-0 text-light hover:scale-110 duration-300'
                rel='noreferrer'
              >
                Repositorio
              </a>
            </div>
          </div>
        </article>
      ))}
    </React.Fragment>
  )
}

export default ProjectItem

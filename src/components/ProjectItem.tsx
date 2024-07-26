import React from 'react';
import proyectos from '../assets/projects.json';
import { Project } from '../models';
import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../utils/cloudinary';
import { fill } from '@cloudinary/url-gen/actions/resize';
function ProjectItem() {
  const projects: Project[] = proyectos;
  const mobile = ['Compañero viajero', 'Cuentas claras'];

  return (
    <React.Fragment>
      {projects.map((item, index) => (
        <article
          key={`project-${index}`}
          className='min-w-[90vw] lg:min-w-[60vw] lg:flex-row border border-solid border-light flex flex-col items-start rounded-xl bg-gray p-4'
        >
          <div
            className={`flex object-contain m-auto w-full  relative ${
              item.mobile
                ? 'max-w-[250px] aspect-square'
                : 'max-w-[500px] aspect-video'
            }`}
          >
            <AdvancedImage
              cldImg={cld.image(item.img).resize(fill()).format('webp')}
              alt={`${item.name} image`}
              title={`${item.name} image`}
              className=' object-contain'
            />
            {/* <CldImage
              src={item.img}
              alt={`${item.name} image`}
              title={`${item.name} image`}
              format='webp'
              fill
              sizes='100%'
              crop={{
                type: 'auto',
                source: true,
              }}
            /> */}
          </div>
          <div className='flex-1 flex w-full lg:max-w-[45%] m-auto flex-col gap-2'>
            <h3 className='text-s-title font-bold text-title m-0'>
              {item.name}
            </h3>
            <p className='text-s-text m-auto '>{item.info}</p>
            <div className='flex justify-around items-center pt-3'>
              {!mobile.includes(item.name) && (
                <a
                  href={item.url}
                  target='_blank'
                  className=' rounded-xl text-s-text font-w-b py-2 px-4 decoration-0 bg-btn-bg text-light  hover:scale-110 duration-300'
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
  );
}

export default ProjectItem;

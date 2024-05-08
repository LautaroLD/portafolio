import React from 'react';
import proyectos from '../assets/projects.json';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { cld } from '../utils/cloudinary';

function ProjectItem() {
  const projects = Object.entries(proyectos);
  const mobile = ['Compañero viajero', 'Cuentas claras'];
  return (
    <React.Fragment>
      {projects.map((item, index) => (
        <article
          key={`project-${index}`}
          className='min-w-[90vw] lg:min-w-[60vw] lg:flex-row  flex flex-col items-start border-2 rounded-3xl bg-gray p-4'
        >
          <div
            className={`flex object-contain m-auto w-full ${
              item[1].mobile === 'true' ? 'max-w-[250px]' : 'max-w-[500px]'
            }`}
          >
            <AdvancedImage
              cldImg={cld.image(item[1].img).resize(fill()).format('webp')}
            />
          </div>
          <div className='flex-1 flex w-full lg:max-w-[45%] flex-col gap-2'>
            <h3 className='text-s-title font-bold text-btn-bg'>
              {item[1].name}
            </h3>
            <p className='text-s-text m-auto '>{item[1].info}</p>
            <div className='flex justify-around items-center pt-3'>
              {!mobile.includes(item[1].name) && (
                <a
                  href={item[1].url}
                  target='_blank'
                  className=' rounded-xl text-s-text font-w-b py-2 px-4 decoration-0 bg-btn-bg text-light hover:bg-btn-bg-hover hover:scale-110 duration-300'
                  rel='noreferrer'
                >
                  Visitar
                </a>
              )}
              <a
                href={item[1].repository}
                target='_blank'
                className='rounded-xl text-s-text font-w-l py-2 px-4 decoration-0 text-light hover:scale-110 duration-300 hover:text-btn-bg-hover'
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

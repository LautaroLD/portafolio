import React from 'react';
import SocialContent from './SocialContent';
import { LuChevronsDown } from 'react-icons/lu';
import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../utils/cloudinary';

export default function AboutMeSection() {
  return (
    <section className='pb-12 z-10 relative text-light px-[5%] overflow-hidden '>
      <div
        id='about-me'
        className='py-[10%] flex flex-col gap-3 h-svh max-w-4xl m-auto'
      >
        <h2 className='text-s-title font-w-b border-2 w-fit px-6 rounded-full mb-4 bg-gray h-min'>
          Sobre mi
        </h2>

        <div>
          <div className='m-auto max-w-[150px] flex float-left mr-3'>
            <AdvancedImage
              cldImg={cld.image('projects/mia')}
              className='w-full rounded-full'
              alt='Lautaro photo'
            />
          </div>
          <p className='text-s-text leading-9 px-5'>
            Con una fuerte cultura del trabajo, dedicación, creando soluciones y
            con un aprendizaje continuo busco gran calidad en mis resultados.
            Con disciplina, autonomía y aplicando razonamiento lógico utilizo
            mis habilidades en las distintas tecnologías para agregar valor a
            cada proyecto. Siempre estoy dispuesto a asumir nuevos desafíos y
            enfrentar problemas complejos para encontrar soluciones innovadoras.
          </p>
        </div>
        <SocialContent />
        <a
          className='text-light text-s-text font-w-l mx-auto py-1 px-3 decoration-0 transition-all duration-500 border w-fit hover:bg-light hover:text-dark flex items-center gap-1 h-min'
          href='#projects'
        >
          Mis trabajos
          <LuChevronsDown className='animate-bounce mt-1' />
        </a>
      </div>
    </section>
  );
}

import React from 'react';
import SocialContent from './SocialContent';
import { LuChevronsDown } from 'react-icons/lu';
import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../utils/cloudinary';

export default function AboutMeSection() {
  return (
    <section className='pb-12 z-10 relative text-light px-[2%]  overflow-hidden '>
      <div
        id='about-me'
        className='py-[10%] lg:pt-[3%] flex flex-col gap-3 min-h-svh max-w-4xl m-auto'
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
            Con una fuerte cultura de trabajo y dedicación, estoy constantemente
            creando soluciones y aprendiendo para asegurar la alta calidad de
            mis resultados. Utilizo mis habilidades en diversas tecnologías con
            disciplina, autonomía y razonamiento lógico para agregar valor a
            cada proyecto. Siempre estoy dispuesto a asumir nuevos desafíos y
            enfrentar problemas complejos para encontrar soluciones innovadoras.
            <br />
            Estoy buscando oportunidades donde pueda aplicar mis habilidades en
            desarrollo frontend para construir sitios web que ofrezcan una
            experiencia de usuario excepcional y estén respaldados por un código
            de alta calidad.
            <br /> Mi objetivo es participar en proyectos desafiantes que me
            permitan seguir ampliando mis habilidades y conocimientos. Además,
            poseo un fuerte compromiso con mi trabajo y una clara orientación a
            resultados. Esto se traduce en mi capacidad para establecer y
            alcanzar metas específicas, maximizar la eficiencia y adaptarme
            rápidamente a los cambios. Mi enfoque en los resultados me permite
            no solo cumplir con las expectativas, sino superarlas, aportando
            valor a los proyectos en los que participo.
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

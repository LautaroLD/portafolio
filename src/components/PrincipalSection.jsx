import React from 'react';
import PillTechnologies from './PillTechnologies';
import LogoComponent from './LogoComponent';
import SocialContent from './SocialContent';
import { LuChevronsDown } from 'react-icons/lu';
function PrincipalSection() {
  return (
    <section className='bg-bg-gradient flex flex-col justify-center p-[5%] pb-[7%] inset-0 fixed text-center text-light z-0'>
      <LogoComponent />
      <p className='text-s-title font-medium'>Lautaro Duran</p>
      <h1 className='text-s-title-mobile sm:text-s-primary-title font-bold'>
        Desarrollador frontend
      </h1>
      <article className='max-w-[850px] w-[90vw] flex flex-col m-auto gap-5'>
        <a
          className='text-light text-s-text font-w-l mx-auto py-1 px-3 decoration-0 transition-all duration-500 border w-fit hover:bg-light hover:text-dark flex items-center gap-1'
          href='#about-me'
        >
          Sobre mi
          <LuChevronsDown className='animate-bounce mt-1' />
        </a>
        <a
          className='text-light text-s-text font-w-l mx-auto py-1 px-3 decoration-0 transition-all duration-500 border w-fit hover:bg-light hover:text-dark flex items-center gap-1 h-min'
          href='#projects'
        >
          Mis trabajos
          <LuChevronsDown className='animate-bounce mt-1' />
        </a>
        <SocialContent />
      </article>
      <article className='max-w-[850px] w-[90vw] flex flex-col m-auto gap-5 '>
        <PillTechnologies />
      </article>
      <a
        className='text-light text-s-text font-w-b m-auto py-3 px-8 decoration-0 transition-all duration-500 border w-full sm:w-fit sm:mr-0 hover:bg-light hover:text-dark'
        href='https://drive.google.com/file/d/1pZ0UjisrhoWm_nbWVIbczqlQdN11RiSj/view?usp=share_link'
        target='_blank'
        rel='noreferrer'
      >
        Ver cv
      </a>
    </section>
  );
}

export default PrincipalSection;

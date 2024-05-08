import React from 'react';
import Form from '../components/Form';
import ProjectsSection from '../components/ProjectsSection';
import SocialContent from '../components/SocialContent';
import PrincipalSection from '../components/PrincipalSection';
import AboutMeSection from '../components/AboutMeSection';

function HomeScreen() {
  return (
    <section className='flex flex-col'>
      <main className='font-f relative pt-[100dvh] bg-figures'>
        <PrincipalSection />
        <div className='bg-figures z-10 relative'>
          <AboutMeSection />
          <ProjectsSection />
        </div>
      </main>
      <footer className='flex flex-col justify-center items-center py-5 w-full gap-10 bg-dark font-f z-20'>
        <h2 className='text-center text-light text-s-title font-w-l'>
          Pongámonos en contacto
        </h2>
        <Form />
        <SocialContent />
      </footer>
    </section>
  );
}

export default HomeScreen;

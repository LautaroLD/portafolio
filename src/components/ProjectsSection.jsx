import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectsSection() {
  return (
    <section className='pb-12 z-10 relative text-light px-[5%]'>
      <div id='projects' className='pt-[5%] max-w-4xl m-auto'>
        <h2 className='text-s-title font-w-b border-2 w-fit px-6 rounded-full mb-4 bg-gray '>
          PROYECTOS
        </h2>
        <div className='flex flex-col gap-10 max-w-4xl py-3'>
          <ProjectItem />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

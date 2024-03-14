import React from 'react'
import ProjectItem from './ProjectItem';

function ProjectsSection() {
    return (
        <section className='pb-12'>
            <h2 className='py-7 text-dark flex text-s-title font-w-b gap-1 ml-[10%] underline'>PROYECTOS</h2>
            <div className='flex flex-wrap justify-center divide-y-2 divide-bg'>
                <ProjectItem />
            </div>
        </section>
    )
}

export default ProjectsSection
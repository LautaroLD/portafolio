import React from 'react'
import ProjectItem from './ProjectItem';

function ProjectsSection() {
    return (
        <section className='projects-section'>
            <h2 className='projects-section__title'> <hr /> Proyectos <hr /></h2>
            <div className='projects-container divide-y-2 divide-[#5975c998]'>
                <ProjectItem />
            </div>
        </section>
    )
}

export default ProjectsSection
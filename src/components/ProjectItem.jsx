import React from 'react'
import proyectos from '../assets/projects.json'

function ProjectItem() {
    const projects = Object.entries(proyectos)
    return (
        <React.Fragment>
            {projects.map((item) =>
                <div className={`project ${item[0]}`} key={item[1].name}>
                    <img src={item[1].img} alt={item[1].name} />
                    <div className='project-content'>
                        <h3 >{item[1].name} </h3>
                        <p className='border-t pt-3'>{item[1].info}</p>
                        <div className='btns border-t pt-3'>
                            <a href={item[1].url} className='btn btn-primary' >Visitar</a>
                            <a href={item[1].repository} className='btn btn-secondary'>Repositorio</a>
                        </div>
                    </div>
                </div>
            )}

        </React.Fragment>
    )
}

export default ProjectItem
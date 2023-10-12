import React from 'react'
import proyectos from '../assets/projects.json'

function ProjectItem() {
    const projects = Object.entries(proyectos)
    return (
        <React.Fragment>
            {projects.map((item) =>
                <div className={`project ${item[0]}`} key={item[1].name}>
                    <img src={item[1].img} alt={item[1].name} />
                    <div className='w-full min-h-full flex bg-gray-600 z-10 absolute top-0 left-0 rounded-[10px] opacity-0 hover:opacity-100 duration-700 justify-evenly flex-col text-center px-7'>
                        <h3 className='text-4xl font-bold  text-white'>{item[1].name} </h3>
                        <p className=' text-2xl  text-white'>{item[1].info}</p>
                        <div className='btns pt-3'>
                            <a href={item[1].url} className='btn btn-primary' >Visitar</a>
                            <a href={item[1].repository} className='btn btn-secondary'>Repositorio</a>
                        </div>
                    </div>
                    {/* <div className='project-content'>
                        
                    </div> */}
                </div>
            )}

        </React.Fragment>
    )
}

export default ProjectItem
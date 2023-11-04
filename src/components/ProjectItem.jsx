import React from 'react'
import proyectos from '../assets/projects.json'

function ProjectItem() {
    const projects = Object.entries(proyectos)
    return (
        <React.Fragment>
            {projects.map((item, index) =>
                <article key={`project-${index}`} className='w-full flex flex-wrap gap-6 my-7 items-center p-8 sm:even:flex-row-reverse justify-evenly'>
                    <img loading='lazy' width={500} height={225} src={item[1].img} alt={item[1].name} className={`flex object-contain my-auto w-full ${item[1].mobile === 'true' ? 'max-w-[250px]' : 'max-w-[500px]'}`} />
                    <div className='text-black flex-1 flex w-full sm:max-w-[45%] flex-col p-5 gap-14'>
                        <h3 className='text-4xl font-bold text-[#435dad]'>{item[1].name}</h3>
                        <p className='text-3xl m-auto leading-loose'>{item[1].info}</p>
                        <div className='btns pt-3'>
                            {
                                item[1].name != "Compañero viajero" && <a href={item[1].url} target='_blank' className='btn btn-primary' >Visitar</a>
                            }
                            <a href={item[1].repository} target='_blank' className='btn btn-secondary'>Repositorio</a>
                        </div>
                    </div>
                </article>
            )}

        </React.Fragment>
    )
}

export default ProjectItem
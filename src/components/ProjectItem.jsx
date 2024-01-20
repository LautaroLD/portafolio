import React from 'react'
import proyectos from '../assets/projects.json'

function ProjectItem() {
    const projects = Object.entries(proyectos)
    const mobile = 
[        "Compañero viajero",
         "Cuentas claras"
    ]
    return (
        <React.Fragment>
            {projects.map((item, index) =>
                <article key={`project-${index}`} className='w-full flex flex-wrap gap-6 my-7 items-center p-8 sm:even:flex-row-reverse justify-evenly'>
                    <img loading='lazy' width={500} height={225} src={item[1].img} alt={item[1].name} className={`flex object-contain my-auto w-full ${item[1].mobile === 'true' ? 'max-w-[250px]' : 'max-w-[500px]'}`} />
                    <div className='text-dark flex-1 flex w-full sm:max-w-[45%] flex-col p-3 gap-10'>
                        <h3 className='text-s-title font-bold text-btn-bg'>{item[1].name}</h3>
                        <p className='text-s-text m-auto leading-loose'>{item[1].info}</p>
                        <div className='flex justify-around items-center pt-3'>
                            {
                                !mobile.includes(item[1].name) && <a href={item[1].url} target='_blank' className=' rounded-xl text-s-text font-w-b py-2 px-4 decoration-0 bg-btn-bg text-light hover:bg-btn-bg-hover hover:scale-110 duration-300' rel="noreferrer" >Visitar</a>
                            }
                            <a href={item[1].repository} target='_blank' className='rounded-xl text-s-text font-w-b py-2 px-4 decoration-0 text-gray hover:scale-110 duration-300 hover:text-btn-bg-hover' rel="noreferrer">Repositorio</a>
                        </div>
                    </div>
                </article>
            )}

        </React.Fragment>
    )
}

export default ProjectItem
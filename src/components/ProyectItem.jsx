import React from 'react'
import proyectos from '../assets/proyects.json'
// async function getData() {
//     const res = await fetch('../assets/proyects.json')
//     const data = await res.json()
//     return data
//     console.log(res);
// }
function ProyectItem() {
    const proyects = Object.entries(proyectos)
    return (
        <React.Fragment>
            {proyects.map((item) =>
                <div className={`proyect ${item[0]}`} key={item[1].name}>
                    <img src={item[1].img} alt={item[1].name} />
                    <div className='proyect-content'>
                        <h3 >{item[1].name} </h3>
                        <p>{item[1].info}</p>
                        <div className='btns'>
                            <a href={item[1].url} className='btn btn-visit' >Visitar</a>
                            <a href={item[1].repository} className='btn btn-repo'>Repositorio</a>
                        </div>
                    </div>
                </div>
            )}

        </React.Fragment>
    )
}

export default ProyectItem
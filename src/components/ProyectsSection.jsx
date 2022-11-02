import React from 'react'
import ProyectItem from './ProyectItem';

function ProyectsSection() {
    return (
        <section className='proyects-section'>
            <h2 className='proyects-section__title'> <hr /> Proyectos <hr /></h2>
            <div className='proyects-container'>
                <ProyectItem />
            </div>
        </section>
    )
}

export default ProyectsSection
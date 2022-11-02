import React from 'react'

function PillTecnologies() {
    const tecnologies = [
        {
            'name': 'Html',
            'class': 'pill-html'
        },
        {
            'name': 'Css',
            'class': 'pill-css'
        },
        {
            'name': 'Sass',
            'class': 'pill-sass'
        },
        {
            'name': 'Javascript',
            'class': 'pill-js'
        },
        {
            'name': 'React',
            'class': 'pill-react'
        },
        {
            'name': 'Git',
            'class': 'pill-git'
        },
        {
            'name': 'Bootstrap',
            'class': 'pill-bootstrap'
        }
    ]
    return (
        <div className='pills-tecnologies'>
            {tecnologies.map((item) =>
                <p key={item.name} className={`pill ${item.class}`} >{item.name}</p>
            )}
        </div>
    )
}

export default PillTecnologies
import React from 'react'
import Cv from '../assets/desarrollador-frontend.pdf'
import PillTecnologies from './PillTecnologies';
import LogoComponent from './LogoComponent';
import SocialContent from './SocialContent';
function AboutMeSection() {
    return (
        <section className='main-section__about-me'>
            <LogoComponent site='top' />
            {/* <p className="about-me__content">Hola soy</p> */}
            <p className='about-me__content'>Lautaro Duran</p>
            <p className="about-me__content">
                <b className="about-me__title">
                    Desarrollador web frontend
                </b>
                <br />
                Con una fuerte cultura del trabajo, dedicación, creando soluciones y sin parar de aprender busco gran calidad en mis resultados.
                <br />
                Con disciplina, autonomía y aplicando razonamiento lógico utilizo mis habilidades en las distintas tecnologías para agregar valor a cada proyecto.
            </p>
            <SocialContent />
            <a className='btn-cv' href={Cv} target='_blank'>Ver cv</a>
            <PillTecnologies />
            {/* <LogoComponent site='bottom' /> */}
        </section>
    )
}

export default AboutMeSection
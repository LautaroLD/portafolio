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
            <h2 className='about-me__content'>Lautaro Duran!!</h2>
            <p className="about-me__content">
                <b className="about-me__title">
                    Desarrollador web frontend
                </b>
                <br />
                Cuento con una fuerte cultura del trabajo y dedicación
                sumado a no parar de aprender, para así, lograr gran calidad en mis proyectos.
                <br />
                Me
                gusta crear soluciones y colaborar para lograr los mejores resultados.
            </p>
            <SocialContent />
            <a className='btn-cv' href={Cv}>Ver cv</a>
            <PillTecnologies />
            <LogoComponent site='bottom' />
        </section>
    )
}

export default AboutMeSection
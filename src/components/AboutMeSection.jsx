import React from 'react'
import PillTechnologies from './PillTechnologies';
import LogoComponent from './LogoComponent';
import SocialContent from './SocialContent';
function AboutMeSection() {
    return (
        <section className='main-section__about-me'>
            <LogoComponent site='top' />
            <p className='text-[2rem] font-medium'>Lautaro Duran</p>
            <h1 className='text-[4rem] font-bold'>Desarrollador web frontend</h1>
            <img loading='lazy' alt='Lautaro Duran foto' src='https://onedrive.live.com/embed?resid=16A865F844F501DD%21172332&authkey=%21AFxeCKLETajoP2E&width=229&height=230' className='rounded-full m-auto w-3/6 max-w-[250px] aspect-square' />
            <article className='max-w-[800px] w-[90vw] flex flex-col m-auto mb-[50px] text-start'>
                <h2 className='text-[2.5rem] font-bold underline'>Sobre mi</h2>
                <p className='text-[2rem] mb-[20px]'>Con una fuerte cultura del trabajo, dedicación, creando soluciones y con un aprendizaje continuo busco gran calidad en mis resultados.
                    Con disciplina, autonomía y aplicando razonamiento lógico utilizo mis habilidades en las distintas tecnologías para agregar valor a cada proyecto. Siempre estoy dispuesto a asumir nuevos desafíos y enfrentar problemas complejos para encontrar soluciones innovadoras.</p>
                <SocialContent />
            </article>
            <article className='max-w-[800px] w-[90vw] flex flex-col m-auto gap-5 '>
                <h3 className='text-[2.5rem] font-bold underline text-start'>Tecnologías</h3>
                <PillTechnologies />
            </article>
            <a className='btn-cv' href="https://drive.google.com/file/d/1pZ0UjisrhoWm_nbWVIbczqlQdN11RiSj/view?usp=share_link" target='_blank'>Ver cv</a>
        </section>
    )
}

export default AboutMeSection
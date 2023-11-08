import React from 'react'
import AboutMeSection from '../components/AboutMeSection'
import Form from '../components/Form'
import ProjectsSection from '../components/ProjectsSection'
import SocialContent from '../components/SocialContent'

function HomeScreen() {
    return (
        <>
            <main className='font-f'>
                <AboutMeSection />
                <ProjectsSection />
            </main>
            <footer className='flex flex-col justify-center items-center py-5 w-full gap-10 bg-dark font-f'>
                <h2 className='text-center text-light text-s-title font-w-l'>Pongámonos en contacto</h2>
                <Form />
                <SocialContent />
            </footer>
        </>
    )
}

export default HomeScreen
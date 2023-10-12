import React from 'react'
import AboutMeSection from '../components/AboutMeSection'
import Form from '../components/Form'
import ProjectsSection from '../components/ProjectsSection'
import CertificatesSection from '../components/CetificatesSection'

function HomeScreen() {
    return (
        <>
            <main className='main'>
                <AboutMeSection />
                {/* <CertificatesSection /> */}
                <ProjectsSection />
            </main>
            <footer className='footer'>
                <h2 className='footer-title'>Pongámonos en contacto</h2>
                <Form />
            </footer>
        </>
    )
}

export default HomeScreen
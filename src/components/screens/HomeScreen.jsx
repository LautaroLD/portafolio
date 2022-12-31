import React from 'react'
import AboutMeSection from '../AboutMeSection'
import Form from '../Form'
import ProyectsSection from '../ProyectsSection'

function HomeScreen() {
    return (
        <>
            <main className='main'>
                <AboutMeSection />
                <ProyectsSection />
            </main>
            <footer className='footer'>
                <h2 className='footer-title'>Pongámonos en contacto</h2>
                <Form />
            </footer>
        </>
    )
}

export default HomeScreen
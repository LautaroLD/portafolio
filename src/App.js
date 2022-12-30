import React from 'react';
import AboutMeSection from './components/AboutMeSection';
import Form from './components/Form';
import ProyectsSection from './components/ProyectsSection';

function App() {
	return (
		<React.Fragment>
			<main className='main'>
				<AboutMeSection />
				<ProyectsSection />
			</main>
			<footer className='footer'>
				<h2 className='footer-title'>Pongámonos en contacto</h2>
				<Form />
			</footer>
		</React.Fragment >
	);
}

export default App;

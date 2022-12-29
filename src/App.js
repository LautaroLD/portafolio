import React from 'react';
import AboutMeSection from './components/AboutMeSection';
import ProyectsSection from './components/ProyectsSection';

function App() {

	return (
		<React.Fragment>
			<main className='main'>
				<AboutMeSection />
				<ProyectsSection />
			</main>
			<footer className='footer'>
				<form className='form' action="https://formsubmit.co/duranlautarogabriel@gmail.com" method="POST">
					<input className='input' placeholder='Nombre' type="text" name="name" required />
					<input className='input' placeholder='Email' type="email" name="email" required />
					<textarea className='input' placeholder='Mensaje' name="content" cols="30" rows="8" required />
					<button type="submit">Enviar</button>
				</form>
			</footer>
		</React.Fragment >
	);
}

export default App;

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
			{/* <footer></footer> */}
		</React.Fragment>
	);
}

export default App;

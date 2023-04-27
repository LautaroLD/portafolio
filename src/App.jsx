import React from 'react';
import MessageSendScreen from './components/screens/MessageSendScreen';
import HomeScreen from './components/screens/HomeScreen';

function App() {
	return (
		<React.Fragment>
			{document.location.hash === '' && <HomeScreen />}
			{document.location.hash === '#send' && <MessageSendScreen />}
		</React.Fragment >
	);
}

export default App;

import React from 'react';
import MessageSendScreen from './screens/MessageSendScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
	return (
		<React.Fragment>
			{document.location.hash === '' && <HomeScreen />}
			{document.location.hash === '#send' && <MessageSendScreen />}
		</React.Fragment >
	);
}

export default App;

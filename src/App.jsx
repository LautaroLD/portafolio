import React, { lazy, Suspense } from 'react';
import MessageSendScreen from './screens/MessageSendScreen';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Loading from './assets/Spinner-loading.svg'

const HomeScreen = lazy(() => import('./screens/HomeScreen'))
function App() {
	return (
		<Suspense fallback={<img src={Loading} width={250} height={250} className='m-auto' />}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/send' element={<MessageSendScreen />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;

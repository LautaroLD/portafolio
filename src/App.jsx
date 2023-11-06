import React, { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter, useNavigate, Navigate } from 'react-router-dom';
import Loading from './assets/Spinner-loading.svg'
const HomeScreen = lazy(() => import('./screens/HomeScreen'))
const MessageSendScreen = lazy(() => import('./screens/MessageSendScreen'))
function App() {
	// const navigate = useNavigate()
	return (
		<Suspense fallback={<img src={Loading} width={250} height={250} className='m-auto' />}>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<HomeScreen />} />
					<Route exact path='/send' element={<MessageSendScreen />} />
					<Route path="*" element={<Navigate to='/' />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;

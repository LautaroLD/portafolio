import React, { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Loading from '../components/Loading';
const HomeScreen = lazy(() => import('../screens/HomeScreen'))
const MessageSendScreen = lazy(() => import('../screens/MessageSendScreen'))

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/send-message" element={<MessageSendScreen />} />
					<Route path="*" element={<Navigate to='/' />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;

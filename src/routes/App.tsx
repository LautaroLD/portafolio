import { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AppLayout from '../layout';
const HomeScreen = lazy(() => import('../screens/HomeScreen'));
const ProjectsScreen = lazy(() => import('../screens/ProjectsScreen'));
const ContactScreen = lazy(() => import('../screens/ContactScreen'));

function App() {
  return (
    <Suspense fallback={<p>cargando</p>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<HomeScreen />} />
            <Route path='proyectos' element={<ProjectsScreen />} />
            <Route path='contacto' element={<ContactScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

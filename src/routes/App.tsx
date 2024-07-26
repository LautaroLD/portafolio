import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AppLayout from '../layout';
import HomeScreen from '../screens/HomeScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ContactScreen from '../screens/ContactScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path='proyectos' element={<ProjectsScreen />} />
          <Route path='contacto' element={<ContactScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

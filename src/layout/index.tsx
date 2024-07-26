import HeaderComponent from '../components/HeaderComponent';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <main className='flex min-h-dvh flex-col'>
      <HeaderComponent />
      <Outlet />
    </main>
  );
}

import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import { BiHome } from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md';
import { GrContact } from 'react-icons/gr';
import { cld } from '../utils/cloudinary';
import { Link } from 'react-router-dom';
import { AdvancedImage } from '@cloudinary/react';
export default function Menu() {
  const items: MenuItem[] = [
    {
      label: 'Inicio',
      icon: <BiHome className='mr-1' />,
      url: '/',
    },
    {
      label: 'Proyectos',
      icon: <MdWorkOutline className='mr-1' />,
      url: '/proyectos',
    },
    {
      label: 'Contacto',
      icon: <GrContact className='mr-1' />,
      url: '/contacto',
    },
  ];

  return (
    <div className='card'>
      <Menubar
        start={
          <Link to='/'>
            <AdvancedImage
              className='bg-light rounded-full w-[40px] aspect-square'
              cldImg={cld.image('projects/logo').format('webp')}
              alt='Logo'
              title='Logo'
            />
          </Link>
        }
        model={items}
        className='bg-transparent border-none justify-between items-center font-w-b'
      />
    </div>
  );
}

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Social() {
  return (
    <div className='flex gap-4'>
      <Link
        to={'https://github.com/LautaroLD'}
        className=' no-underline text-light text-s-icon'
        target='_blank'
      >
        <BsGithub />
      </Link>
      <Link
        to={'https://www.linkedin.com/in/lautaro-duran/'}
        className=' no-underline text-light text-s-icon'
        target='_blank'
      >
        <BsLinkedin />
      </Link>
    </div>
  );
}

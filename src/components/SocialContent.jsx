import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import PlatziLogo from '../assets/platzi_icon.svg';

function SocialContent() {
  return (
    <div className='flex m-auto gap-9'>
      <a
        title='https://github.com/LautaroLD'
        href='https://github.com/LautaroLD'
        target='_blank'
        rel='noreferrer'
      >
        <BsGithub className='text-s-icon hover:scale-[1.4] duration-[700ms] text-light' />
      </a>
      <a
        title='https://www.linkedin.com/in/lautaro-duran/'
        href='https://www.linkedin.com/in/lautaro-duran/'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin className='text-s-icon hover:scale-[1.4] duration-[700ms] text-light' />
      </a>
      <a
        title='https://platzi.com/p/lauttyduran/'
        href='https://platzi.com/p/lauttyduran/'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src={PlatziLogo}
          className='w-[2rem] invert hover:scale-[1.4] duration-[700ms] text-light'
        />
      </a>
    </div>
  );
}

export default SocialContent;

import { BsGithub, BsLinkedin } from 'react-icons/bs'

export default function Social() {
  return (
    <div className='flex gap-4'>
      <a
        href={'https://github.com/LautaroLD'}
        className=' no-underline text-light text-s-icon'
        target='_blank'
      >
        <BsGithub />
      </a>
      <a
        href={'https://www.linkedin.com/in/lautaro-duran/'}
        className=' no-underline text-light text-s-icon'
        target='_blank'
      >
        <BsLinkedin />
      </a>
    </div>
  )
}

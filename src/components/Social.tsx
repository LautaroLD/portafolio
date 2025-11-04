import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

export default function Social() {
  const socials = [
    {
      name: 'GitHub',
      icon: <BsGithub />,
      url: 'https://github.com/LautaroLD',
      color: 'hover:text-purple-600 dark:hover:text-purple-400',
    },
    {
      name: 'LinkedIn',
      icon: <BsLinkedin />,
      url: 'https://www.linkedin.com/in/lautaro-duran/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: <MdEmail />,
      url: 'mailto:duranlautarogabriel@gmail.com',
      color: 'hover:text-cyan-600 dark:hover:text-cyan-400',
    },
  ]

  return (
    <div className='flex gap-6'>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          className={`group relative text-slate-600 dark:text-gray-400 text-4xl ${social.color} transition-all duration-300 hover:scale-125 hover:rotate-12`}
          target='_blank'
          rel='noopener noreferrer'
          title={social.name}
        >
          {social.icon}
          
          {/* Glow effect */}
          <div className='absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-20 blur-xl transition-opacity' />
          
          {/* Tooltip */}
          <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
            <div className='bg-slate-900 dark:bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap border border-slate-700 dark:border-gray-700'>
              {social.name}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

import { FaReact } from 'react-icons/fa'
import { BsBootstrap, BsGit } from 'react-icons/bs'
import {
  TbBrandTailwind,
  TbBrandRedux,
  TbBrandTypescript,
  TbBrandNextjs,
} from 'react-icons/tb'
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoJavascript,
} from 'react-icons/io'

function Technologies() {
  const technologies = [
    {
      name: 'HTML5',
      icon: <IoLogoHtml5 />,
      color: '#f0652a',
      colorLight: '#d9561f',
    },
    {
      name: 'CSS3',
      icon: <IoLogoCss3 />,
      color: '#34aadc',
      colorLight: '#2890bf',
    },
    {
      name: 'Sass',
      icon: <IoLogoSass />,
      color: '#ca669c',
      colorLight: '#b04a82',
    },
    {
      name: 'JavaScript',
      icon: <IoLogoJavascript />,
      color: '#e8d44c',
      colorLight: '#d4bb2a',
    },
    {
      name: 'TypeScript',
      icon: <TbBrandTypescript />,
      color: '#3178C6',
      colorLight: '#2760a8',
    },
    {
      name: 'React',
      icon: <FaReact />,
      color: '#61dbfb',
      colorLight: '#00b4d8',
    },
    {
      name: 'Redux Toolkit',
      icon: <TbBrandRedux />,
      color: '#764ABC',
      colorLight: '#5e3997',
    },
    {
      name: 'Git',
      icon: <BsGit />,
      color: '#f05133',
      colorLight: '#d43f21',
    },
    {
      name: 'Bootstrap',
      icon: <BsBootstrap />,
      color: '#7952b3',
      colorLight: '#5e3d8f',
    },
    {
      name: 'Tailwind CSS',
      icon: <TbBrandTailwind />,
      color: '#38bdf8',
      colorLight: '#0891b2',
    },
    {
      name: 'Next.js',
      icon: <TbBrandNextjs />,
      color: '#000000',
      colorLight: '#1a1a1a',
    },
  ]

  return (
    <div className='flex gap-6 justify-center flex-wrap'>
      {technologies.map((item, index) => (
        <div
          key={`technologies-${index}`}
          className='tech-icon group relative'
          title={item.name}
        >
          <div 
            className='text-5xl transition-colors duration-300 dark:opacity-100'
            style={{ 
              color: item.color,
              // filter: 'drop-shadow(0 0 8px currentColor)'
            }}
          >
            {item.icon}
          </div>
          
          {/* Light mode version with better contrast */}
          <div 
            className='absolute inset-0 text-5xl transition-colors duration-300 opacity-0 dark:opacity-0'
            style={{ 
              color: item.colorLight,
              // filter: 'drop-shadow(0 0 8px currentColor)'
            }}
          >
            {item.icon}
          </div>
          
          {/* Tooltip */}
          <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10'>
            <div className='bg-slate-900 dark:bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap border border-slate-700 dark:border-gray-700'>
              {item.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Technologies

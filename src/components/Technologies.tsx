import { FaReact } from 'react-icons/fa';
import { BsBootstrap, BsGit } from 'react-icons/bs';
import {
  TbBrandTailwind,
  TbBrandRedux,
  TbBrandTypescript,
  TbBrandNextjs,
} from 'react-icons/tb';
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoJavascript,
} from 'react-icons/io';
function Technologies() {
  const technologies = [
    {
      name: 'Html',
      icon: <IoLogoHtml5 color='#f0652a' />,
    },
    {
      name: 'Css',
      icon: <IoLogoCss3 color='#34aadc' />,
    },
    {
      name: 'Sass',
      icon: <IoLogoSass color='#ca669c' />,
    },
    {
      name: 'Javascript',
      icon: <IoLogoJavascript color='#e8d44c' />,
    },
    {
      name: 'Typescript',
      icon: <TbBrandTypescript color='#3178C6' />,
    },
    {
      name: 'React',
      icon: <FaReact color='#61dbfb' />,
    },
    {
      name: 'Redux Toolkit',
      icon: <TbBrandRedux color='#764ABC' />,
    },
    {
      name: 'Git',
      icon: <BsGit color='#f05133' />,
    },
    {
      name: 'Bootstrap',
      icon: <BsBootstrap color='#7952b3' />,
    },
    {
      name: 'Tailwind',
      icon: <TbBrandTailwind color='#38bdf8' />,
    },
    {
      name: 'Next.js',
      icon: <TbBrandNextjs color='#0a0' />,
    },
  ];
  return (
    <div className='flex gap-8 justify-center flex-wrap'>
      {technologies.map((item, index) => (
        <span
          key={`technologies-${index}`}
          title={item.name}
          className='text-s-icon hover:scale-[1.4] transition-transform duration-200'
        >
          {item.icon}
        </span>
      ))}
    </div>
  );
}

export default Technologies;

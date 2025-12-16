import { useEffect } from 'react';
import ButtonCv from '../ButtonCv';
import MyImage from '../MyImage';
import Social from '../Social';
import Technologies from '../Technologies';

function PrincipalSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.observe').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-500'>
      {/* Animated background orbs - removed */}
      <div className='absolute inset-0 overflow-hidden' />

      <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-6 lg:px-20 max-w-7xl mx-auto items-center'>
        {/* Left side - Text content */}
        <div className='space-y-6 observe opacity-0'>
          <div className='space-y-2'>
            <p className='text-gray-600 dark:text-gray-400 text-lg font-medium tracking-wider uppercase'>
              Hola, soy
            </p>
            <h1 className='text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight'>
              Lautaro Durán
            </h1>
            <h2 className='text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300'>
              Desarrollador Web Full Stack
            </h2>
          </div>

          <p className='text-gray-700 dark:text-gray-400 text-lg leading-relaxed max-w-2xl'>
            Apasionado por crear experiencias web excepcionales con código limpio y
            diseño innovador. Especializado en React, TypeScript y tecnologías modernas
            para construir aplicaciones escalables y de alto rendimiento.
          </p>

          <div className='flex flex-wrap gap-4 pt-4'>
            <ButtonCv />
            <a
              href='#projects'
              className='group w-full md:w-auto px-8 py-4 rounded-lg border-2 border-gray-700 dark:border-gray-400 text-gray-700 dark:text-gray-400 font-semibold hover:bg-gray-700 dark:hover:bg-gray-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2'
            >
              Ver Proyectos
              <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </a>
          </div>

          <div className='pt-6'>
            <Social />
          </div>
        </div>

        {/* Right side - Image and tech stack */}
        <div className='space-y-8 observe opacity-0' style={{ animationDelay: '0.2s' }}>
          <div className='relative group'>
            {/* <div className='relative mx-auto'> */}
            {/* <div className='absolute inset-0 border-4 border-gray-400 dark:border-gray-600 rounded-full' />
              <div className='absolute inset-4 border-4 border-gray-300 dark:border-gray-700 rounded-full' /> */}
            <MyImage />
            {/* </div> */}
          </div>

          <div className='glassmorphism-strong rounded-2xl p-8 space-y-4'>
            <h3 className='text-gray-900 dark:text-white text-xl font-semibold text-center mb-6'>
              Stack Tecnológico
            </h3>
            <Technologies />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrincipalSection;

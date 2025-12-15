import { useEffect } from 'react';
import ProjectItem from '../ProjectItem';

function ProjectsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in-up');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.project-observe').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id='projects' className='relative min-h-screen bg-white dark:bg-gray-950 py-20 px-6 lg:px-12 transition-colors duration-500'>
      {/* Floating particles effect - removed */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none' />

      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Section header */}
        <div className='text-center mb-16 space-y-4'>
          <h2 className='text-5xl md:text-6xl font-bold text-gray-900 dark:text-white inline-block'>
            Mis Proyectos
          </h2>
          <div className='w-32 h-1 bg-gray-800 dark:bg-gray-300 mx-auto rounded-full' />
          <p className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'>
            Explora una selección de mis trabajos más recientes y destacados
          </p>
        </div>

        {/* Projects grid */}
        <div className='space-y-12'>
          <ProjectItem />
        </div>
      </div>

      {/* Background decoration - removed */}
    </section>
  );
}

export default ProjectsSection;

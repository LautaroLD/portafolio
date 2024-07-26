import ProjectItem from '../components/ProjectItem';
import Social from '../components/Social';

export default function proyects() {
  return (
    <section className='pb-12 relative text-light px-[7%] bg-figures flex-grow flex flex-col items-center'>
      <div>
        <h2 className='text-6xl font-w-l  text-center rounded-full my-4 '>
          PROYECTOS
        </h2>
        <div className='flex flex-col gap-10  py-3'>
          <ProjectItem />
        </div>
      </div>
      <Social />
    </section>
  );
}

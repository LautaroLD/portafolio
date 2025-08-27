import ProjectItem from '../ProjectItem'

export default function ProjectsSection() {
  return (
    <section className='p-12 relative px-[7%] bg-figures flex-grow flex flex-col items-center'>
      <div>
        <h2 className='text-6xl font-w-b  text-center rounded-full my-4 bg-white px-5 lg:px-14 py-3 max-w-fit mx-auto border-dashed border-8 border-dark '>
          PROYECTOS
        </h2>
        <div className='flex flex-col gap-10  py-3'>
          <ProjectItem />
        </div>
      </div>
    </section>
  )
}

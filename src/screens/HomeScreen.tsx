import ButtonCv from '../components/ButtonCv';
import MyImage from '../components/MyImage';
import Social from '../components/Social';
import Technologies from '../components/Technologies';

export default function HomeScreen() {
  return (
    <section className='bg-bg-gradient grid grid-cols-5 grid-flow-row  flex-grow  pt-[5%] pb-[1%] px-[7%] gap-6'>
      <div className='col-span-6 sm:col-span-3 flex flex-col gap-2'>
        <h1 className='text-s-title-mobile m-0 sm:text-s-primary-title font-bold'>
          Desarrollador frontend
        </h1>
        <p className='text-s-title font-medium m-0'>Lautaro Duran</p>
        <p className='text-s-text m-0 leading-6'>
          Con una fuerte cultura de trabajo y dedicación, utilizo mis
          habilidades en diversas tecnologías con disciplina, autonomía y
          razonamiento lógico para agregar valor a cada proyecto. Estoy
          dispuesto para asumir nuevos desafíos y enfrentar problemas complejos
          para encontrar soluciones innovadoras. Mi enfoque en los resultados me
          permite no solo cumplir con las expectativas, sino superarlas,
          aportando valor a los proyectos en los que participo.
        </p>
      </div>
      <div className='sm:col-start-4 sm:col-end-6 col-span-6 flex flex-col items-center justify-evenly gap-5'>
        <div className='w-2/3 max-w-52 aspect-square relative'>
          <MyImage />
        </div>
        <Social />
      </div>
      <div className='col-span-6 flex items-center justify-center flex-col sm:gap-0 gap-10 mt-auto'>
        <Technologies />
        <ButtonCv />
      </div>
    </section>
  );
}

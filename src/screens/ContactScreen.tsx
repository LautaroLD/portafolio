import Form from '../components/Form';
import Social from '../components/Social';

export default function page() {
  return (
    <section className='flex flex-grow flex-col justify-center items-center pb-2'>
      <h2 className='text-center text-light text-s-title font-w-l m-0'>
        Pongámonos en contacto
      </h2>
      <Form />
      <Social />
    </section>
  );
}

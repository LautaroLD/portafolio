import Form from '../Form'
import Social from '../Social'

export default function ContactSection() {
  return (
    <section className='flex flex-grow flex-col justify-center items-center bg-black py-6'>
      <h2 className='text-center text-light text-s-title font-w-l m-0'>
        Pongámonos en contacto
      </h2>
      <Form />
      <Social />
    </section>
  )
}

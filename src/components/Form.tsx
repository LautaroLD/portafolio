import { FormEvent, useRef } from 'react';
import { Toast } from 'primereact/toast';
interface Form {
  name: string;
  email: string;
  content: string;
}
function Form() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const toast = useRef<Toast>(null);
  const show = ({
    severity,
    summary,
    detail,
  }: {
    severity: 'success' | 'error';
    summary: string;
    detail: string;
  }) => {
    toast.current &&
      toast.current.show({
        severity,
        summary,
        detail,
        life: 3000,
      });
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const content = formData.get('content') as string;

    await fetch('./', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ name, email, content }).toString(),
    })
      .then(() => {
        show({
          detail: 'Pronto recibirás una respuesta.',
          severity: 'success',
          summary: 'Se ha enviado tu mensaje.',
        });
        formRef.current?.reset();
      })
      .catch(() => {
        show({
          detail:
            'Vuelve a intentarlo o envía tu mensaje directamente a duranlautarogabriel@gmail.com',
          severity: 'error',
          summary: 'Ha ocurrido un error.',
        });
      });
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='flex flex-col w-10/12 max-w-[600px] gap-3 text-s-text m-auto'
        name='contact'
        method='post'
        data-netlify='true'
      >
        <input type='hidden' name='form-name' value='contact' />
        <label htmlFor='name'>
          <input
            className='w-full p-3 bg-transparent border-0 border-b border-b-light text-light placeholder-gray-light focus:outline-none focus:bg-gray'
            id='name'
            placeholder='Nombre'
            type='text'
            name='name'
            required
          />
        </label>
        <label htmlFor='email'>
          <input
            id='email'
            className='w-full p-3 bg-transparent border-0 border-b border-b-light text-light placeholder-gray-light focus:outline-none focus:bg-gray'
            placeholder='Email'
            type='email'
            name='email'
            required
          />
        </label>
        <label htmlFor='content'>
          <textarea
            id='content'
            className='w-full p-3 bg-transparent border-0 border-b border-b-light text-light placeholder-gray-light focus:outline-none focus:bg-gray resize-none'
            placeholder='Mensaje'
            name='content'
            cols={30}
            rows={5}
            required
          />
        </label>
        <button
          className='p-3 rounded-xl border-0 bg-btn-bg max-w-xs py-2.5 px-7 mx-auto font-w-b hover:bg-btn-bg hover:text-light hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer'
          type='submit'
        >
          Enviar
        </button>
      </form>
      <Toast ref={toast} />
    </>
  );
}

export default Form;

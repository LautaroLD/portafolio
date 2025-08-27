import { FormEvent, useRef } from 'react'
import { Toast } from 'primereact/toast'
interface Form {
  name: string
  email: string
  content: string
}
function Form() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const toast = useRef<Toast>(null)
  const show = ({
    severity,
    summary,
    detail,
  }: {
    severity: 'success' | 'error'
    summary: string
    detail: string
  }) => {
    toast.current &&
      toast.current.show({
        severity,
        summary,
        detail,
        life: 3000,
      })
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const searchParams = new URLSearchParams()

    for (const pair of formData.entries()) {
      searchParams.append(pair[0], pair[1] as string)
    }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: searchParams.toString(),
    })
      .then(() => {
        show({
          detail: 'Pronto recibirás una respuesta.',
          severity: 'success',
          summary: 'Se ha enviado tu mensaje.',
        })
        formRef.current?.reset()
      })
      .catch(() => {
        show({
          detail:
            'Vuelve a intentarlo o envía tu mensaje directamente a duranlautarogabriel@gmail.com',
          severity: 'error',
          summary: 'Ha ocurrido un error.',
        })
      })
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='flex flex-col w-10/12 max-w-[600px] gap-3 text-s-text m-auto'
        name='contact'
        method='post'
        data-netlify='true'
        data-netlify-recaptcha='true'
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
          className='text-dark bg-light text-s-text text-center font-w-b m-auto py-3 px-8 decoration-0 transition-all duration-500 border w-full sm:w-fit hover:bg-dark hover:text-light'
          type='submit'
        >
          Enviar
        </button>
        <div data-netlify-recaptcha='true'></div>
      </form>
      <Toast ref={toast} />
    </>
  )
}

export default Form

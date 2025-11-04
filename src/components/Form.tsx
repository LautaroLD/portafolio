import { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs.config'
import { toast } from 'react-toastify'

function Form() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      // Enviar email usando EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current!,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      if (result.status === 200) {
        toast.success('Email enviado correctamente')
        formRef.current?.reset()
      }
    } catch (error) {
      toast.error('Error al enviar email')
      console.error('Error al enviar email:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className='w-full space-y-6'>
        <div className='space-y-2'>
          <label
            htmlFor='name'
            className='block text-sm font-semibold text-slate-700 dark:text-gray-400 uppercase tracking-wider'
          >
            Nombre
          </label>
          <input
            className='w-full px-4 py-3 bg-slate-100 dark:bg-gray-900/50 border-2 border-slate-300 dark:border-gray-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all duration-300'
            id='name'
            placeholder='Tu nombre completo'
            type='text'
            name='from_name'
            required
            disabled={isSubmitting}
          />
        </div>

        <div className='space-y-2'>
          <label
            htmlFor='email'
            className='block text-sm font-semibold text-slate-700 dark:text-gray-400 uppercase tracking-wider'
          >
            Email
          </label>
          <input
            id='email'
            className='w-full px-4 py-3 bg-slate-100 dark:bg-gray-900/50 border-2 border-slate-300 dark:border-gray-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all duration-300'
            placeholder='tu@email.com'
            type='email'
            name='reply_to'
            required
            disabled={isSubmitting}
          />
        </div>

        <div className='space-y-2'>
          <label
            htmlFor='message'
            className='block text-sm font-semibold text-slate-700 dark:text-gray-400 uppercase tracking-wider'
          >
            Mensaje
          </label>
          <textarea
            id='message'
            className='w-full px-4 py-3 bg-slate-100 dark:bg-gray-900/50 border-2 border-slate-300 dark:border-gray-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all duration-300 resize-none'
            placeholder='Cuéntame sobre tu proyecto...'
            name='message'
            rows={6}
            required
            disabled={isSubmitting}
          />
        </div>

        <button
          className='btn-primary w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/30 dark:hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3'
          type='submit'
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg
                className='animate-spin h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <span>Enviar Mensaje</span>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                />
              </svg>
            </>
          )}
        </button>
      </form>
    </>
  )
}

export default Form

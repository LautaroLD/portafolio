import React from 'react'

function MessageSendScreen() {
  return (
    <main className='flex h-[100vh]'>
      <div className='flex justify-center items-center flex-col max-w-[400px] h-[500px] p-4 text-center m-auto bg-gray-light rounded-2xl'>
        <h3 className='text-s-title'>¡¡Gracias por su mensaje!!</h3>
        <p className='text-s-text'>Pronto recibirá una respuesta.</p>
        <a className='rounded-xl text-s-text font-w-b py-2 px-4 decoration-0 text-gray hover:scale-110 duration-300 hover:text-btn-bg-hover' href='/'>volver</a>
      </div >
    </main>
  )
}

export default MessageSendScreen
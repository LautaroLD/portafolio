import React from 'react'

function MessageSendScreen() {
  return (
    <>
      <div className='send__container'>
        <h3 className='send__title'>¡¡Gracias por su mensaje!!</h3>
        <p className='send__text'>pronto recibirá una respuesta.</p>
        <a className='btn btn-secondary' href={`${document.location.origin}${document.location.pathname}`}>volver</a>
      </div>
    </>
  )
}

export default MessageSendScreen
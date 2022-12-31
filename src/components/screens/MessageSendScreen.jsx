import React from 'react'

function MessageSendScreen() {
  return (
    <>
      <h3>Gracias por su mensaje, pronto recibirá una respuesta.</h3>
      <a className='btn btn-repo' href={`${document.location.origin}${document.location.pathname}`}>volver</a>
    </>
  )
}

export default MessageSendScreen
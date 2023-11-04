import React from 'react'

function Form() {
    return (
        <form className='form' name='form-contacto' netlify method='POST'>
            <input className='input' placeholder='Nombre' type="text" name="name" required />
            <input className='input' placeholder='Email' type="email" name="email" required />
            <textarea className='input' placeholder='Mensaje' name="content" cols="30" rows="5" required />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form
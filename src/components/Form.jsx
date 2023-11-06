import React from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
    return (
        <form className='form' name='contacto' method="POST" data-netlify="true" netlify>
            <input className='input' placeholder='Nombre' type="text" name="sender-name" required />
            <input className='input' placeholder='Email' type="email" name="email" required />
            <textarea className='input' placeholder='Mensaje' name="content" cols="30" rows="5" required />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form
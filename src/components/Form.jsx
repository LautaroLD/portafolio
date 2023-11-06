import React from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
    return (
        <form className='form-footer' method="post" name='contact' data-netlify="true" netlify>
            <input type="hidden" name="form-name" value="contact" />
            <input className='input' placeholder='Nombre' type="text" name="name" required />
            <input className='input' placeholder='Email' type="email" name="email" required />
            <textarea className='input' placeholder='Mensaje' name="content" cols="30" rows="5" required />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form
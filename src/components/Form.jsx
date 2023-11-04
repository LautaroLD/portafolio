import React from 'react'

function Form() {
    return (
        <form className='form' name='form-contacto' netlify>
            <input className='input' placeholder='Nombre' type="text" name="name" required />
            <input className='input' placeholder='Email' type="email" name="email" required />
            <input type="hidden" name="_template" value="table"></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value={`${document.location.href}/send`}></input>
            <textarea className='input' placeholder='Mensaje' name="content" cols="30" rows="5" required />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form
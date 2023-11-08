import React from 'react'
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => navigate("/send-message"))
            .catch((error) => alert(error));
    };
    return (
        <form onSubmit={handleSubmit} className='flex flex-col w-10/12 max-w-[600px] gap-3 text-s-text' method="post" name='contact' data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <input className='p-3 bg-transparent border-b border-b-light text-light placeholder-gray-light focus:outline-none focus:bg-gray' placeholder='Nombre' type="text" name="name" required />
            <input className='p-3 bg-transparent border-b border-b-light text-light placeholder-gray-light focus:outline-none focus:bg-gray' placeholder='Email' type="email" name="email" required />
            <textarea className='p-3 bg-transparent border-b border-b-light text-light placeholder-gray-light focus:outline-none focus:bg-gray resize-none' placeholder='Mensaje' name="content" cols="30" rows="5" required />
            <button className='p-3 rounded-xl border-0 bg-btn-bg max-w-xs py-2.5 px-7 mx-auto font-w-b hover:bg-btn-bg hover:text-light hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer' type="submit">Enviar</button>
        </form>
    )
}

export default Form
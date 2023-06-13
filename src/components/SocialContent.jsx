import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs"
function SocialContent() {
    return (
        <div className='flex m-auto gap-9'>
            <a title='https://github.com/LautaroLD' href='https://github.com/LautaroLD' target='_blank'>
                <BsGithub className='text-[4rem] hover:text-slate-300 hover:scale-[1.4] duration-[700ms]' />
            </a>
            <a title='https://www.linkedin.com/in/lautaro-duran/' href='https://www.linkedin.com/in/lautaro-duran/' target='_blank' >
                <BsLinkedin className='text-[4rem] hover:text-slate-300 hover:scale-[1.4] duration-[700ms]' />
            </a>
        </div>
    )
}

export default SocialContent
import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs"
function SocialContent() {
    return (
        <div className='social-content'>
            <a className='social-imgs' href='https://github.com/LautaroLD' target='_blank'>
                <BsGithub className='social-imgs__github social__icon' />
            </a>
            <a className='social-imgs' href='https://www.linkedin.com/in/lautaro-duran/' target='_blank' >
                <BsLinkedin className='social-imgs__linkedin social__icon' />
            </a>
        </div>
    )
}

export default SocialContent
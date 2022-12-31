import React from 'react'

import { ReactComponent as IconGithub } from '../assets/bxl-github.svg'
import { ReactComponent as IconLinkedin } from '../assets/bxl-linkedin-square.svg'
function SocialContent() {
    return (
        <div className='social-content'>
            <a className='social-imgs' href='https://github.com/LautaroLD' target='_blank'>
                <IconGithub className='social-imgs__github social__icon' />
            </a>
            <a className='social-imgs' href='https://www.linkedin.com/in/lautaro-duran/' target='_blank' >
                <IconLinkedin className='social-imgs__linkedin social__icon' />
            </a>
        </div>
    )
}

export default SocialContent
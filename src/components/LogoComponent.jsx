import React from 'react'
import Logo from '../assets/logo.png'

function LogoComponent({ site }) {
    return (
        <img className={`about-me__logo-${site}`} src={Logo} alt='Logo' />
    )
}

export default LogoComponent
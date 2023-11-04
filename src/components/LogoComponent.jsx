import React from 'react'

function LogoComponent({ site }) {
    return (
        <img loading='lazy' className={`about-me__logo-${site}`} src='https://onedrive.live.com/embed?resid=16A865F844F501DD%21172331&authkey=%21AAj0abtDy5BEUYA&width=500&height=500' alt='Logo' />
    )
}

export default LogoComponent
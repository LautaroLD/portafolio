import { AdvancedImage } from '@cloudinary/react';
import React from 'react'
import { cld } from '../utils/cloudinary';

function LogoComponent() {
    return (
        <div className="w-20 m-auto bg-light rounded-full">
            <AdvancedImage cldImg={cld.image('projects/logo')}/>
        </div>
    )
}

export default LogoComponent
import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../utils/cloudinary';

export default function MyImage() {
  return (
    <AdvancedImage
      cldImg={cld.image('projects/mia')}
      // className='w-full rounded-full'
      className='bg-light rounded-full object-contain'
      alt='Lautaro photo'
    />
    // <CldImage
    //   alt='Lautaro Duran image'
    //   src={'projects/mia'}
    //   fill
    //   sizes='100%'
    //   crop={{
    //     type: 'auto',
    //     source: true,
    //   }}
    // />
  );
}

import { cld } from '../utils/cloudinary';
import LazyImage from './LazyImage';

export default function MyImage() {
  const optimizedImage = cld
    .image('projects/mia');

  return (
    <div className='relative w-56 h-56 mx-auto'>
      <LazyImage
        cldImg={optimizedImage}
        className='w-full h-full rounded-full object-cover glassmorphism-strong'
        alt='Lautaro Durán - Desarrollador Web'
        title='Lautaro Durán'
      />
    </div>
  );
}

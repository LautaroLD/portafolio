import { cld } from '../utils/cloudinary';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import LazyImage from './LazyImage';

export default function MyImage() {
  const optimizedImage = cld
    .image('projects/mia')
    .resize(thumbnail().width(400).height(400).gravity(autoGravity()))
    .delivery(format('auto'))
    .delivery(quality('auto'));

  return (
    <div className='relative w-full h-full'>
      <LazyImage
        cldImg={optimizedImage}
        className='w-full h-full rounded-full object-cover border-4 border-gray-400 dark:border-gray-600'
        alt='Lautaro Durán - Desarrollador Web'
        title='Lautaro Durán'
      />
    </div>
  );
}

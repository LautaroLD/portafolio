import { cld } from '../utils/cloudinary'
import { thumbnail } from '@cloudinary/url-gen/actions/resize'
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity'
import { format, quality } from '@cloudinary/url-gen/actions/delivery'
import LazyImage from './LazyImage'

export default function MyImage() {
  const optimizedImage = cld
    .image('projects/mia')
    .resize(thumbnail().width(400).height(400).gravity(autoGravity()))
    .delivery(format('auto'))
    .delivery(quality('auto'))

  return (
    <div className='relative w-full h-full'>
      <LazyImage
        cldImg={optimizedImage}
        className='w-full h-full rounded-full object-cover border-4 border-cyan-500/40 dark:border-cyan-400/30 shadow-2xl shadow-cyan-500/20'
        alt='Lautaro Durán - Desarrollador Web'
        title='Lautaro Durán'
      />
    </div>
  )
}

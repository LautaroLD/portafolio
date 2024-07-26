import { Cloudinary } from '@cloudinary/url-gen';
import { CLOUD_KEY, CLOUD_NAME, CLOUD_SECRET } from '../constants';

export const cld = new Cloudinary({
  cloud: { cloudName: CLOUD_NAME, apiKey: CLOUD_KEY, apiSecret: CLOUD_SECRET },
});

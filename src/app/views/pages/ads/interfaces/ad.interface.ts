import { MediaObjectI } from 'src/app/core/shared/interfaces/general/media-object.interface';

export interface Ad {
  image: MediaObjectI;
  expiry: string;
  _id: string;
}

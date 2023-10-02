import { FormControl } from '@angular/forms';

export interface AddAdForm {
  expiry: FormControl<string>;
}

export interface AddAdRequest {
  expiry: string;
  image: File;
}

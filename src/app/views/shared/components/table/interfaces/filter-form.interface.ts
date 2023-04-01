import { FormControl } from '@angular/forms';

export interface FilterForm {
  startDate: FormControl<string>;
  endDate: FormControl<string>;
}

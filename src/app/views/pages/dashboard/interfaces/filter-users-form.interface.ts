import { FormControl } from '@angular/forms';
import { FilterForm } from 'src/app/core/shared/interfaces/forms/filter-form.interface';

export interface FilterUsersForm extends FilterForm {
  phoneNumber: FormControl<string | null>;
  fullName: FormControl<string | null>;
}

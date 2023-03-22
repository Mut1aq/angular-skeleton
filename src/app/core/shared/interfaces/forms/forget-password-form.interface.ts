import { FormControl } from '@angular/forms';

export interface ResetPasswordForm {
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

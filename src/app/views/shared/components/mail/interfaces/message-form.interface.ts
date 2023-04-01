import { FormControl, Validators } from "@angular/forms";

export interface MessageForm {
  recipients: FormControl<string>,
  subject: FormControl<string>,
  body: FormControl<string>
}

export const messageFormControls = {
  recipients: [
    '',
    [Validators.required]
  ],
  subject: [
    '',
    [Validators.required]
  ],
  body: [
    '',
    [Validators.required]
  ],

}

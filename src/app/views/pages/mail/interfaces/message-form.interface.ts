import { Validators } from '@angular/forms';

export const bulkEmailFormControls = {
  emailSendOptions: [
    null,
    [Validators.required, Validators.min(1), Validators.max(6)],
  ],
  priority: [
    'low',
    [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
  ],
  subject: [
    '',
    [Validators.required, Validators.minLength(5), Validators.maxLength(998)],
  ],
  body: [
    '',
    [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(384000),
    ],
  ],
};

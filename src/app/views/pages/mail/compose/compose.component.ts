import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { bulkEmailFormControls } from '../interfaces/message-form.interface';

export interface Recipient {
  name: string;
  id: number;
}
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss'],
})
export class ComposeComponent {
  bulkEmailForm = this.fb.group(bulkEmailFormControls);

  constructor(private readonly fb: NonNullableFormBuilder) {}

  ngOnInit() {}

  onSubmit(): void {}

  public get body() {
    return this.bulkEmailForm.get('body');
  }

  public get subject() {
    return this.bulkEmailForm.get('subject');
  }

  public get emailSendOptions() {
    return this.bulkEmailForm.get('emailSendOptions');
  }
}

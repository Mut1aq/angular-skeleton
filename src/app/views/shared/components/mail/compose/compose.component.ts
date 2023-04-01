import { Component, ViewChild } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill'
import { MessageForm, messageFormControls } from '../interfaces/message-form.interface';

export interface Recipient {
  name: string,
  id: number
}
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})

export class ComposeComponent {
  messageForm!: FormGroup<MessageForm>;
  @ViewChild('editor', {
    static: true
  }) editor!: QuillEditorComponent
  availableRecipients: Recipient[] =
    [
      {
        name: "jamil alhunity",
        id: 1
      },
      {
        name: "mutlaq faharan",
        id: 2
      }
    ];

  constructor(private readonly fb: NonNullableFormBuilder) { }

  ngOnInit() {
    this.initComposeForm()
  }

  initComposeForm(): void {
    this.messageForm = this.fb.group({
      ...messageFormControls
    })
  }

  onSubmit(): void {
  }
}

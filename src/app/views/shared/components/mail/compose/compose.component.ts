import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill'

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent {
  messageForm!: FormGroup;
  @ViewChild('editor', {
    static: true
  }) editor!: QuillEditorComponent
  availableRecipients =
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


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      recipients: ['', Validators.required],
      subject: ['', Validators.required],
      body: ['']
    });
  }

  onSubmit(): void {
  }
}

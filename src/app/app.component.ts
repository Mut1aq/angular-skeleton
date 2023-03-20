import { Component } from '@angular/core';
import { TranslationService } from './core/services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public readonly translationService: TranslationService) {}
}

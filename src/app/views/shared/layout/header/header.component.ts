import { Component, Input } from '@angular/core';
import { TranslationService } from 'src/app/core/services/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private readonly translationService: TranslationService) {}
  tabletSize = 768;
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getHeadClass(): string {
    return this.collapsed && this.screenWidth > this.tabletSize
      ? 'head-trimmed'
      : 'head-md-screen';
  }

  changeLanguage() {
    this.translationService.setLanguage(
      this.translationService.getSelectedLanguage() === 'en' ? 'ar' : 'en'
    );
  }
}

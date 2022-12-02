import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})

export class Translate {
  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  currentLanguage = 'en';

  changeLanguage() {
    this.translate.currentLang == 'en'
      ? this.translate.use('ar')
      : this.translate.use('en');
    this.currentLanguage = this.translate.currentLang;
  }

  initLanguage() {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  setLanguage(lang?: string) {
    if (!lang) {
      lang =
        localStorage.getItem('language') || this.translate.getDefaultLang();
    }

    this.translate.use(lang);
    localStorage.setItem('language', lang);

    if (lang !== 'ar') {
      document.getElementsByTagName('html')[0].setAttribute('lang', lang);
      document.getElementsByTagName('html')[0].setAttribute('direction', 'ltr');
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
    } else {
      document.getElementsByTagName('html')[0].setAttribute('lang', lang);
      document.getElementsByTagName('html')[0].setAttribute('direction', 'rtl');
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');

    }
  }
  getSelectedLanguage(): any {
    return localStorage.getItem('language') || this.translate.getDefaultLang();
  }
}

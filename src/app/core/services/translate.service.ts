import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformID: Object
  ) {
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
  setLanguage(lang: string) {
    if (!lang) {
      if (isPlatformBrowser(this.platformID))
        lang =
          localStorage.getItem('language') || this.translate.getDefaultLang();
    }

    this.translate.use(lang);
    if (isPlatformBrowser(this.platformID))
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
    if (isPlatformBrowser(this.platformID))
      return (
        localStorage.getItem('language') || this.translate.getDefaultLang()
      );
  }
}

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Translation } from '../shared/interfaces/general/translation.interface';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(
    private readonly toastrService: ToastrService,
    private readonly translate: TranslateService
  ) {}

  toastrOptions = {
    timeOut: 5000,
    closeButton: true,
    progressBar: true,
    enableHtml: true,
  };

  showInfo(description: string) {
    let translationSubscriber$ = this.translate
      .get(['common.info', description])
      .subscribe((translatedString: Translation) => {
        this.toastrService.info(
          translatedString[description],
          translatedString['common.info'],
          this.toastrOptions
        );
      });
    translationSubscriber$.unsubscribe();
  }

  showSuccess(description: string) {
    let translationSubscriber$ = this.translate
      .get(['common.success', description])
      .subscribe((translatedString: Translation) => {
        this.toastrService.success(
          translatedString[description],
          translatedString['common.success'],
          this.toastrOptions
        );
      });
    translationSubscriber$.unsubscribe();
  }

  showWarning(description: string) {
    let translationSubscriber$ = this.translate
      .get(['common.warning', description])
      .subscribe((translatedString: Translation) => {
        this.toastrService.warning(
          translatedString[description],
          translatedString['common.warning'],
          this.toastrOptions
        );
      });
    translationSubscriber$.unsubscribe();
  }

  showError(description: string) {
    let translationSubscriber$ = this.translate
      .get(['common.error', description])
      .subscribe((translatedString: Translation) => {
        this.toastrService.error(
          translatedString[description],
          translatedString['common.error'],
          this.toastrOptions
        );
      });
    translationSubscriber$.unsubscribe();
  }

  _onApiError = (error: any) => {
    this.showError(
      `${
        error?.error?.errors?.length > 0
          ? error?.error?.errors?.join('</br></br>')
          : error.error.message || error.error.error
      }`
    );
  };

  loginError() {
    this.toastrService.error('You Have To login');
  }

  roleError() {
    this.toastrService.error('You are not allowed to enter wanted page');
  }
}

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(
    private toastrService: ToastrService,
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
      .get('common.info')
      .subscribe((translatedString: string) => {
        this.toastrService.info(
          description,
          translatedString,
          this.toastrOptions
        );
      });
    translationSubscriber$.unsubscribe();
  }

  showSuccess(description: string) {
    let translationSubscriber$ = this.translate
      .get('common.success')
      .subscribe((translatedString: string) => {
        this.toastrService.success(
          description,
          translatedString,
          this.toastrOptions
        );
      });
    translationSubscriber$.unsubscribe();
  }

  showWarning(description: string) {
    let translationSubscriber$ = this.translate
      .get('common.warning')
      .subscribe((translatedString: string) => {
        this.toastrService.warning(
          description,
          translatedString,
          this.toastrOptions
        );
      });
    translationSubscriber$.unsubscribe();
  }

  showError(description: string) {
    let translationSubscriber$ = this.translate
      .get('common.error')
      .subscribe((translatedString: string) => {
        this.toastrService.error(
          description,
          translatedString,
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
          : error.error.error
      }`
    );
  };
}

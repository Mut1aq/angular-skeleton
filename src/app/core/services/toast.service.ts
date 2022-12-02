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
    timeOut: 1000,
    closeButton: true,
    progressBar: true,
  };

  showInfo(title: string, description: string) {
    this.toastrService.info(description, title, this.toastrOptions);
  }

  showSuccess(title: string, description: string) {
    this.toastrService.success(description, title, this.toastrOptions);
  }

  showWarning(title: string, description: string) {
    this.toastrService.warning(description, title, this.toastrOptions);
  }

  showError(title: string, description: string) {
    this.toastrService.error(description, title, this.toastrOptions);
  }

  _onApiError = (error: any) => {
    this.showError(
      this.translate.instant('general.error'),
      error?.error?.errors?.length > 0
        ? error?.error?.errors?.join(',') || ''
        : error.error.error
    );
  };

  _onApiSuccess = (data: any) => {
    this.showSuccess(this.translate.instant('general.success'), data);
  };
}

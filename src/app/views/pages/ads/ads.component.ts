import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { finalize, Subscription } from 'rxjs';
import { ToastService } from 'src/app/core/services/toast.service';
import { HttpError } from 'src/app/core/shared/interfaces/http-response/http-error.interface';
import { AdsService } from './ads.service';
import { Ad } from './interfaces/ad.interface';
import { AddAdForm, AddAdRequest } from './interfaces/add-ad-form.interface';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  ads?: Ad[];
  addAdForm!: FormGroup<AddAdForm>;
  public file!: File;
  today = new Date().toISOString().split('T')[0];
  twentyThreeDaysFromNow = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 23
  )
    .toISOString()
    .split('T')[0];

  constructor(
    private readonly adsService: AdsService,
    private readonly toast: ToastService,
    private readonly fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {
    this.fetchAds();
    this.initAddAdForm();
  }

  fetchAds() {
    let adsSubscriber$ = this.adsService
      .fetchAds({ skip: 0, limit: 100 })
      .subscribe({
        next: (ads) => {
          this.ads = ads;
        },
        error: (err: HttpError) => {
          this.toast._onApiError(err);
        },
      });

    this.subscriptions.push(adsSubscriber$);
  }

  initAddAdForm() {
    this.addAdForm = this.fb.group({
      expiry: ['', Validators.required],
    });
  }

  public dropped(files: NgxFileDropEntry[]) {
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          this.file = file;
        });
      } else {
        this.toast.showInfo('common.directory');
      }
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('expiry', this.addAdForm.get('expiry')?.value!);
    formData.append('image', this.file);
    let addAdSubscriber$ = this.adsService
      .addAd(formData as unknown as AddAdRequest)
      .pipe(
        finalize(() => {
          this.fetchAds();
        })
      )
      .subscribe({
        next: (returnMessage) => {
          this.toast.showSuccess(returnMessage.message);
        },
        error: (err: HttpError) => {
          this.toast._onApiError(err);
        },
      });
    this.subscriptions.push(addAdSubscriber$);
  }

  deleteAd(adID: string) {
    let deleteSubscriber$ = this.adsService.deleteAd(adID).subscribe({
      next: (returnMessage) => {
        this.toast.showSuccess(returnMessage.message);
        this.fetchAds();
      },
      error: (err: HttpError) => {
        this.toast._onApiError(err);
      },
    });
    this.subscriptions.push(deleteSubscriber$);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions.splice(0);
    this.ads?.splice(0);
  }
}

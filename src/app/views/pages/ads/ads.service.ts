import { Injectable } from '@angular/core';
import { Constants } from 'src/app/config/constants';
import { APIService } from 'src/app/core/services/api.service';
import { ReturnMessage } from 'src/app/core/shared/interfaces/http-response/return-message.interface';
import { FilterQuery } from 'src/app/core/shared/interfaces/queries/filter-query.interface';
import { Ad } from './interfaces/ad.interface';
import { AddAdRequest } from './interfaces/add-ad-form.interface';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  constructor(private readonly api: APIService) {}

  fetchAds(filterQuery: FilterQuery) {
    return this.api.get<Ad[]>(Constants.ADS_PATH, filterQuery);
  }

  deleteAd(adID: string) {
    return this.api.delete<ReturnMessage>(Constants.ADS_PATH + adID);
  }

  addAd(addAdRequest: AddAdRequest) {
    return this.api.post<ReturnMessage>(Constants.ADS_PATH, addAdRequest);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/config/constants';
import { APIService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private readonly api: APIService) {}

  sendBulkEmail(): Observable<any> {
    return this.api.get<any>(Constants.MAILS_PATH);
  }
}

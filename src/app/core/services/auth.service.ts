import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/config/constants';
import { DecodedToken } from '../shared/interfaces/general/decoded-token.interface';
import { LoginBody } from '../shared/interfaces/http-requests/login.interface';
import { ResetPasswordBody } from '../shared/interfaces/http-requests/reset-password.interface';
import { Tokens } from '../shared/interfaces/http-response/login-response.interface';
import { ReturnMessage } from '../shared/interfaces/http-response/return-message.interface';
import { APIService } from './api.service';
import { SessionService } from './session.service';
import { ToastService } from './toast.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private readonly jwtHelper: JwtHelperService,
    private readonly sessionService: SessionService,
    private readonly api: APIService,
    private readonly translate: TranslateService,
    private readonly toastService: ToastService
  ) {}

  isLoggedIn(): boolean {
    if (this.sessionService.accessToken) {
      try {
        return !this.jwtHelper.isTokenExpired(this.sessionService.accessToken);
      } catch (err) {
        return false;
      }
    }
    return false;
  }

  initLoggedInUser(tokens: { accessToken: string; refreshToken: string }) {
    this.sessionService.removeTokensAndAllocateNewTokens(tokens);
    this.toastService.showSuccess(this.translate.instant('success.login'));
  }

  public decodeToken(prop?: string) {
    const decodedToken = this.jwtHelper.decodeToken<DecodedToken>(
      this.sessionService.accessToken
    );
    return prop ? decodedToken![prop] : decodedToken;
  }

  public logoutUser(): Observable<ReturnMessage> {
    return this.api.get(Constants.AUTH_PATH + 'logout', {});
  }

  public resetPassword(
    resetPasswordBody: ResetPasswordBody
  ): Observable<ReturnMessage> {
    return this.api.post(
      Constants.AUTH_PATH + 'reset-password',
      resetPasswordBody
    );
  }

  public login(loginBody: LoginBody): Observable<Tokens> {
    return this.api.post(Constants.AUTH_PATH + 'login', loginBody);
  }
}

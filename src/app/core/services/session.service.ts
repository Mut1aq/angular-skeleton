import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  constructor() {}

  public set accessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  public get accessToken(): any {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken ? accessToken : undefined;
  }

  public set refreshToken(refreshToken: string) {
    localStorage.setItem('refreshToken', refreshToken);
  }

  public get refreshToken(): any {
    const refreshToken = localStorage.getItem('refreshToken');
    return refreshToken ? refreshToken : undefined;
  }

  public set language(language: string) {
    localStorage.setItem('language', language);
  }

  public get language(): any {
    const language = localStorage.getItem('language');
    return language ? language : 'en';
  }

  removeAccessToken() {
    localStorage.removeItem('accessToken');
  }

  removeRefreshToken() {
    localStorage.removeItem('refreshToken');
  }

  removeTokensAndAllocateNewTokens(tokens: {
    accessToken: string;
    refreshToken: string;
  }) {
    this.removeAccessToken();
    this.removeRefreshToken();
    this.accessToken = tokens.accessToken;
    this.refreshToken = tokens.refreshToken;
  }
}

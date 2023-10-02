import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../services/auth.service';
import { SessionService } from '../services/session.service';
import { ToastService } from '../services/toast.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService {
  canActivate(
    toastService: ToastService,
    authService: AuthService,
    sessionService: SessionService
  ): boolean {
    const router = inject(Router);

    if (!authService.isLoggedIn()) {
      toastService.loginError();
      sessionService.removeAccessToken();
      router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}

export const canActivateAuth: CanActivateFn = (
  _route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
) => {
  return inject(AuthGuardService).canActivate(
    inject(ToastService),
    inject(AuthService),
    inject(SessionService)
  );
};

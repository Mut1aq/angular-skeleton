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

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  canActivate(): boolean {
    const toastService = inject(ToastService);
    const authService = inject(AuthService);
    const router = inject(Router);
    const sessionService = inject(SessionService);

    if (!authService.loggedIn()) {
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
  return inject(AuthGuardService).canActivate();
};

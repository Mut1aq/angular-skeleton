import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { Role } from '../shared/enums/role.enum';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService {
  canActivate(): boolean {
    const toastService = inject(ToastService);
    const authService = inject(AuthService);
    const router = inject(Router);
    if (authService.decodeToken('role') === Role.ADMIN) {
      return true;
    }
    toastService.roleError();
    router.navigate(['auth/login']);
    return false;
  }
}

export const canActivateRole: CanActivateFn = (
  _route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
) => {
  return inject(RoleGuardService).canActivate();
};

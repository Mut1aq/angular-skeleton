import { NgModule } from '@angular/core';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { SessionService } from '../services/session.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    SessionService,
  ],
})
export class GuardsModule {}

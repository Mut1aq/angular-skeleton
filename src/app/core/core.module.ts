import { NgModule } from '@angular/core';
import { GuardsModule } from './guards/guards.module';
import { HttpRequestInterceptorProvider } from './interceptors/http-request.interceptor';

@NgModule({
  declarations: [],
  imports: [GuardsModule],
  exports: [],
  providers: [HttpRequestInterceptorProvider],
})
export class CoreModule {}

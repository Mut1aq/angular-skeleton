import { NgModule } from '@angular/core';
import { HttpRequestInterceptorProvider } from './interceptors/token.interceptor';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [HttpRequestInterceptorProvider],
})
export class CoreModule {}

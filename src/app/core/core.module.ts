import { NgModule } from '@angular/core';
import { HttpRequestInterceptorProvider } from './interceptors/http.interceptor';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [HttpRequestInterceptorProvider],
})
export class CoreModule {}

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from 'src/app/core/services/translate.service';

@NgModule({
  declarations: [],
  imports: [TranslateModule],
  exports: [TranslateModule],
  providers: [TranslationService],
})
export class TranslationModule {}

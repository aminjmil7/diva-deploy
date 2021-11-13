import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CallHistoryRoutingModule } from './call-history-routing.module';
import { CallHistoryComponent } from './call-history.component';

@NgModule({
  declarations: [CallHistoryComponent],
  imports: [SharedModule, CallHistoryRoutingModule],
  exports: [],
  providers: [],
})
export class CallHistoryModule {}

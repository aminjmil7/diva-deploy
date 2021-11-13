import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallHistoryComponent } from './call-history.component';

const postRoute: Routes = [
  {
    path: '',
    component: CallHistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(postRoute)],
  exports: [RouterModule],
})
export class CallHistoryRoutingModule {}

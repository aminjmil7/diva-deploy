import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StatisticsComponent } from './statistics.component';

const routes: Routes = [{ path: '', component: StatisticsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsRoutingModule {}

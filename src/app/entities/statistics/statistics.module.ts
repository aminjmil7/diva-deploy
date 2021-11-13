import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [SharedModule, StatisticsRoutingModule],
  exports: [],
  providers: [],
})
export class StatisticsModule {}

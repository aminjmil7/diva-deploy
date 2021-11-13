import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserListModule),
      },
      {
        path: 'callhistory',
        loadChildren: () =>
          import('./call-history/call-history.module').then(
            (m) => m.CallHistoryModule
          ),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./reports/reports.module').then((m) => m.ReportsModule),
      },
      {
        path: 'statistics',
        loadChildren: () =>
          import('./statistics/statistics.module').then(
            (m) => m.StatisticsModule
          ),
      },
    ]),
  ],
})
export class EntityRoutingModule {}

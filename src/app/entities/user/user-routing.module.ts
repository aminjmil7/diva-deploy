import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingResolveService } from './user-routing-resolve.service';

const postRoute: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: ':id/userdetails',
    component: UserDetailsComponent,
    resolve: {
      user: UserRoutingResolveService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(postRoute)],
  exports: [RouterModule],
})
export class UserListRoutingModule {}

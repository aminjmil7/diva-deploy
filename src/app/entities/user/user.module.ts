import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListRoutingModule } from './user-routing.module';

@NgModule({
  imports: [SharedModule, UserListRoutingModule],
  exports: [],
  declarations: [UserListComponent, UserDetailsComponent],
  providers: [],
})
export class UserListModule {}

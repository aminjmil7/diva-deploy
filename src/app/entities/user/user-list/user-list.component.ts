import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { fakedata } from './fake-data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList: User[] = [];
  constructor(protected userService: UserService) {}

  ngOnInit(): void {
    const result = JSON.parse(fakedata);
    this.userList = result.data;
    console.log(this.userList);
    // this.userList.map((element) => {
    //   console.log(
    //     element.conversations_as_listener,
    //     element.conversations_as_caller,
    //     element.transactions
    //   );
    // });
    // this.userService.getAllUsers().subscribe((res) => {
    //   console.log(res);
    // });
  }
}

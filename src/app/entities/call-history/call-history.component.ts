import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { fakedata } from '../user/user-list/fake-data';
import { User } from '../user/user.model';
import { callhistorydata } from './call-history-fake-data';

@Component({
  selector: 'app-call-history',
  templateUrl: './call-history.component.html',
  styleUrls: ['./call-history.component.scss'],
})
export class CallHistoryComponent implements OnInit {
  filtercallHistoryList: any[] = [];
  callHistoryList: any[] = [];
  usersList: User[] = [];
  filterusersList: any[] = [];
  inputFilter = '';
  selectedUser: User = {};
  filterFocus = false;
  constructor() {}

  ngOnInit(): void {
    const callsresult = JSON.parse(callhistorydata);
    this.callHistoryList = callsresult.data;
    this.filtercallHistoryList = callsresult.data;
    const usersResult = JSON.parse(fakedata);
    this.usersList = usersResult.data;
    this.filterusersList = usersResult.data;
  }
  filterFunction(event: any) {
    this.selectedUser = {};
    this.filtercallHistoryList = this.callHistoryList;
    if (!this.inputFilter) {
      this.filterusersList = this.usersList;
    } else {
      this.filterusersList = this.usersList.filter((element) => {
        if (
          element.full_name
            ?.toLocaleLowerCase()
            ?.includes(this.inputFilter.toLocaleLowerCase()) ||
          element.phone_number?.includes(this.inputFilter)
        )
          return true;
        else return false;
      });
    }
  }

  selectUser(selectedUser: User) {
    this.selectedUser = selectedUser;
    if (this.selectedUser.full_name)
      this.inputFilter = this.selectedUser.full_name + '';
    else this.inputFilter = '';
    this.filtercallHistoryList = this.callHistoryList.filter((callHistory) => {
      if (
        callHistory.caller.id == selectedUser.id ||
        callHistory.listener.id == selectedUser.id
      )
        return true;
      else {
        return false;
      }
    });
  }
}

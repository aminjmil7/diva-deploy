import { Component, OnInit } from '@angular/core';
import { reportsData } from './reports-fakedata';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  ReportsList: any[] = [];
  constructor() {}

  ngOnInit(): void {
    const callsresult = JSON.parse(reportsData);
    this.ReportsList = callsresult.data;
  }
}

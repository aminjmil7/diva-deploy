import { Component, OnInit } from '@angular/core';
import { statistic } from './statistics-fakedata';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
    Statistics: any;
    constructor() {}
  
    ngOnInit(): void {
        this.Statistics = JSON.parse(statistic);
    }
}

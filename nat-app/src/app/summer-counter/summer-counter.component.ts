import {Component, Input, OnInit, OnDestroy} from '@angular/core';


@Component({
  selector: 'app-summer-counter',
  templateUrl: './summer-counter.component.html',
  styleUrls: ['./summer-counter.component.css']
})
export class SummerCounterComponent implements OnInit, OnDestroy {

  currentDate: Date;
  endDate: Date;
  sec: number;
  min: number;
  hours: number;
  days: number;
  difference: number;
  difdate: number;

  constructor() {
  }

  ngOnInit() {
    this.difdate = setInterval(() => {
      this.currentDate = new Date();
      this.endDate = new Date(2018, 8, 1, 0, 0, 0);

      this.difference = this.endDate.valueOf() - this.currentDate.valueOf();
      this.sec = Math.floor( (this.difference) / 1000 % 60 );
      this.min = Math.floor( (this.difference / 1000 / 60) % 60 );
      this.hours = Math.floor( (this.difference / ( 1000 * 60 * 60 )) % 24 );
      this.days = Math.floor( this.difference / ( 1000 * 60 * 60 * 24 ) );
    }, 1000);

  }

  ngOnDestroy(): void {
    clearInterval(this.difdate);
  }


}

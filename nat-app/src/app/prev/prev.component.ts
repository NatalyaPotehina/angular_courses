import {Component, OnInit} from '@angular/core';
import {Prev} from './prev';

@Component({
  selector: 'app-prev',
  templateUrl: './prev.component.html',
  styleUrls: ['./prev.component.css']
})
export class PrevComponent implements OnInit {
  prev: Prev;

  constructor() {
    this.prev = new Prev(
      'Наталья Потехина',
      'SIS.Angular.2018'
  );
  }

  ngOnInit() {
  }

}

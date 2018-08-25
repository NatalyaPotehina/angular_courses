import {Component, OnInit} from '@angular/core';
import {MainEducation} from './main-education';
import {AddEducation} from './add-education';
import {Course} from './course';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  mainEducation: MainEducation;
  addEducation: AddEducation;
  course: Course;

  constructor() {
    this.mainEducation = new MainEducation(
      new Date(2015, 10, 20),
      'ИКИТ СФУ',
      'Программная инженерия'
    );
    this.addEducation = new AddEducation(
      new Date(2014, 11, 27),
      'ИКИТ СФУ',
      'Переводчик'
    );
    this.course = new Course(
      new Date(2016, 1, 29),
      'Инопроф',
      'Сайт своими руками'
    );
  }




  ngOnInit() {
  }

}



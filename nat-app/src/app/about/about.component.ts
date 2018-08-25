import {Component, OnInit} from '@angular/core';
import {About} from './about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  about: About;

  constructor() {
    this.about = new About(
      'assets/images/circle.png',
      'Работаю в компании, которая занимается разработкой сайтов. Занимаюсь продвижением сайтов в поисковых ' +
      'системах и интернет рекламой. В работе часто приходится самостоятельно редактировать верстку или работу ' +
      'отдельных программных модулей написанных на php, но моя работа редко пересекается с js, поэтому знания ' +
      'придется поднимать.'
    );
  }

  ngOnInit() {
  }

}

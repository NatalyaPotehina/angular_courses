import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  items = ['Продвижение сайтов', 'HTML', 'CSS', 'Наполнение контентом', 'Копирайтинг', 'Администрирование сайтов',
    'Поисковая оптимизация сайтов', 'Яндекс.Метрика', 'Adobe Photoshop', 'CMS Wordpress', 'Контекстная реклама'];

  inputValue: string;

    addSkill() {
      this.items.push(this.inputValue);
  }

  ngOnInit() {
  }



}

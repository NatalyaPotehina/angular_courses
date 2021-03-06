import { Component, OnInit } from '@angular/core';
import {Contact} from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;

  constructor() {
    this.contact = new Contact(
      'Красноярск',
      89233759551,
      'sirenity159@gmail.ru',
      '@quaranyale',
      'https://t.me/quaranyale'
    );
  }

  ngOnInit() {
  }

}

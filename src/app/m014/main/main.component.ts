import { Component } from '@angular/core';

import {BlogEntry} from "../blog-entry/blog-entry.class";

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent {

  listEntries: BlogEntry[] = [];

  constructor() {
    this.listEntries = [
      {
        title: 'Lorem',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing.',
      },
      {
        title: 'Vero',
        text: 'Vero eos et accusam et justo duo dolores et ea rebum.',
      },
      {
        title: 'Takimata',
        text: 'Takimata sanctus est Lorem ipsum dolor sit amet.',
      }
    ]
  }

}

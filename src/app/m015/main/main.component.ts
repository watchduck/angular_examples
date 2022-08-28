import { Component } from '@angular/core';

import {BlogEntry} from "../blog-entry/blog-entry.class";

@Component({
  templateUrl: './main.component.html'
})
export class MainComponent {

  listEntries: BlogEntry[] = [];

  constructor() {
    this.listEntries = [
      {
        title: 'Lorem',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Kitten_with_paws_on_table.jpg/480px-Kitten_with_paws_on_table.jpg',
      },
      {
        title: 'Vero',
        text: 'Vero eos et accusam et justo duo dolores et ea rebum.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Sleeping_baby_cat.jpg/640px-Sleeping_baby_cat.jpg',
      },
      {
        title: 'Takimata',
        text: 'Takimata sanctus est Lorem ipsum dolor sit amet.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/A_focused_kitten_%28Pixabay%29.jpg/459px-A_focused_kitten_%28Pixabay%29.jpg',
      }
    ]
  }

  saveEntry(entry: BlogEntry) {
    this.listEntries = [...this.listEntries, entry];
  }

}

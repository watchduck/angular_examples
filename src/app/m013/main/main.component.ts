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
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Kitten_with_paws_on_table.jpg/480px-Kitten_with_paws_on_table.jpg',
        imageLink: 'https://commons.wikimedia.org/wiki/File:Kitten_with_paws_on_table.jpg'
      },
      {
        title: 'Vero',
        text: 'Vero eos et accusam et justo duo dolores et ea rebum.',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Surprised_young_cat.JPG/616px-Surprised_young_cat.JPG',
        imageLink: 'https://commons.wikimedia.org/wiki/File:Surprised_young_cat.JPG'
      },
      {
        title: 'Takimata',
        text: 'Takimata sanctus est Lorem ipsum dolor sit amet.',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/June_odd-eyed-cat_cropped.jpg/570px-June_odd-eyed-cat_cropped.jpg',
        imageLink: 'https://commons.wikimedia.org/wiki/File:June_odd-eyed-cat_cropped.jpg'
      }
    ]
  }

}

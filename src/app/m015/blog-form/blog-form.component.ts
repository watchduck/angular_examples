import {Component, ContentChild, EventEmitter, Output, TemplateRef} from '@angular/core';

import {BlogEntry} from "../blog-entry/blog-entry.class";

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent {

  @Output() entryCreated = new EventEmitter();
  @ContentChild(TemplateRef) custom?: TemplateRef<any>;

  createEntry(title: string, text: string, image: string) {
    this.entryCreated.emit(
      new BlogEntry(title, text, image)
    );
  }

}

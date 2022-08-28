import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

import {BlogEntry} from "../blog-entry/blog-entry.class";


@Component({
  selector: 'app-blog-list',
  templateUrl: 'blog-list.component.html',
  styleUrls: ['blog-list.component.css'],
})
export class BlogListComponent {
  @Input() entries: BlogEntry[] = [];
  @ContentChild('customTemplate') custom?: TemplateRef<any>;
  @ContentChild('additionTemplate') addition?: TemplateRef<any>;
}

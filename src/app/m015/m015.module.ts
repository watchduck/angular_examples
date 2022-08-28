import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { DocComponent } from './doc/doc.component';
import { BlogFormComponent } from './blog-form/blog-form.component';


@NgModule({
  declarations: [
    MainComponent,
    BlogListComponent,
    BlogEntryComponent,
    DocComponent,
    BlogFormComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class M015Module { }

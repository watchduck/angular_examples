import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { DocComponent } from './doc/doc.component';


@NgModule({
  declarations: [
    MainComponent,
    BlogListComponent,
    BlogEntryComponent,
    DocComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class M014Module { }

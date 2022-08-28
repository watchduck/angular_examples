import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MainComponent } from './main/main.component';
import { DocComponent } from './doc/doc.component';



@NgModule({
  declarations: [
    MainComponent,
    DocComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class M002Module { }

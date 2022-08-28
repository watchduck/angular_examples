import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { DraggableDirective } from "./draggable.directive";


@NgModule({
  declarations: [
    MainComponent,
    DraggableDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class M012Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LowerCaseDirective } from "./lower-case.directive";
import { DocComponent } from './doc/doc.component';


@NgModule({
  declarations: [
    MainComponent,
    LowerCaseDirective,
    DocComponent
  ],
  imports: [
    CommonModule
  ]
})
export class M010Module { }

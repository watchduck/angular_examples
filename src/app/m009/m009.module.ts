import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SnurfComponent } from "./snurf/snurf.component";
import { BorderDirective } from "./border.directive";

@NgModule({
  declarations: [
    MainComponent,
    BorderDirective,
    SnurfComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class M009Module { }

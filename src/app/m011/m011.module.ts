import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SliderDirective } from './slider.directive';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MainComponent,
    SliderDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class M011Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RepeaterDirective } from "./repeater.directive";
import { FormsModule } from "@angular/forms";
import { MoodComponent } from './mood/mood.component';


@NgModule({
  declarations: [
    MainComponent,
    RepeaterDirective,
    MoodComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class M017Module { }

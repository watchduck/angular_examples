import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MainComponent } from './main/main.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimePickerComponent } from './time-picker/time-picker.component';



@NgModule({
  declarations: [
    MainComponent,
    CalendarComponent,
    TimePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class M005Module { }

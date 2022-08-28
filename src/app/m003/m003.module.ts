import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ]
})
export class M003Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { ContactComponent } from './contact/contact.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    ContactComponent,
    CounterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class M020Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryComponent, HeaderDirective } from './entry/entry.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EntryComponent,
    HeaderDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [
    MainComponent,
    EntryComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        MainComponent,
        EntryComponent
    ]
})
export class M001Module { }

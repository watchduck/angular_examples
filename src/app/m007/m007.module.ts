import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { DocComponent } from "./doc/doc.component";

import { PanelModule } from "./panel/panel.module";


@NgModule({
  declarations: [
    MainComponent,
    DocComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
  ]
})
export class M007Module { }

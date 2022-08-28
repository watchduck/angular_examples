import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    MainComponent,
    LogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class M021Module { }

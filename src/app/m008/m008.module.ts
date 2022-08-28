import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { TabCardComponent } from './tab-card/tab-card.component';
import { TabStackComponent } from './tab-stack/tab-stack.component';
import { SnurfComponent } from './snurf/snurf.component';


@NgModule({
  declarations: [
    MainComponent,
    TabCardComponent,
    TabStackComponent,
    SnurfComponent,
  ],
  exports: [
    SnurfComponent
  ],
  imports: [
    CommonModule
  ]
})
export class M008Module { }

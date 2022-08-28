import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { PanelSimpleComponent } from './panel-simple/panel-simple.component';
import { PanelComponent, PanelHeaderDirective, PanelFooterDirective } from './panel/panel.component';

@NgModule({
  declarations: [
    MainComponent,
    PanelSimpleComponent,
    PanelComponent,
    PanelHeaderDirective,
    PanelFooterDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class M006Module { }

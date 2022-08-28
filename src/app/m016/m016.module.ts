import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CircleComponent } from './circle/circle.component';
import { DocComponent } from './doc/doc.component';
import { SquareComponent } from './square/square.component';


@NgModule({
    declarations: [
        MainComponent,
        CircleComponent,
        DocComponent,
        SquareComponent
    ],
    exports: [
        SquareComponent
    ],
    imports: [
        CommonModule
    ]
})
export class M016Module { }

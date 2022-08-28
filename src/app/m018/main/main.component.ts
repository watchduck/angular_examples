import {Component, ViewChild, ViewContainerRef} from '@angular/core';

import {CircleComponent} from "../circle/circle.component";
import {SquareComponent} from "../square/square.component";

import {modulo} from "../../utils/modulo";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild('containerSingle', {read: ViewContainerRef}) containerSingle!: ViewContainerRef;
  @ViewChild('containerRight', {read: ViewContainerRef}) containerRight!: ViewContainerRef;
  @ViewChild('containerLeft', {read: ViewContainerRef}) containerLeft!: ViewContainerRef;

  shapeNames: string[] = ['circle', 'square'];
  shapeComponents: any[] = [CircleComponent, SquareComponent]

  colorNames: string[] = ['strawberry', 'vanilla', 'chocolade'];
  colorValues: string[] = ['#e59bae', '#ffe59e', '#875039'];

  shapeIndex!: number;
  shapeName!: string;
  shapeComponent!: any;
  nextShapeIndex!: number;
  nextShapeName!: string;

  colorIndex!: number;
  colorName!: string;
  colorValue!: string;
  nextColorIndex!: number;
  nextColorName!: string;

  constructor() {
    this.shapeIndex = 0;
    this.colorIndex = 0;
    this.shapeComponent = CircleComponent;
    this.update();
  }

  addComponent() {
    setTimeout(() => {
      this.containerSingle.clear();
      const refSingle: any = this.containerSingle.createComponent(this.shapeComponent);
      const refRight: any = this.containerRight.createComponent(this.shapeComponent);
      const refLeft: any = this.containerLeft.createComponent(this.shapeComponent, {index: 0});
      refSingle.instance.color = refRight.instance.color = refLeft.instance.color = this.colorValue;
    });
  }

  update() {
    this.shapeName = this.shapeNames[this.shapeIndex];
    this.shapeComponent = this.shapeComponents[this.shapeIndex];

    this.nextShapeIndex = this.shapeIndex === 0 ? 1 : 0;
    this.nextShapeName = this.shapeNames[this.nextShapeIndex];

    this.colorName = this.colorNames[this.colorIndex];
    this.colorValue = this.colorValues[this.colorIndex];

    this.nextColorIndex = modulo(this.colorIndex + 1, 3);
    this.nextColorName = this.colorNames[this.nextColorIndex];

    this.addComponent();
  }

  toggleShape() {
    this.shapeIndex = this.nextShapeIndex;
    this.update()
  }

  toggleColor() {
    this.colorIndex = this.nextColorIndex;
    this.update()
  }

}

import {Component, AfterViewInit, ViewChild, ViewContainerRef} from '@angular/core';

import {CircleComponent} from "../circle/circle.component";
import {SquareComponent} from "../square/square.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('containerDiv', {read: ViewContainerRef}) container!: ViewContainerRef

  shapeComponent: any = CircleComponent;

  ngAfterViewInit(): void {
    setTimeout(() => {
      ['black', 'red', 'orange'].forEach((color) => {
        this.addCircle(color);
      })
    });
  }

  toggleShape() {
    this.shapeComponent = this.shapeComponent === CircleComponent ? SquareComponent : CircleComponent;
  }

  addCircle(color: string) {
    const circleRef = this.container.createComponent(CircleComponent, { index: 0 });
    circleRef.instance.color = color;
  }

  moveCircle(oldIndex: number, newIndex: number) {
    const viewRef = this.container.get(oldIndex);
    if (viewRef) {
      this.container.move(viewRef, newIndex);
    }
  }

  switchFirst() {
    this.moveCircle(0, 1);
  }

  cycleLeft() {
    this.moveCircle(0, 1);
    this.moveCircle(1, 2);
  }

  removeLast() {
    this.container.remove(this.container.length - 1)
  }

}

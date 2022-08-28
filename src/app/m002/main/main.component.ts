import { Component } from '@angular/core';

@Component({
  templateUrl: './main.component.html'
})
export class MainComponent {

  a: number = 0;

  changeA(event: Event) {
    const valueString = (event.target as HTMLInputElement).value;
    this.a = Number(valueString);
  }

  incrementA() {
    this.a += 1;
  }

  resetA() {
    this.a = 0;
  }

  /////////////////////////////////////////////////////////////////////////////////

  b: number = 0;

  changeB(event: Event) {
    const valueString = (event.target as HTMLInputElement).value;
    this.b = Number(valueString);
  }

  incrementB() {
    this.b += 1;
  }

  decrementB() {
    this.b -= 1;
  }

  resetB() {
    this.b = 0;
  }

  /////////////////////////////////////////////////////////////////////////////////

  c: number = 0;

  /////////////////////////////////////////////////////////////////////////////////

  d: number = 0;

  resetD() {
    this.d = 0;
  }

  /////////////////////////////////////////////////////////////////////////////////

  e: number = 0;

}

import { Component } from '@angular/core';

@Component({
  templateUrl: './main.component.html'
})
export class MainComponent {

  names: string[] = [];

  addToNames(name: string) {
    this.names.push(name)
  }

}

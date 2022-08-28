import { Component } from '@angular/core';

import {Entry} from "../entry/entry";
import {initialEntries} from "../entry/initial-entries";

@Component({
  templateUrl: './main.component.html'
})
export class MainComponent {

  entries: Entry[] = [];

  constructor() {
    this.entries = initialEntries;
  }

}

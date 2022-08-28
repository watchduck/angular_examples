import { Component, Input } from '@angular/core';

import {Entry} from "./entry";

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {

  @Input() entry?: Entry;

  generic_text = 'Ceterum censeo Carthaginem esse delendam.'

}

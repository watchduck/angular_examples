import {Component, Input, OnInit} from '@angular/core';
import {modulo} from "../../utils/modulo";

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css']
})
export class MoodComponent implements OnInit {

  constructor() {
    this.names = ['happy', 'sad', 'angry'];
  }

  @Input() index!: number;
  names: string[];
  name!: string;

  ngOnInit() {
    this.name = this.names[this.index];
  }

  changeMood() {
    this.index = modulo(this.index + 1, 3);
    this.name = this.names[this.index];
  }

}

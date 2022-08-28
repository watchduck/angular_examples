import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snurf',
  templateUrl: './snurf.component.html',
  styleUrls: ['./snurf.component.css']
})
export class SnurfComponent {

  @Input() snurfling!: number;

}

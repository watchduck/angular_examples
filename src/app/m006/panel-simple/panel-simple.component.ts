import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel-simple',
  templateUrl: './panel-simple.component.html',
  styleUrls: ['../panel-style.css']
})
export class PanelSimpleComponent {

  open = false;
  @Input() title = '';

  toggle() {
    this.open = !this.open;
  }

}

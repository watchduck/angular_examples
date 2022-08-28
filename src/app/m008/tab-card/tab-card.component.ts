import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tab-card',
  templateUrl: './tab-card.component.html'
})
export class TabCardComponent {

  @Input() title = '';
  active: boolean = false;

}

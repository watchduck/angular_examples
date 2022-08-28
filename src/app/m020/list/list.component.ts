import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import {Contact} from '../contact/contact.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  @Input() contacts: Contact[] = [];
  @Output('onSelect') selectEmitter = new EventEmitter();

  selectContact1(selected: Contact) {
    this.selectEmitter.emit(selected);
  }

}

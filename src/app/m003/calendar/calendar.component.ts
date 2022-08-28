import {Component, ViewChild} from '@angular/core';
import {TimePickerComponent} from '../time-picker/time-picker.component';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.css'],
})
export class CalendarComponent {
  entries: any[];

  @ViewChild('whatever') timePicker!: TimePickerComponent;

  constructor() {
    this.entries = [
      {name: 'first', timeString: '00:11:22'},
      {name: 'second', timeString: '12:34:56'}
    ];
  }

  onChangeEvent(timeString: string, entryIndex: number) {
    this.entries[entryIndex].timeString = timeString;
  }

}

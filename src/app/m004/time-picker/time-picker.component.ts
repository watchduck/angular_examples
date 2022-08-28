import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {Time} from './time.model';

import {modulo} from '../../utils/modulo';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css'],
})
export class TimePickerComponent implements OnChanges {
  timeObject: Time = {hours: 999, minutes: 999, seconds: 999};
  timeStrings = {hours: '', minutes: '', seconds: ''};
  modValues = {hours: 24, minutes: 60, seconds: 60}

  @Input() timeString?: string = '';  // hh:mm:ss
  @Output('timeStringChange') changeEvent: EventEmitter<string> = new EventEmitter<string>();

  reset() {
    this.timeObject = {hours: 0, minutes: 0, seconds: 0};
    this.update_and_emit();
  }

  ngOnChanges() {
    const hms = this.timeString?.split(':');
    if (hms?.length === 3) {  // otherwise: TS2532: Object is possibly 'undefined'.
      this.timeObject = {
        hours: modulo(Number(hms[0]), 24),
        minutes: modulo(Number(hms[1]), 60),
        seconds: modulo(Number(hms[2]), 60),
      };
    }
    this.update_and_emit();
  }

  inputChangeTime(field: keyof Time, event: Event) {
    const preModValue = Number((event.target as HTMLInputElement).value);
    this.timeObject[field] = modulo(preModValue, this.modValues[field]);
    this.update_and_emit();
  }

  clickChangeTime(field: keyof Time, sign: number) {
    const preModValue = this.timeObject[field] + sign  // increment or decrement
    this.timeObject[field] = modulo(preModValue, this.modValues[field]);
    this.update_and_emit();
  }

  zeroPad(value: number) {
    return `0${value}`.slice(-2);
  }

  update_and_emit() {
    const hours = this.zeroPad(this.timeObject.hours);
    const minutes = this.zeroPad(this.timeObject.minutes);
    const seconds = this.zeroPad(this.timeObject.seconds);
    this.timeStrings.hours = hours;
    this.timeStrings.minutes = minutes;
    this.timeStrings.seconds = seconds;
    this.timeString = `${hours}:${minutes}:${seconds}`;
    this.changeEvent.emit(this.timeString);
  }

}

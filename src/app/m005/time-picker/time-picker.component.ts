import {Component, EventEmitter, Input, Output, OnChanges} from '@angular/core';
import {Time} from './time.model';

import {modulo} from "../../utils/modulo";

@Component({
  selector: 'app-time-picker',
  inputs: ['timeString: time'],
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css'],
})
export class TimePickerComponent {
  timeObject: Time = {hours: 999, minutes: 999, seconds: 999};
  modValues = {hours: 24, minutes: 60, seconds: 60}
  timeStrings = {hours: '00', minutes: '00', seconds: '00'};

  @Input('time') timeString?: string = '';  // hh:mm:ss
  @Output('timeChange') changeEvent: EventEmitter<string> = new EventEmitter<string>();

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

  smallInputChangeTime(field: keyof Time, event: Event) {
    const preModValue = Number((event.target as HTMLInputElement).value);
    this.timeObject[field] = modulo(preModValue, this.modValues[field]);
    this.update_and_emit();
  }

  smallClickChangeTime(field: keyof Time, sign: number) {
    const preModValue = this.timeObject[field] + sign;  // increment or decrement
    this.timeObject[field] = modulo(preModValue, this.modValues[field]);
    this.update_and_emit();
  }

  bigInputChangeTime(event: Event) {
    const timeString = (event.target as HTMLInputElement).value;
    const timeParts = timeString.split(':');
    if (timeParts.length === 3) {
      this.timeObject = {
        hours: modulo(Number(timeParts[0]), 24),
        minutes: modulo(Number(timeParts[1]), 60),
        seconds: modulo(Number(timeParts[2]), 60),
      };
      const timeStringMod = `${this.timeObject.hours}:${this.timeObject.minutes}:${this.timeObject.seconds}`;
    }
    this.update_and_emit();
  }

  bigClickChangeTime(sign: number) {
    if (sign === 1) {  // increment
      if (this.timeObject.seconds < 59) {
        this.timeObject.seconds += 1
      } else {
        this.timeObject.seconds = 0;
        if (this.timeObject.minutes < 59) {
          this.timeObject.minutes += 1;
        } else {
          this.timeObject.minutes = 0;
          if (this.timeObject.hours < 23) {
            this.timeObject.hours += 1;
          } else {
            this.reset();
          }
        }
      }
    } else if (sign === -1) {  // decrement
      if (this.timeObject.seconds > 0) {
        this.timeObject.seconds -= 1
      } else {
        this.timeObject.seconds = 59;
        if (this.timeObject.minutes > 0) {
          this.timeObject.minutes -= 1;
        } else {
          this.timeObject.minutes = 59;
          if (this.timeObject.hours > 0) {
            this.timeObject.hours -= 1;
          } else {
            this.timeObject = {hours: 23, minutes: 59, seconds: 59}
          }
        }
      }
    }
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

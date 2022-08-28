# 4 &bull; time picker and calendar: two-way binding


## [time-picker](time-picker)

### [time-picker.component.ts](time-picker/time-picker.component.ts)

Almost like in the last branch. But `@Output` needs an argument.

```typescript
@Input() timeString?: string = '';  // hh:mm:ss
@Output('timeStringChange') changeEvent: EventEmitter<any> = new EventEmitter<string>();
```

### name magic

The name `timeStringChange` is not used anywhere else.<br>
If the name part does not match (or if `@Output` is used without argument) it will cause this error:<br>
*NG8007: The property and event halves of the two-way binding 'timeString' are not bound to the same target.*

### [time-picker.component.html](time-picker/time-picker.component.html)

Like in the last branch.


## [calendar](calendar)

### [calendar.component.ts](calendar/calendar.component.ts)

Like in the branch before, just without `onChangeEvent`.

### [calendar.component.html](calendar/calendar.component.html)

`entry.timeString` is two-way bound to `<app-time-picker>` and to the `<input>`.

```html
<div *ngFor="let entry of entries">
  <h2>{{entry.name}}</h2>
  <app-time-picker #loopTimePicker [(time)]="entry.timeString"></app-time-picker>
  <input [(ngModel)]="entry.timeString">
  <button (click)="loopTimePicker.reset()">reset</button>
</div>
```


## [main](main)

### [main.component.html](main/main.component.html)

`<app-calendar>` and a single `<app-time-picker>` are shown here.

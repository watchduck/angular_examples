# 3 &bull; time picker and calendar: one-way binding


## [time-picker](time-picker)

### [time-picker.component.ts](time-picker/time-picker.component.ts)

```typescript
@Input() timeString?: string = '';  // hh:mm:ss
@Output() changeEvent: EventEmitter<string> = new EventEmitter<string>();
```

`ngOnChanges` to initialize and change `timeObject` based on the received time string.

`update_and_emit` uses `changeEvent` to emit the current time string.<br>
(Without it the entry in `entries` would not be updated.)

### [time-picker.component.html](time-picker/time-picker.component.html)

```html
<button on-click="clickChangeTime('hours', 1)">+</button>
<input #hours
       [value]="timeStrings?.hours"
       (change)="inputChangeTime('hours', $event)"
       (keydown.arrowUp)="clickChangeTime('hours', 1); $event.preventDefault()"
       (keydown.arrowDown)="clickChangeTime('hours', -1); $event.preventDefault()"
/>
<button (click)="clickChangeTime('hours', -1)">&minus;</button>
```


## [calendar](calendar)

### [calendar.component.ts](calendar/calendar.component.ts)

Time picker component is `@ViewChild`.<br>
`entries` is defined in the constructor.<br>
`onChangeEvent` updates an entry in `entries`. (Bound in the template to time picker change event.)

### [calendar.component.html](calendar/calendar.component.html)

For each `entry` in `entries` its name and a time picker is shown.<br>
`<app-time-picker>`: `[timeString]` corresponds to the `@Input`, and `(changeEvent)` to the `@Output`.<br>
`<button>`: `(click)` is bound to the `reset` method of the respective time picker.

```html
<div *ngFor="let entry of entries; let entryIndex = index">
  <h2>{{entry.name}}</h2>
  <app-time-picker #loopTimePicker [timeString]="entry.timeString" (changeEvent)="onChangeEvent($event, entryIndex)"></app-time-picker>
  <button (click)="loopTimePicker.reset()"> reset </button>
</div>
```


## [main](main)

### [main.component.html](main/main.component.html)

`<app-calendar>` and a single `<app-time-picker>` are shown here.

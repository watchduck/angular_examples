# 5 &bull; big time picker and calendar

Similar to the last branch, but big input and reset button are part of the time picker.

## [time-picker](time-picker)

### [time-picker.component.ts](time-picker/time-picker.component.ts)

The input and output names are shorter than in the last branch.

```typescript
@Input('time') timeString?: string = '';  // hh:mm:ss
@Output('timeChange') changeEvent: EventEmitter<string> = new EventEmitter<string>();
```

So the component is initialized with `[time]` instead of `[timeString]`:

```html
<app-time-picker [time]="'23:55:00'">
```

The `@Component` decorator contains this line: &nbsp; `inputs: ['timeString: time'],`<br>
Without it the app works just the same.<br>
It would still work when `time` is renamed to `foo` (and `timeChange` to `fooChange`).<br>
But when this line is not changed accordingly, it will cause this warning:<br>
*Property foo is not provided by any applicable directives nor by app-time-picker element*

### [time-picker.component.html](time-picker/time-picker.component.html)

```html
<button (click)="bigClickChangeTime(1)">+</button>
<input [value]="timeString"
       (change)="bigInputChangeTime($event)"
       (keydown.arrowUp)="bigClickChangeTime(1); $event.preventDefault()"
       (keydown.arrowDown)="bigClickChangeTime(-1); $event.preventDefault()"
/>
<button (click)="bigClickChangeTime(-1)">&minus;</button>
    
<button type="button" (click)="reset()">reset</button>
```

## [calendar](calendar)

### [calendar.component.ts](calendar/calendar.component.ts)

Like in the last branch.

### [calendar.component.html](calendar/calendar.component.html)

Just heading and `<app-time-picker>` in loop. Without external input and reset button.


## [main](main)

### [main.component.html](main/main.component.html)

`<app-calendar>` and a single `<app-time-picker>` are shown here.<br>
(In the latter the styling of the time works because of the `::ng-deep` in
[calendar.component.css](calendar/calendar.component.css).)

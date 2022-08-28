# 2 &bull; number input and variable


## [m002.model.ts](./m002.model.ts)

`FormsModule` is added to `imports` to allow two-way binding.


## [main.component.html](./main/main.component.html)

`$event` is used in event bindings in three ways:

* passed as an argument to functions, carrying the input field's value:<br>
`(change)="changeA($event)"`

* assigned directly to a variable:<br>
`(ngModelChange)="e = $event"`

* to prevent the default behaviour:<br>
`(keydown.arrowDown)="inputE.focus(); $event.preventDefault()"`<br>
(In this case it prevents decrementing the number input.)


## [main.component.ts](./main/main.component.ts)

The argument `event` has the type `Event` (a built-in interface representing events in the DOM).

It is used to access the input field's value string:<br>
`(event.target as HTMLInputElement).value`

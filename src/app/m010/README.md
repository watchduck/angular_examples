# 10 &bull; lower case directive

The directive added to an input field changes its value to lowercase.

## [lower-case.directive.ts](./lower-case.directive.ts)

`@HostBinding` binds the input field's `value` property to the member variable `boundValue`.

`@HostListener` makes sure that the input field's `change` event is recognized,<br>
which is then used to access the input field's fresh `value`.<br>
The converted value is then assigned to `boundValue`.<br>
This is like an anonymous function, but apparently some name has to be used (`namedAnon`).


## [main.component.html](./main/main.component.html)

The selector `appLowerCase` adds the directive to `nameInput`.<br>
(Without it the case conversion would not happen, but everything else would still work.)

```html
<input #nameInput appLowerCase>

<button type="button" (click)="addToNames(nameInput.value)">add to list</button>
```

## [main.component.ts](./main/main.component.ts)

`addToNames` adds the (converted) value from the input field to the array `names`.<br>
(The directive would also work without this.)

# 9 &bull; border directive

## [border.directive.ts](./border.directive.ts)

`@Input('appBorder') thickness!: number;` assigns an internal variable name for more clarity.<br>
Instead of the exclamation mark and type, one could also use a dummy value: `@Input('appBorder') thickness = 999;`

`ElementRef` allows to access properties of the selected DOM element.<br>
It is injected in the constructor, and is then used to add the styles.<br>
In the `ngOnChanges` callback the styles are initially applied,
and the border is kept in sync with `thickness`.


## [main.component.html](./main/main.component.html)

`[appBorder]` serves both as selector and input binding.

`clickThick` exists only in the template, and is assigned to the `[appBorder]` of two elements.

```html
<h1 (click)="clickThick = clickThick + 1" [appBorder]="clickThick"> heading with dynamic border </h1>

<app-snurf [snurfling]="10" [appBorder]="2"></app-snurf>
```


## [snurf](./snurf)

Example component used with the directive.

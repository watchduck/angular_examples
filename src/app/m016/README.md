# 16 &bull; `ViewContainerRef` (circles)


## [circle](circle) and [square](square)

These components show a `<div>` styled with the color from the input. Only the CSS files are different.

circle [ts](circle/circle.component.ts), [html](circle/circle.component.html), [css](circle/circle.component.css)
&nbsp;&nbsp;&nbsp;
square [ts](square/square.component.ts), [html](square/square.component.html), [css](square/square.component.css)


## [main](main)

### [main.component.ts](main/main.component.ts)

#### container

`@ViewChild` has the second argument `{read: ViewContainerRef}`.<br>
Without it adding the circles to the container would not work.
```typescript
@ViewChild('containerDiv', {read: ViewContainerRef}) container!: ViewContainerRef
```

The line above has defined `container`, denoting one `<div>` in the template.<br>
`addCircle` adds a `CircleComponent` to it. `ngAfterViewInit` does that for three colors.

`addCircle` uses the method `createComponent` of `ViewContainerRef`.<br>
It takes index 0 as an option. Therefore the color sequence is from right to left.

The buttons use the methods `get`, `move` and `remove` of `ViewContainerRef`.


#### toggle

```typescript
shapeComponent: any = CircleComponent;

toggleShape() {
  this.shapeComponent= this.shapeComponent === CircleComponent ? SquareComponent : CircleComponent;
}
```


### [main.component.html](main/main.component.html)

#### direct

```html
<app-circle [color]="'red'"></app-circle>
```

#### container

```html
<div #containerDiv></div>
<button (click)="switchFirst()">switch first</button>
```

#### toggle

```html
<div class="shape-wrapper" (click)="toggleShape()">
  <div *ngComponentOutlet="shapeComponent" ></div>
</div>
```

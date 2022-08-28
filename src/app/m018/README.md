# 18 &bull; dynamic shape with dynamic color

Like the last example in [branch 16](../m016).


## [circle](circle) and [square](square)

These components show a `<div>` styled with the color from the input. Only the CSS files are different.

circle [ts](circle/circle.component.ts), [html](circle/circle.component.html), [css](circle/circle.component.css)
&nbsp;&nbsp;&nbsp;
square [ts](square/square.component.ts), [html](square/square.component.html), [css](square/square.component.css)


## [main](main)

### [main.component.ts](main/main.component.ts)

```typescript
@ViewChild('containerSingle', {read: ViewContainerRef}) containerSingle!: ViewContainerRef;
@ViewChild('containerRight', {read: ViewContainerRef}) containerRight!: ViewContainerRef;
@ViewChild('containerLeft', {read: ViewContainerRef}) containerLeft!: ViewContainerRef;
```

```typescript
addComponent() {
  setTimeout(() => {
    this.containerSingle.clear();
    const refSingle: any = this.containerSingle.createComponent(this.shapeComponent);
    const refRight: any = this.containerRight.createComponent(this.shapeComponent);
    const refLeft: any = this.containerLeft.createComponent(this.shapeComponent, {index: 0});
    refSingle.instance.color = refRight.instance.color = refLeft.instance.color = this.colorValue;
  });
}
```


### [main.component.html](main/main.component.html)

```html
<div #containerSingle></div>
<div #containerRight></div>
<div #containerLeft></div>

<button (click)="toggleColor()">{{nextColorName}}</button>
<button (click)="toggleShape()">{{nextShapeName}}</button>

<b [style]="{'text-decoration-color': colorValue}">{{colorName}}</b>
```

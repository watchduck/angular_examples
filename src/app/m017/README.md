# 17 &bull; structural directive (repeater)


## [repeater.directive.ts](repeater.directive.ts)

The references to `ViewContainerRef` and `TemplateRef` are provided as arguments of the constructor:

```typescript
constructor(
  private container: ViewContainerRef,
  private template: TemplateRef<any>
) { }
```

Compare earlier examples:
* `@ContentChild('customTemplate') custom?: TemplateRef<any>;`
&nbsp;&nbsp;&nbsp; ([13](../m015/blog-list/blog-list.component.ts))
* `@ContentChild(TemplateRef) custom?: TemplateRef<any>;`
&nbsp;&nbsp;&nbsp; ([15](../m015/blog-form/blog-form.component.ts))
* `@ViewChild('containerDiv', {read: ViewContainerRef}) container!: ViewContainerRef`
&nbsp;&nbsp;&nbsp; ([16](../m016/main/main.component.ts))

----

The class `ViewContainerRef` provides the method `createEmbeddedView` to create template references at runtime.

The input binding uses a setter method. (This is essentially an anonymous function.)<br>
When the repeat number changes, the container is emptied, and `template` is added the respective number of times.<br>
The template is what is provided in [main.component.html](main/main.component.html).

```typescript
@Input('appRepeater') set namedAnon(repeatTimes: number) {
  this.container.clear();
  for (let i = 0; i < repeatTimes; i++) {
    this.container.createEmbeddedView(this.template);
  }
}
```

## [main](main)

### [main.component.ts](main/main.component.ts)

The numbers of repetitions are initialized here. (`repeatTimesFirst`, `repeatTimesSecond`)

### [main.component.html](main/main.component.html)

`appRepeater` is the selector of the directive.
The first of the following lines is an abbreviation of the second:
```html
<span *appRepeater="3"> ... </span>
<ng-template [appRepeater]="3"> <span> ... </span> <ng-template>
```

----

The input field is bound to the number of repetitions.

```html
<input type="number" [(ngModel)]="repeatTimesFirst">
<span *appRepeater="repeatTimesFirst"> ... </span>
```

## [mood](mood)

An example component to be repeated. It can be changed by clicking on it.<br>
When the repetition number is changed, new instances are created (which then have the default value).

### [mood.component.ts](mood/mood.component.ts)

In `ngOnInit` the mood name is created based on the mood index from the input.<br>

### [mood.component.html](mood/mood.component.html)

```html
<div [class]="name" (click)="changeMood()">{{name}}</div>
```

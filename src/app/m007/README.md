# 7 &bull; content insertion: panels with accordion


## [panel.component.ts](./panel/panel.component.ts)

`PanelComponent` and `PanelHeaderDirective` are basically like in the
[last branch](../m006).

`@Output() toggleEmitter = new EventEmitter<PanelComponent>();`

`@ContentChild` for the header


## [panel.component.html](./panel/panel.component.html)

`<div class="header" (click)="toggle()">`


## [accordion.directive.ts](./accordion.directive.ts)

The `AccordionDirective` can be used to wrap panels,
to make sure that only one is open at a time.

`@Input` `onlyOneOpen`

`@ContentChildren(PanelComponent) listOfPanels!: QueryList<PanelComponent>;`

`toggleEmitter.subscribe`


## [panel.module.ts](./panel/panel.module.ts)

The three classes are in the `declarations` and `exports` array of `PanelModule`.<br>
This `@NgModule` is simply a wrapper, to import them in one line in [m007.module.ts](./m007.module.ts).<br>
(In the [last branch](../m006) the respective classes are directly added to the `declarations` array in [m006.module.ts](../m006/m006.module.ts))


## [main.component.html](./main/main.component.html)

```html
<div appAccordion #foo="harmonica" [onlyOneOpen]="false">

  <app-panel> <app-panel-header>Spam</app-panel-header> Spam... </app-panel>
  <app-panel> <app-panel-header>Eggs</app-panel-header> Eggs... </app-panel>
  
  <button type="button" (click)="foo.closeAll()">close</button>

</div>
```

A template variable is used to access the `closeAll` function of the accordion directive.<br>
But it has to be used as `#foo="harmonica"`.<br>
(Compare `exportAs: 'harmonica'` in the decorator of the accordion directive.)<br>
`#foo` alone would lead to this error:<br>
<i>TS2339: Property 'closeAll' does not exist on type 'HTMLDivElement'.</i>

## [panel.component.css](./panel/panel.component.css)

The styling for `.nested-accordion` works only by prepending `::ng-deep`.<br>
Alternatively one could use
`encapsulation: ViewEncapsulation.None` in the decorator of `PanelComponent`.<br>
This is only needed for the border and margin of the accordion div itself.<br>
(The styles within the nested accordion are applied by selecting `.panel .panel`.)

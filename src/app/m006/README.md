# 6 &bull; content insertion: panels <small>(but no accordion)</small>


`PanelComponent` and `PanelHeaderDirective` etc. are directly in the `declarations` array in 
[m006.module.ts](./m006.module.ts).

Compare [next branch](../m007) with wrapper module.


## [panel-simple.component.ts](./panel-simple/panel-simple.component.ts)

Simple panel component using `@Input` for the title. (Therefore markup does not work in the title.)


## [panel.component.ts](./panel/panel.component.ts)

Fancy panel component using header and footer directives. (Which can use markup.)<br>
Both are used `@ContentChild` and are optional.


## [main.component.html](./main/main.component.html)

```html
<app-panel-simple title="Title without markup">
  Blah...
</app-panel-simple>


<app-panel>
  <app-panel-header>Title <i>with</i> markup.</app-panel-header>
  Blah...
</app-panel>
```

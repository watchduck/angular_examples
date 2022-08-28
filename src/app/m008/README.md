# 8 &bull; content insertion: tabs


## [tab-card.component.ts](./tab-card/tab-card.component.ts)

* `@Input` for the title (which therefore can not contain markup)

* `active` is `false` by default.
(If it were `true`, the content of all cards would be shown, until one is clicked.)


## [tab-card.component.html](./tab-card/tab-card.component.html)

If the card is active, its content is displayed here with `<ng-content>`. (But not the title.)


## [tab-stack.component.ts](./tab-stack/tab-stack.component.ts)

`@ContentChildren(TabCardComponent) listOfTabs!: QueryList<TabCardComponent>;`

`ngAfterContentInit` is used to activate the first card.

`activate` deactivates all cards and then activates the one that was clicked.


## [tab-stack.component.html](./tab-stack/tab-stack.component.html)

All the tabs with the titles are shown here.<br>
The active one is styled differently. `[class.active]="card.active"`<br>
Clicking on a tab will activate it. `(click)="activate(card)"`

Below the tabs the content is shown with `<ng-content>`.<br>
The content are all cards. But only one of them is active and displays its content.

## [main.component.html](./main/main.component.html)

```html
<app-tab-stack>
  <app-tab-card title="Foo"> Foooo. </app-tab-card>
  <app-tab-card title="Bar"> Baaar. </app-tab-card>
</app-tab-stack>
```


## [snurf](./snurf)

Example component used only as content.

# 13 &bull; `TemplateRef` and `NgTemplateOutlet`: blog <small>(static)</small>

This app shows static blog entries. &nbsp;
([Branch 15](../m015) is the same with a form to add new entries.)

## [blog-entry](blog-entry)

The component ([blog-entry.component.ts](blog-entry/blog-entry.component.ts)) 
receives an object of type `BlogEntry`
([blog-entry.class.ts](blog-entry/blog-entry.class.ts)).<br>
```
@Input() entry!: BlogEntry;
```

The default template for an entry is [blog-entry.component.html](blog-entry/blog-entry.component.html).


## [blog-list](blog-list)

### [blog-list.component.ts](blog-list/blog-list.component.ts)

```
@Input() entries: BlogEntry[] = [];
@ContentChild('customTemplate') custom?: TemplateRef<any>;
@ContentChild('additionTemplate') addition?: TemplateRef<any>;
```

### [blog-list.component.html](blog-list/blog-list.component.html)

Use the default template: &nbsp; `<app-blog-entry>` with `*ngFor`

```html
<div *ngIf="!custom">
  <app-blog-entry [entry]="entry" *ngFor="let entry of entries"></app-blog-entry>
</div>
```

Use a custom template: &nbsp; `<ng-template>` with `ngForOf` and `ngForTemplate`

```html
<div *ngIf="custom">
  <ng-template ngFor [ngForOf]="entries" [ngForTemplate]="custom"></ng-template>
</div>
```

Create an addition: &nbsp; `<ng-template>` with `ngTemplateOutlet`

```html
<ng-template *ngIf="addition" [ngTemplateOutlet]="addition"></ng-template>
```

## [main](main)

`listEntries` with three example objects is defined in the constructor ([main.component.ts](main/main.component.ts).
)


### [main.component.html](main/main.component.html)

Plain `<ng-template>` to use the custom template:

```html
<app-blog-list [entries]="listEntries">
  <ng-template></ng-template>
</app-blog-list>
```

`<ng-template>` with content child selectors (`#customTemplate`, `#additionTemplate`) and content (between the tags).

```html
<app-blog-list [entries]="listEntries">
  <ng-template let-entry #customTemplate> The title is <i>{{entry.title}}</i>. </ng-template>
  <ng-template #additionTemplate> There are {{listEntries.length}} entries. </ng-template>
</app-blog-list>
```

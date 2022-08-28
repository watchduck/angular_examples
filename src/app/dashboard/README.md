# 0 &bull; dashboard


## [entry.component.ts](./entry/entry.component.ts)

* `@Directive` `HeaderDirective` (`<dash-header>`)
* `@Component` `EntryComponent` (`<dash-entry>`)

The entry component has the branch number as `@Input`
and the header directive as `@ContentChild`.<br>
A directive (rather than an input) is used for the header,
so tags like `<code>` can be used in it.


## [entry.component.html](./entry/entry.component.html)

Both the heading text and the rest of the content (i.e. the inventory)
are placed in the template with `<ng-content>`.

For the heading text `select="dash-header"` is used. (The selector defined in [`entry.component.ts`](./entry/entry.component.ts).)<br>
If it were removed, the whole content would be shown in `<span.title>` in `<h2>`.

If the whole `<ng-content select="dash-header">` were removed,
all the content (with the heading text) would be shown below the `<h2>`.


## [dashboard.component.html](./dashboard/dashboard.component.html)

Here the entries are shown in this format:

```
<dash-entry [number]="12">
  <dash-header>foo bar</dash-header>
</dash-entry>
```

There is usually a `<ul.inventory>` below `<dash-header>`.

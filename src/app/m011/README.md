# 11 &bull; slider directive <small>(jQuery UI)</small>

This directive is a wrapper for the slider plugin in jQuery UI.

## provide library

### install

```
npm i --save jquery
npm i --save jquery-ui-bundle
```

### add to [angular.json](../../../angular.json)

In *projects.angular_examples.architect.build* (and *...test*) 
the paths to jQuery have been added to *scripts* and *styles*: 

```
"styles": [
  "src/styles.css",
  "node_modules/jquery-ui-bundle/jquery-ui.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.js",
  "node_modules/jquery-ui-bundle/jquery-ui.js"
]
```

This provides the global variable `jQuery`.


## [slider.directive.ts](slider.directive.ts)

The global variable still has to be declared: `declare var jQuery: any;`

`constructor` uses `jQuery` and `ElementRef` to create `mySlider`.

`ngOnChanges` uses `mySlider` to sync the slider based on the input.<br>
(Syncing the input based on the slider works without it.)

### name magic

The <code>@Input</code> and <code>@Output</code> variable names have to match. Renaming both would work:<br>

```
@Input() foo?: number;
@Output() fooChange = new EventEmitter();
```
```html
<div appSlider [(foo)]="firstValue"></div>
```


## [main.component.html](main/main.component.html)

```html
<div appSlider [(value)]="firstValue"></div>
<input type="number" [(ngModel)]="firstValue">
The first value is <b>{{firstValue}}</b>.
```


## [main.component.ts](main/main.component.ts)

The default values `firstValue` and `secondValue` come from here.

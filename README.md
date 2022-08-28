# Angular examples

<img src="src/assets/images/app_icon.svg" width="100" align="right">


This project is a collection of small apps, which are based on the examples in the
[Angular book by Christoph Höller](https://www.rheinwerk-verlag.de/angular-das-umfassende-handbuch/)
<small>(3rd edition, 2022)</small>.<br>
The live page is <a href="http://ng-ex.watchduck.net">ng-ex.watchduck.net</a>.

The modules like [`m012`](src/app/m012) are encapsulated. They will be called *branches*.<br>
Each branch has its own module file like [`m012.module.ts`](src/app/m012/m012.module.ts).<br>
They are included (but not otherwise used) in the main module file [`app.module.ts`](src/app/app.module.ts).

## development

### run

`ng serve` &nbsp; http://localhost:4200/ &nbsp;&nbsp;&nbsp; (`ng serve --port 4401`)


### add branch

#### fresh

```
ng g m m012
ng g c m012/main
ng g c m012/foo
```

#### copy

* copy and rename folder, e.g. `m012` to `m013`
* rename module file and class, e.g. `m012.module.ts` (`M012Module`) to `m013.module.ts` (`M013Module`)

#### always

* import module in [`app.module.ts`](src/app/app.module.ts)
* import and use component in [`app-routing.module.ts`](src/app/app-routing.module.ts)
* add entry in [`dashboard.component.html`](src/app/dashboard/dashboard/dashboard.component.html)

## build

Development mode is kept on in production.

```
ng build --configuration development
```

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DashboardModule} from "./dashboard/dashboard.module";
import {M001Module} from "./m001/m001.module";
import {M002Module} from "./m002/m002.module";
import {M003Module} from "./m003/m003.module";
import {M004Module} from "./m004/m004.module";
import {M005Module} from "./m005/m005.module";
import {M006Module} from "./m006/m006.module";
import {M007Module} from "./m007/m007.module";
import {M008Module} from "./m008/m008.module";
import {M009Module} from "./m009/m009.module";
import {M010Module} from "./m010/m010.module";
import {M011Module} from "./m011/m011.module";
import {M012Module} from "./m012/m012.module";
import {M013Module} from "./m013/m013.module";
import {M014Module} from "./m014/m014.module";
import {M015Module} from "./m015/m015.module";
import {M016Module} from "./m016/m016.module";
import {M017Module} from "./m017/m017.module";
import {M018Module} from "./m018/m018.module";
import {M019Module} from "./m019/m019.module";
import {M020Module} from "./m020/m020.module";
import {M021Module} from "./m021/m021.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

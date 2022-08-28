import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent as DashboardComponent} from "./dashboard/dashboard/dashboard.component";
import {MainComponent as C001Component} from "./m001/main/main.component";
import {MainComponent as C002Component} from "./m002/main/main.component";
import {MainComponent as C003Component} from "./m003/main/main.component";
import {MainComponent as C004Component} from "./m004/main/main.component";
import {MainComponent as C005Component} from "./m005/main/main.component";
import {MainComponent as C006Component} from "./m006/main/main.component";
import {MainComponent as C007Component} from "./m007/main/main.component";
import {MainComponent as C008Component} from "./m008/main/main.component";
import {MainComponent as C009Component} from "./m009/main/main.component";
import {MainComponent as C010Component} from "./m010/main/main.component";
import {MainComponent as C011Component} from "./m011/main/main.component";
import {MainComponent as C012Component} from "./m012/main/main.component";
import {MainComponent as C013Component} from "./m013/main/main.component";
import {MainComponent as C014Component} from "./m014/main/main.component";
import {MainComponent as C015Component} from "./m015/main/main.component";
import {MainComponent as C016Component} from "./m016/main/main.component";
import {MainComponent as C017Component} from "./m017/main/main.component";
import {MainComponent as C018Component} from "./m018/main/main.component";
import {MainComponent as C019Component} from "./m019/main/main.component";
import {MainComponent as C020Component} from "./m020/main/main.component";
import {MainComponent as C021Component} from "./m021/main/main.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: '1', component: C001Component},
  {path: '2', component: C002Component},
  {path: '3', component: C003Component},
  {path: '4', component: C004Component},
  {path: '5', component: C005Component},
  {path: '6', component: C006Component},
  {path: '7', component: C007Component},
  {path: '8', component: C008Component},
  {path: '9', component: C009Component},
  {path: '10', component: C010Component},
  {path: '11', component: C011Component},
  {path: '12', component: C012Component},
  {path: '13', component: C013Component},
  {path: '14', component: C014Component},
  {path: '15', component: C015Component},
  {path: '16', component: C016Component},
  {path: '17', component: C017Component},
  {path: '18', component: C018Component},
  {path: '19', component: C019Component},
  {path: '20', component: C020Component},
  {path: '21', component: C021Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

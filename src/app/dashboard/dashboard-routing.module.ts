import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { HistoryComponent } from './history/history.component';
import { JenkinComponent } from '../jenkin/jenkin.component';
import { History2Component } from '../history2/history2.component';
import { History3Component } from '../history3/history3.component';
import { Rep1Component } from '../rep1/rep1.component';
import { IframeComponent } from '../iframe/iframe.component';
import { Rep2Component } from '../rep2/rep2.component';


const routes: Routes = [
  {
    path: 'dash', component: DashboardComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'test', component: HistoryComponent },
      { path:'jenkin' , component: JenkinComponent },
      { path:'test1' , component: History2Component },
      { path:'test2' , component: History3Component },
      { path:'report/:build' , component: Rep1Component },
      { path:'iframe/:build' , component:IframeComponent},
      { path:'report2/:build' , component:Rep2Component}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

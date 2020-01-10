import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { HistoryComponent } from './history/history.component';
import { JenkinComponent } from '../jenkin/jenkin.component';
import { History2Component } from '../history2/history2.component';
import { History3Component } from '../history3/history3.component';
import { Rep1Component } from '../rep1/rep1.component';
import { LoginComponent } from '../login/login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    HttpClientModule,
    DataTablesModule,

  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    DashboardHomeComponent,
    HistoryComponent,
    JenkinComponent,
    History2Component,
    History3Component,
    Rep1Component,
    LoginComponent


  ]
})
export class DashboardModule { }

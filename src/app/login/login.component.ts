import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { ViewChild } from '@angular/core'
import {  ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // /@ViewChild('iframe') iframe: ElementRef
  loginuserdata={}
  username:string;
   password:string;
  constructor( private router: Router) {}

      ngOnInit() {}
      loginuser()
      {
        if(this.username=='admin' && this.password=='admin123')
        {
          this.router.navigate(['/dash']);
          console.log("welcome");
        }
        else
          console.log("Entered Wrong username and password");
      }
      // loginuser()
      // {
      //   this.dataservice.loginuser(this.loginuserdata)
      //     .subscribe(
      //       res=>console.log(res),
      //       err=>console.log(err)
      //     )
      // }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { ViewChild } from '@angular/core'
import {  ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // /@ViewChild('iframe') iframe: ElementRef

  constructor() {}

      ngOnInit() {
        // this.iframe.nativeElement.setAttribute('src','http://13.235.153.134:8080/login?from=%2Fjob%2FPolyLogyx_Sanity_Test_Suite%2F157%2Frobot%2Freport%2Freport.html');
          }

  }
      // mail:any;
      // psd:any;

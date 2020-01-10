import { Component } from '@angular/core';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(public cmnSrv: CommonService) {  }
  sidebarItems = [
    {link: '/t1', label: 'Dashboard', icon: 'dashboard'},
    {label: 'Enterprise Edition', icon:'', subItem:[
      {link:'/', label: 'Version 1.17', icon:''},
      {link: '/t2', label: 'Version 1.18', icon: ''}
    ]},
    {label: 'Community Edition', icon:'', subItem:[
      {link:'/yu', label: 'Version 1.01', icon:''},
      {link: '/j' , label: 'Version 1.02', icon:''}
    ]},
    {link: '/jenkin', label: 'Jenkins', icon: 'dashboard'}
  ];
}

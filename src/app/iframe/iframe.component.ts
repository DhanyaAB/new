import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {
  urlSafe: SafeResourceUrl;

  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    var time1=this.route.snapshot.paramMap.get("build")
     var url = "http://13.235.153.134:8080/job/PolyLogyx_Sanity_Test_Suite/"+time1+"/robot/report/report.html";
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

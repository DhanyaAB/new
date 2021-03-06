import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-rep1',
  templateUrl: './rep1.component.html',
  styleUrls: ['./rep1.component.scss']
})
export class Rep1Component implements OnInit {
  urlSafe: SafeResourceUrl;

  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    var time1=this.route.snapshot.paramMap.get("build")
     var url = "http://13.235.153.134:8080/job/PolyLogyx_Detection_Automation_Test_Suite/"+time1+"/robot/report/report.html";
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

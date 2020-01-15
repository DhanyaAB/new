import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-rep2',
  templateUrl: './rep2.component.html',
  styleUrls: ['./rep2.component.scss']
})
export class Rep2Component implements OnInit {
  urlSafe: SafeResourceUrl;

  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    var time1=this.route.snapshot.paramMap.get("build")
     var url = "http://13.235.153.134:8080/job/PolyLogyx_Node_Scale_Test/"+time1+"/robot/report/report.html";
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

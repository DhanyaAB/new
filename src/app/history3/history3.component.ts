import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
@Component({
  selector: 'app-history3',
  templateUrl: './history3.component.html',
  styleUrls: ['./history3.component.scss']
})
export class History3Component implements OnInit {
  job_in: string;
  pass =[];
  fail =[];
  total=[];
  result=[];
  data = [];
  build= [];
  time2=[];
  time1=[];

  constructor(private dataservice: DataService) { }


  ngOnInit() {

  this.job3();

    }
  job3(){
    this.dataservice.jobs_3()
      .subscribe(da =>{
        var trial=da
        console.log(trial)
        this.job_in=trial["job"];
        var t = trial['output']
        for (let i =0;i<t.length;i++){
          if("failCount" in t[i]){
            t[i].build = t[i]["buildNumber"]
            t[i].time1=t[i]["Start_time"]
            t[i].time2=t[i]["end_time"]
            t[i].fail = t[i]["failCount"]
            t[i].pass = t[i]["passCount"]
            t[i].total = t[i]["totalCount"]
            t[i].result = t[i]["result"]
            //console.log(this.Test)

          this.data.push(t[i])
          }
         }
       });

}

}

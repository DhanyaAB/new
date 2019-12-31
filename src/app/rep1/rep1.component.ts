import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-rep1',
  templateUrl: './rep1.component.html',
  styleUrls: ['./rep1.component.scss']
})
export class Rep1Component implements OnInit {

  job_in: string;
  pass =[];
  fail =[];
  total=[];
  result=[];
  data = [];
  build= [];
  time1=[];
  time2=[];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.job1();

  }
  job1(){
    this.dataservice.jobs_1()
        .subscribe(da =>{
          var trial=da
          console.log(trial)
          this.job_in=trial["job"];
          var t = trial['output']
          for (let i =0;i<t.length;i++){
            if("failCount" in t[i]){
              t[i].file = t[i]["file"]

            this.data.push(t[i])
            }
           }
         });

  }

  }

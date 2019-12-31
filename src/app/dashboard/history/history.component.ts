import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

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
              t[i].build = t[i]["buildNumber"]
              t[i].time1=t[i]["date"]
              t[i].time2=t[i]["end_time"]
              t[i].fail = t[i]["failCount"]
              t[i].pass = t[i]["passCount"]
              t[i].total = t[i]["totalCount"]
              t[i].result = t[i]["result"]
              //console.log(this.Test)

            this.data.push(t[i])
            }
           }


          //console.log(this.data)
         // console.log(this.data2)
         });

  }

}

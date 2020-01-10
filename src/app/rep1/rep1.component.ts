import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { ActivatedRoute } from '@angular/router';

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
  data1 = [];
  data2 = [];
  build= [];
  time1=[];
  time2=[];
  file=[];
  // constructor(private dataservice: DataService) { }
  constructor(private route: ActivatedRoute,private dataservice: DataService) { }

  ngOnInit() {
    this.job1()
}

  job1(){
    this.dataservice.jobs_1()
        .subscribe(da =>{
          var trial=da
          // console.log(trial)
          this.job_in=trial["job"];
          var t = trial['output']
          for (let i =0;i<t.length;i++){
            var time1=this.route.snapshot.paramMap.get("build")
            // console.log(this.time1)
            if(t[i]['buildNumber']==time1){
              for(let j=0;j<t[i]['total statistics'].length;j++){
                  console.log(t[i]['total statistics'][j]['label'])
                  t[j].stats = t[i]['total statistics'][j]['label']
                  // console.log(t[i]['total statistics'][j]['label'])
                  t[j].Pass=t[i]['total statistics'][j]['pass']
                  t[j].Fail = t[i]['total statistics'][j]['fail']
                  t[j].Total=t[i]['total statistics'][j]['pass']+t[i]['total statistics'][j]['fail']
                  t[j].Elapsed = t[i]['total statistics'][j]['elapsed']

              //console.log(this.Test)

                this.data.push(t[j])
                console.log(this.data)
                }
              for(let k=0;k<t[i]['statistics by tags'].length;k++){
                  console.log(t[i]['statistics by tags'][k]['label'])
                  t[k].stats1 = t[i]['statistics by tags'][k]['label']
                  t[k].Pass1=t[i]['statistics by tags'][k]['pass']
                  t[k].Fail1 = t[i]['statistics by tags'][k]['fail']
                  t[k].Total1=t[i]['statistics by tags'][k]['pass']+t[i]['statistics by tags'][k]['fail']
                  t[k].Elapsed1 = t[i]['statistics by tags'][k]['elapsed']

                this.data1.push(t[k])

                }
              for(let l=0;l<t[i]['statistics by suite'].length;l++){
                  t[l].stats2 = t[i]['statistics by suite'][l]['label']
                  t[l].Pass2=t[i]['statistics by suite'][l]['pass']
                  t[l].Fail2 = t[i]['statistics by suite'][l]['fail']
                  t[l].Total2=t[i]['statistics by suite'][l]['pass']+t[i]['statistics by suite'][l]['fail']
                  t[l].Elapsed2 = t[i]['statistics by suite'][l]['elapsed']
                this.data2.push(t[l])
              }
              }
           }
         });



  }
}

import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from '../../data.service';
import { GoogleChartsModule } from 'angular-google-charts';


@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})

export class DashboardHomeComponent implements OnInit {
  job_in: string;
  FAIL=[];
  PASS=[];
  Total: number;
  Pass: number;
  Fail: number;
  lables = [];
  chart=[];
  date=[];

  job_in1: string;
  FAIL1=[];
  PASS1=[];
  Total1: number;
  Pass1: number;
  Fail1: number;
  lables1= [];
  date1=[];

  job_in2: string;
  FAIL2=[];
  PASS2=[];
  Total2: number;
  Pass2: number;
  Fail2: number;
  lables2 = [];
  date2=[];

  constructor(private dataservice: DataService) { }
  ngOnInit() {
    this.job1();
    this.job2();
    this.job3();

  }
  job1(){
    this.dataservice.jobs_1()
        .subscribe(da =>{
          var trial=da
          this.job_in=trial["job"]
          var p = trial['output']
          for (let i =0;i<p.length;i++){
              console.log(p[i])
              if("failCount" in p[i]){
                this.Fail= p[i]["failCount"]
                this.Pass= p[i]["passCount"]
                this.Total= p[i]["totalCount"]
                this.date= p[i]["date"]
                break;
              }
          }
          var k = trial['output']
          for (let i =k.length-1;i>=0;i--) {
            if("failCount" in k[i]){
              this.lables.push(k[i]["buildNumber"])
              this.FAIL.push(k[i]["failCount"])
              this.PASS.push(k[i]["passCount"])

          }
          setTimeout(() => {
           this.plotchart();
          }, 200)
        }
    });
  }
  job2(){
    this.dataservice.jobs_2()
        .subscribe(da =>{
          var trial=da
          this.job_in1=trial["job"]
          var p = trial['output']
          for (let i =0;i<p.length;i++){
              console.log(p[i])
              if("failCount" in p[i]){
                this.Fail1= p[i]["failCount"]
                this.Pass1=p[i]["passCount"]
                this.Total1= p[i]["totalCount"]
                break;
              }
          }
          var k = trial['output']
          for (let i =k.length-1;i>=0;i--) {
            if("failCount" in k[i]){
              this.lables1.push(k[i]["buildNumber"])
              this.FAIL1.push(k[i]["failCount"])
              this.PASS1.push(k[i]["passCount"])

          }
          setTimeout(() => {
           this.plotchart();
          }, 200)
        }
    });
  }
  job3(){
    this.dataservice.jobs_3()
        .subscribe(da =>{
          var trial=da
          this.job_in2=trial["job"]
          var p = trial['output']
          for (let i =0;i<p.length;i++){
              console.log(p[i])
              if("failCount" in p[i]){
                this.Fail2= p[i]["failCount"]
                this.Pass2= p[i]["passCount"]
                this.Total2= p[i]["totalCount"]
                break;
              }
          }
          var k = trial['output']
          for (let i =k.length-1;i>=0;i--) {
            if("failCount" in k[i]){
              this.lables2.push(k[i]["buildNumber"])
              this.FAIL2.push(k[i]["failCount"])
              this.PASS2.push(k[i]["passCount"])
            }
              setTimeout(() => {
               this.plotchart();
              }, 200)

        }
    });
  }
  plotchart(){
    var chart1 = new Chart('canvas1',{
      type: 'line',
      data: {
         labels: this.lables,
         datasets: [{
            label: "Pass",
            backgroundColor: '#61ED1B',
            data:  this.PASS,

         }, {
            label: "Fail",
            backgroundColor: '#ED531B',
            data: this.FAIL,
         }, ]
      },
      options: {
         responsive: true,
         elements: { point: { radius: 0 } },
         tooltips: {
            mode: 'index',
            intersect: false
         },
         scales: {
            xAxes: [{
              stacked: true,
              scaleLabel: {
                  display: true,
                  labelString: 'Build Number'
                }
            }],
            yAxes: [{
              stacked: true,
              scaleLabel: {
                  display: true,
                  labelString: 'Total Test Cases'
                },
              ticks: {
                min: 0,
                stepSize: 30
              }

           }]
         }

      }
   });
   var chart2 = new Chart('canvas2',{
     type: 'line',
     data: {
        labels: this.lables1,
        datasets: [{
           label: "Pass",
           backgroundColor: '#61ED1B',
           data:  this.PASS1,
            lineTension: 0,
        }, {
           label: "Fail",
           backgroundColor: '#ED531B',
           data: this.FAIL1,
        }, ]
     },
     options: {
        responsive: true,
        legend: {
           display: true
        },
        elements: { point: { radius: 0 } },
        tooltips: {
           mode: 'index',
           intersect: false
        },
        scales: {

           xAxes: [{
              stacked: true,
              scaleLabel: {
                  display: true,
                  labelString: 'Build Number'
                }
           }],
           yAxes: [{
             stacked: true,
             scaleLabel: {
                 display: true,
                 labelString: 'Total Test Cases'
               }
          }]
        },

     }
  });
  var chart3 = new Chart('canvas3',{
    type: 'line',
    data: {
       labels: this.lables2,
       datasets: [{
          label: "Pass",
          backgroundColor: '#61ED1B',
          data:  this.PASS2,
       }, {
          label: "Fail",
          backgroundColor: '#ED531B',
          data: this.FAIL2,
       }, ]
    },
    options: {
       responsive: true,
       legend: {
          display: true
       },
       tooltips: {
          mode: 'index',
          intersect: false
       },
       elements: { point: { radius: 0 } },
       scales: {
          xAxes: [{
             stacked: true,
             scaleLabel: {
                 display: true,
                 labelString: 'Build Number'
               }
          }],
          yAxes: [{
            stacked: true,
            scaleLabel: {
                display: true,
                labelString: 'Total Test Cases'
              }
         }]
       },

    }
 });


}
}

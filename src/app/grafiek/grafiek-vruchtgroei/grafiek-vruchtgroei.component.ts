import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { DatabaseService } from 'src/app/services/database.service';
//import { readSync } from 'fs';

@Component({
  selector: 'app-grafiek-vruchtgroei',
  templateUrl: './grafiek-vruchtgroei.component.html',
  styleUrls: ['./grafiek-vruchtgroei.component.scss']
})
export class GrafiekVruchtgroeiComponent implements OnInit {

  selectedValue = 0;
  years: any[] = [];

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Appel' },
    { data: [], label: 'Peer' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    },
     annotation: {
    //   annotations: [
    //     {
    //       type: 'line',
    //       mode: 'vertical',
    //       scaleID: 'x-axis-0',
    //       value: 'March',
    //       borderColor: 'orange',
    //       borderWidth: 2,
    //       label: {
    //         enabled: true,
    //         fontColor: 'orange',
    //         content: 'LineAnno'
    //       }
    //     },
    //   ],
     },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // blue
      backgroundColor: 'rgba(54, 162, 235,0.2)',
      borderColor: 'rgba(54, 162, 235,1)',
      pointBackgroundColor: 'rgba(54, 162, 235,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(54, 162, 235,1)'
      
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private _databaseService: DatabaseService) { }

  ngOnInit() {
    this._databaseService.getAppelGroeiByArduino().subscribe(result => {
      console.log(result);
      this.lineChartData[0].data = result;
    });
    this._databaseService.getPeerGroeiByArduino().subscribe(result => {
      console.log(result);
      this.lineChartData[1].data = result;
    });

    this._databaseService.getDatumsByArduino().subscribe(result => {
      this.lineChartLabels = result;
    });
    this._databaseService.getJaren().subscribe(result => {
      var jaren = result;
      this.years = [];
      this.years.push({value:0, viewValue:'Meest recente data'});
      for (let i = 0; i < jaren.length; i++) {
        this.years.push({ value: jaren[i], viewValue: jaren[i] });
      }
    });
  }
  reload(){
    this.ngOnInit();
  }
  reloadData(event: any) {
    //console.log(event.source.value);
    this._databaseService.jaar.next(event.source.value);
    this.selectedValue = event.source.value;
    this.ngOnInit();
  }


  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //console.log(event, active);
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor() {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel() {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
    // this.chart.update();
  }
}

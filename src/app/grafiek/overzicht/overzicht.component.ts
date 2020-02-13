import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.scss']
})
export class OverzichtComponent implements OnInit {

  years: any[] = [
    {value: '0', viewValue: 'Geen jaar'},
    {value: '2019', viewValue: '2019'},
    {value: '2020', viewValue: '2020'}
  ];
  selectedYear : string;

  public vruchtgroeiData: ChartDataSets[] = [
    { data: [], label: 'Appel' },
    { data: [], label: 'Peer' },
  ];
  public vruchtgroeiLabels: Label[] = [];
  public vruchtgroeiOptions: (ChartOptions & { annotation: any }) = {
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
     },
  };

  public vruchtgrootteData: ChartDataSets[] = [
    { data: [], label: 'Appel' },
    { data: [], label: 'Peer' },
  ];
  public vruchtgrootteLabels: Label[] = [];
  public vruchtgrootteOptions: (ChartOptions & { annotation: any }) = {
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
     },
  };

  public tempvochtData: ChartDataSets[] = [
    { data: [], label: 'Temperatuur' },
    { data: [], label: 'Vochtigheid' },
    { data: [], label: 'Bodemtemperatuur' },
  ];
  public tempvochtLabels: Label[] = [];
  public tempvochtOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
     annotation: {
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
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
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

  constructor(private _databaseService: DatabaseService) { }

  ngOnInit() {
    this._databaseService.getDatums().subscribe(result => {
      this.tempvochtLabels = result;
      this.vruchtgroeiLabels = result;
      this.vruchtgrootteLabels = result;
    });

    this._databaseService.getTemp().subscribe(result => {
      this.tempvochtData[0].data = result;
    });
    this._databaseService.getvochtigheid().subscribe(result => {
      this.tempvochtData[1].data = result;
    });
    this._databaseService.getBodemTemp().subscribe(result => {
      this.tempvochtData[2].data = result;
    });

    this._databaseService.getAppelGroei().subscribe(result => {
      this.vruchtgroeiData[0].data = result;
    });
    this._databaseService.getPeerGroei().subscribe(result => {
      this.vruchtgroeiData[1].data = result;
    });


    this._databaseService.getAppelWaardes().subscribe(result => {
      this.vruchtgrootteData[0].data = result;
    });
    this._databaseService.getPeerWaardes().subscribe(result => {
      this.vruchtgrootteData[1].data = result;
    });

  }

  reload() {
    this.ngOnInit();
  }
  reloadData(event: any) {
    // console.log(event.target.value);
    console.log(event.source.value);
    // console.log(this.selectedYear);
  }
}

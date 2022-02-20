import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};
@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css'],
})
export class ToggleSwitchComponent implements OnInit {
  @Output() changed22 = new EventEmitter<any>();
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | any;
  isChecked: boolean = true;
  response: string = 'ON';
  result: any = '45';
  isLoading: boolean = false;
  isLoading2: boolean = false;
  isLoading3: boolean = false;
  isLoading4: boolean = false;
  isLoading5: boolean = false;
  isLoading6: boolean = false;
  isLoading7: boolean = false;
  data = [
    { name: 'India', value: '56' },
    { name: 'Australia', value: '234' },
    { name: 'UK', value: '567' },
    { name: 'US', value: '8678' },
    { name: 'Canada', value: '98789' },
    { name: 'Poland', value: '98789' },
    { name: 'Pakistan', value: '98789' },
  ];

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: [56, 98789, 567, 8678, 98789, 234, 98789]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "India",
          "Canada",
          "UK",
          "US",
          "Pakistan",
          "Australia",
          "Poland",
         
        ]
      }
    };
  }
  ngOnInit(): void {}

  changed() {
    this.isChecked = !this.isChecked;
    console.log(this.isChecked);
  }
  onChangeDiscount(e: any) {
    this.data.map((dataCap: any) => {
      switch (dataCap.name) {
        case 'India':
          this.result = dataCap.value - dataCap.value * (e.target.value / 100);
          this.isLoading = true;
          setTimeout(() => {
            
            //this.isLoading = false;
            dataCap.value = this.result;
          }, 1000);

          break;
        case 'Australia':
          this.result = dataCap.value - dataCap.value * (e.target.value / 100);
          dataCap.value = this.result;
          this.isLoading2 = true;
          setTimeout(() => {
            this.isLoading2 = false;
            dataCap.value = this.result;
          }, 2000);
          break;
        case 'UK':
          this.result = dataCap.value - dataCap.value * (e.target.value / 100);
          this.isLoading3 = true;
          setTimeout(() => {
            this.isLoading3 = false;
            dataCap.value = this.result;
          }, 3000);
          break;
        case 'US':
          this.result = dataCap.value - dataCap.value * (e.target.value / 100);
          this.isLoading4 = true;
          setTimeout(() => {
            this.isLoading4 = false;
            dataCap.value = this.result;
          }, 4000);
          break;
        case 'Canada':
          this.result = dataCap.value - dataCap.value * (e.target.value / 100);
          this.isLoading5 = true;
          setTimeout(() => {
            this.isLoading5 = false;
            dataCap.value = this.result;
          }, 5000);
          break;
        case 'Poland':
          this.result = dataCap.value - dataCap.value * (e.target.value / 100);
          this.isLoading6 = true;
          setTimeout(() => {
            this.isLoading6 = false;
            dataCap.value = this.result;
          }, 6000);
          break;
        case 'Pakistan':
          this.result = dataCap.value - dataCap.value * (e.target.value / 100);
          this.isLoading7 = true;
          setTimeout(() => {
            this.isLoading7 = false;
            dataCap.value = this.result;
          }, 7000);
          break;

        default:
        // code block
      }

      // console.log(dataCap.value)
      // this.result = dataCap.value - dataCap.value * (e.target.value / 100);
      // setTimeout(() => {
      //   dataCap.value = this.result;
      // }, 1000);
    });
  }
  // onMove(e: any) {
  //   this.response = (<HTMLInputElement>e.target).innerHTML;
  //   console.log((<HTMLInputElement>e.target).innerHTML);
  // }
}

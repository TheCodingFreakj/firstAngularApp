import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
} from 'ng-apexcharts';
import { series } from '../../../data';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | any;
  options:any
  toggle:boolean = true;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Session Duration',
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
        {
          name: 'Page Views',
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
        },
        {
          name: 'Total Visits',
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
        },
      ],
      chart: {
        height: 350,
        width: 300,
        background: 'black',
        color: '#fff',
        type: 'line',
        // position:"relative",
        // left:"100rem"
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 5,
        curve: 'straight',
        dashArray: [0, 8, 5],
      },
      title: {
        text: 'Page Statistics',
        align: 'left',
      },
      legend: {
        tooltipHoverFormatter: function (
          val: string,
          opts: {
            w: {
              globals: { series: { [x: string]: { [x: string]: string } } };
            };
            seriesIndex: string | number;
            dataPointIndex: string | number;
          }
        ) {
          console.log(val)
          console.log( opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex])
          return (
            val +
            '<div class="arrow_box">' +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            '</div>'
          );
        },
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        labels: {
          trim: false,
        },
        categories: [
          '01 Jan',
          '02 Jan',
          '03 Jan',
          '04 Jan',
          '05 Jan',
          '06 Jan',
          '07 Jan',
          '08 Jan',
          '09 Jan',
          '10 Jan',
          '11 Jan',
          '12 Jan',
        ],
      },
      tooltip: {
        onDatasetHover: {
          highlightDataSeries: true,
      },
      theme:"dark",
        y: [
          {
            title: {
              formatter: function (val: any) {
                return val + ' (mins)';
              },
            },
          },
          {
            title: {
              formatter: function (val: any) {
                return val + ' per session';
              },
            },
          },
          {
            title: {
              formatter: function (val: any) {
                return val;
              },
            },
          },
        ],
      },
      grid: {
        borderColor: 'black',
      },
    };

    this.options = {
      series: [44, 55, 41, 17, 15],
      chart: {
        width: 380,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };
  
  }
  ngOnInit(): void {}
  change(){
    this.toggle = !this.toggle;
    console.log("clicked")
  }
}

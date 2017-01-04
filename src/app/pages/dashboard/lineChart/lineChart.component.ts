import { Component, ViewEncapsulation } from '@angular/core';

import { LineChartService } from './lineChart.service';

@Component({
	selector: 'line-chart',
  	encapsulation: ViewEncapsulation.None,
  	styleUrls: ['./lineChart.scss'],
  	templateUrl: './lineChart.html'
})
export class LineChart {

  	chartData:Object;

  	constructor(private lineChartService:LineChartService) {
		this.chartData = this.lineChartService.getData();
  	}

  	initChart(chart:any) {
		let zoomChart = () => {
	  		chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
		};

		chart.addListener('rendered', zoomChart);
		zoomChart();

		if (chart.zoomChart) {
	  		chart.zoomChart();
		}
  	}
}

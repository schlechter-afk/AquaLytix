const datapoint = [100, 200, 300];

import {datathingspeak_temp} from "./thingspeak2.js";
import {datathingspeak} from "./thingspeak1.js";

// Volume FLow in Litres
var options2 = { 
	chart: {
		type: 'line'
	},
	series: [{
		name: 'Litres',
		data: datathingspeak_temp
	}],
	// xaxis: {
	// 	categories: [1, 2, 3, 4, 5]
	// },
	title: {
		display: true,
		// text: 'Flow-Rate'
	}

}
var chart = new ApexCharts(document.querySelector("#reportsChart2"), options2);
chart.render();

// Hourly Volume in Litres
var options1 = {
	chart: {
		type: 'bar'
	},
	series: [{
		name: 'Litres',
		data: datathingspeak_temp
	}],
	// xaxis: {
	// 	categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
	// },
	title: {
		display: true,
		// text: 'Flow-Rate [L/min]'
	}

}
var chart = new ApexCharts(document.querySelector("#reportsChart3"), options1);
chart.render();

// Daywise VOlume FLow in Litres
var options = {
	chart: {
		type: 'line'
	},
	series: [{
		name: 'Litres',
		data: datathingspeak
	}],
	xaxis: {
		categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
	},
	title: {
		display: true,
		// text: 'Flow-Rate'
	}

}
var chart = new ApexCharts(document.querySelector("#reportsChart4"), options);
chart.render();
// console.log(datathingspeak[0]);

// // Flow-rate L/min
// var optionss = {
// 	chart: {
// 		type: 'line'
// 	},
// 	series: [{
// 		name: 'Litres',
// 		data: datathingspeak
// 	}],
// 	// xaxis: {
// 	// 	categories: ["Monday", "Tuesday", "Wednesday", "Thursday"]
// 	// },
// 	title: {
// 		display: true,
// 		// text: 'Flow-Rate'
// 	}
// }

// var chart = new ApexCharts(document.querySelector("#reportsChart"), optionss);
// chart.render();
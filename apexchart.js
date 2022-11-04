const datapoint = [100, 200, 300];
import {datathingspeak} from "./thingspeak1.js";

var options2 = {
	chart: {
		type: 'bar'
	},
	series: [{
		name: 'Litres',
		data: [0, 0.8, 0.4, 0.6, 0.8, 1]
	}],
	xaxis: {
		categories: [1, 2, 3, 4, 5]
	},
	title: {
		display: true,
		// text: 'Flow-Rate'
	}

}
var chart = new ApexCharts(document.querySelector("#reportsChart2"), options2);
chart.render();


var options1 = {
	chart: {
		type: 'bar'
	},
	series: [{
		name: 'Litres',
		data: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4, 4.6, 4.8, 5]
	}],
	xaxis: {
		categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
	},
	title: {
		display: true,
		// text: 'Flow-Rate [L/min]'
	}

}
var chart = new ApexCharts(document.querySelector("#reportsChart3"), options1);
chart.render();


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

var optionss = {
	// chart: {
	// 	type: 'bar'
	// },
	// series: [{
	// 	// name: 'Litres',
	// 	data: {
	// 		labels: [1,2,3,4,5],
	// 	}
	// }],
	// // xaxis: {
	// // 	categories: [1, 2, 3, 4, 5]
	// // },
	// // title: {
	// // 	display: true,
	// // 	// text: 'Flow-Rate'
	// // }
	
	chart: {
		type: 'line'
	},
	series: [{
		name: 'Litres',
		data: datathingspeak
	}],
	// xaxis: {
	// 	categories: ["Monday", "Tuesday", "Wednesday", "Thursday"]
	// },
	title: {
		display: true,
		// text: 'Flow-Rate'
	}
}

var chart = new ApexCharts(document.querySelector("#reportsChart"), optionss);
chart.render();
const upd_2 = 10000;
var a_val1;
var b_val1;
var flag1=1;

function uploading2(a,b) {
	a_val1 = a;
	b_val1 = b;
	flag1 = 0;
}		

chartIt2(upd_2);

async function chartIt2(interval){
    const loadedData2 = await loadData2();
	// console.log(loadedData.timeStamp2)
    var myChart = new Chart(document.getElementById("chartjs2"), {
        type: 'line',
        backgroundColor: 'rgba(220, 220, 230, 0.5)',
        data: {
            labels: loadedData2.timeStamp2,
            datasets: [{
                label: 'Volume Flow',
                data: loadedData2.chartData2,
                backgroundColor: [
                    'rgba(220, 0, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(220, 9, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
    })
    
    setInterval(async () => {
      const data = await loadData2();
      myChart.data.datasets.forEach(d => d.data = data.chartData2)
      myChart.data.labels = data.timeStamp2
	//   console.log(data.timeStamp2);
      myChart.update()
    }, interval)
}

// https://api.thingspeak.com/channels/1907505/fields/field1/last.txt?api_key=VRLLBQF9JEX7XQF5
// https://api.thingspeak.com/channels/1907505/fields/1.json?minutes=60
// https://api.thingspeak.com/channels/1907505/fields/1.json?start=2011-12-31%2000:00:00&end=2012-01-01%2000:00:00

async function loadData2() {
    var chartData2 = [];
    var timeStamp2 = [];
    if(flag1 == 0)
    {
        let link2 = 'https://api.thingspeak.com/channels/1907505/fields/2.json?'
        link2 += '&start=' + a_val1 + '&end=' + b_val1;
		var i=0;
		await $.getJSON(link2, function(data) {
			console.log(link2)
			$.each(data.feeds, function(){
				var value2 = this.field2;
                console.log(value2);
				var raw_time2 = this.created_at;
				if (raw_time2)
				{
					var timewZ2 = raw_time2.split("T").slice(-2);   
				}
				if(i%20==0)
				{
					chartData2.push(value2);
					timeStamp2.push(timewZ2);
				}
				i++;
			});
		});
		// console.log(timeStamp2)
		return {chartData2, timeStamp2};
    }
	else
	{
		// console.log("jaihind")
		let link2 = 'https://api.thingspeak.com/channels/1907505/fields/2.json?results=5000&timezone=Asia/Kolkata';
		await $.getJSON(link2, function(data) {
			$.each(data.feeds, function(){
				var value2 = this.field2;
                console.log(value2);
				var raw_time2 = this.created_at;
	
				if (raw_time2){
					var timewZ2 = raw_time2.split("T").slice(-2);   
					// console.log(timewZ2[0]);                 
				}
	
				chartData2.push(value2);
				timeStamp2.push(timewZ2);
			});
		});
		return {chartData2, timeStamp2};
	}
}

// dataHourly = retime(data,'hourly','max');
// head(dataHourly,4)
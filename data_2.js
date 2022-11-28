const upd_2 = 10000;
var a_val;
var b_val;
var flag=1;

function uploading2(a,b) {
	a_val = a;
	b_val = b;
	flag = 0;
}		

chartIt2(upd_2);

async function chartIt2(interval){
    const loadedData = await loadData2();
	// console.log(loadedData.timeStamp)
    var myChart = new Chart(document.getElementById("chartjs2"), {
        type: 'line',
        backgroundColor: 'rgba(220, 220, 230, 0.5)',
        data: {
            labels: loadedData.timeStamp,
            datasets: [{
                label: 'Volume Flow',
                data: loadedData.chartData,
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
      myChart.data.datasets.forEach(d => d.data = data.chartData)
      myChart.data.labels = data.timeStamp
	//   console.log(data.timeStamp);
      myChart.update()
    }, interval)
}

// https://api.thingspeak.com/channels/1907505/fields/field1/last.txt?api_key=VRLLBQF9JEX7XQF5
// https://api.thingspeak.com/channels/1907505/fields/1.json?minutes=60
// https://api.thingspeak.com/channels/1907505/fields/1.json?start=2011-12-31%2000:00:00&end=2012-01-01%2000:00:00

async function loadData2() {
    var chartData = [];
    var timeStamp = [];
    if(flag == 0)
    {
        let link = 'https://api.thingspeak.com/channels/1907505/fields/2.json?'
        link += '&start=' + a_val + '&end=' + b_val;
		var i=0;
		await $.getJSON(link, function(data) {
			console.log(link)
			$.each(data.feeds, function(){
				var value = this.field2;
                console.log(value);
				var raw_time = this.created_at;
				if (raw_time)
				{
					var timewZ = raw_time.split("T").slice(-2);   
				}
				if(i%20==0)
				{
					chartData.push(value);
					timeStamp.push(timewZ);
				}
				i++;
			});
		});
		// console.log(timeStamp)
		return {chartData, timeStamp};
    }
	else
	{
		console.log("jaihind")
		let link = 'https://api.thingspeak.com/channels/1907505/fields/2.json?results=5000&timezone=Asia/Kolkata';
		await $.getJSON(link, function(data) {
			$.each(data.feeds, function(){
				var value = this.field2;
                console.log(value);
				var raw_time = this.created_at;
	
				if (raw_time){
					var timewZ = raw_time.split("T").slice(-2);   
					// console.log(timewZ[0]);                 
				}
	
				chartData.push(value);
				timeStamp.push(timewZ);
			});
		});
		return {chartData, timeStamp};
	}
}
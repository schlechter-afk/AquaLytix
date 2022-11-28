export let datathingspeak = [];

// const data2 = [];

function call() {
    $.ajax({
      url: 'https://api.thingspeak.com/channels/1907505/fields/field1/last.txt?api_key=VRLLBQF9JEX7XQF5',
      type: 'GET',
      data: {
        format: 'text'
      },
      success: function(response) {
        var pr = document.getElementById("field1");
		    pr.innerText = response +  " L/min";
        datathingspeak.push(response);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
}

setInterval(call, 500);
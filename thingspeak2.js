export let datathingspeak_temp = [];

function call() {
    $.ajax({
      url: 'https://api.thingspeak.com/channels/1907505/fields/field2/last.txt?api_key=VRLLBQF9JEX7XQF5',
      type: 'GET',
      data: {
        format: 'text'
      },
      success: function(response) {
        var pr = document.getElementById("field2");
		    pr.innerText = response/1000 +" L";
        var val = response/1000;
        datathingspeak_temp.push(val);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
}

setInterval(call, 500);

var pv = document.createElement("h6");
pv.id = "lite";

// pv.setAttribute.;
pv.style.fontSize = "20px";
// pv.style.textAlign = "center";

// console.log("ok");
// pv.textContent = "good";
var ele = document.getElementById("DateTime");
ele.appendChild(pv);
setInterval(refreshtime, 1000);

function refreshtime() {
	console.log("ok");
	var datet = new Date().getDate();
	var datetm = new Date().getMonth();
	var datety = new Date().getFullYear();
	var timeh = new Date().getHours();
	var timem = new Date().getMinutes();
	var times = new Date().getSeconds();
	if (times < 10)
		pv.innerText = datet.toString() + "-" + datetm.toString() + "-" + datety.toString() + "\n" + timeh.toString() + ":" + timem.toString() + ":" + "0" + times.toString();
	else
		pv.innerText = datet.toString() + "-" + datetm.toString() + "-" + datety.toString() + "\n" + timeh.toString() + ":" + timem.toString() + ":" + times.toString();

}
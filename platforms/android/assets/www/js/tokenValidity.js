document.addEventListener("resume", 
function checkTokenValidity(){
	var expiration = localStorage["ex"];
	var tempDate = expiration.slice(0,expiration.indexOf("T"));
	tempDate = expiration.split("-");
	
	// Year, Month, and Day 
	
	var curYear = parseInt(tempDate[0]);
	var curMonth = parseInt(tempDate[1])-1;
	var curDay = parseInt(tempDate[2]);
	
	// Splitting Time into respective fields
	
	expiration = expiration.slice(expiration.indexOf("T")+1,expiration.indexOf("."));
	expiration = expiration.split(":").join(".");
	var prevTime = expiration.split(".");
	var hours = parseInt(prevTime[0]);
	if(hours <= 6){
		hours = 18+hours;
		curDay -=1;
		
	}
	var minutes = prevTime[1];
	var expDate = new Date(curYear,curMonth,curDay,hours,minutes,0);
	var d = new Date();
	var currentDate = new Date(d.getFullYear(),d.getMonth(), d.getDay()+1,d.getHours(),d.getMinutes(),d.getSeconds());
	if(currentDate < expDate){
	
	}
	else{
		window.location="index.html";
	}
}, false);
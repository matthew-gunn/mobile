// javascript dark mode implementation 


var darkcounter = 1;
document.getElementById("darkmode").onclick = function() {darkmode()};
function darkmode(){
	darkcounter = darkcounter * (-1);
	console.log(darkcounter);
	
	if(darkcounter < 0){
		//darkmode color change
		console.log("Darkmode");
		
		//document.getElementById("demo").style.color = "red";
		
		document.getElementById("headertag").style.backgroundColor = "black";
		document.getElementById("footertag").style.backgroundColor = "black";		
		document.getElementById("headertag").style.borderColor = "#7b0f1a";	
		document.getElementById("bodytag").style.backgroundColor = "#16161d";			
		document.getElementById("main").style.backgroundColor = "#00000f";
		document.getElementById("main").style.color = "white";
		document.getElementById("maintitle").style.color = "#7b0f1a";
		
		var x = document.getElementsByClassName("button");
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = "black";
		}
		
		
	}
	if(darkcounter > 0){
		//lightmode color change
		console.log("lightmode");
		
		document.getElementById("headertag").style.backgroundColor = "#293a7a";
		document.getElementById("footertag").style.backgroundColor = "#293a7a";
		document.getElementById("headertag").style.borderColor = "#5e8c61";
		document.getElementById("bodytag").style.backgroundColor = "lightgrey";	
		document.getElementById("main").style.backgroundColor = "white";	
		document.getElementById("main").style.color = "black";
		document.getElementById("maintitle").style.color = "#5e8c61";
		
		var x = document.getElementsByClassName("button");
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = "#000034";
		}
		
	}
	
	
}


// make 4 cookies: consent, mobile, darkmode, dakmode_session
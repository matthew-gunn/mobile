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
		
		
		
		
	}
	if(darkcounter > 0){
		//lightmode color change
		console.log("lightmode");
		
		
	}
	
	
}


//things to target to change:
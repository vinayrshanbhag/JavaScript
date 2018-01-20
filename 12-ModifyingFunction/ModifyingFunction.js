var Calc = function(){
	this.doubleIt = function(){
		return 2* this.getData();
	}
};

Calc.prototype.getData = function(){
	console.log("Slowly getting the data from the external service");
	
	return 4;
};


var calc = new Calc();
// Modifying the function here.
calc.getData = function(){
	console.log("Getting the fake data");
	return 8;
};

console.log(calc.doubleIt());

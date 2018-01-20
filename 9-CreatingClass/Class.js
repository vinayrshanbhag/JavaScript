var print = function(value){
	console.log(value);
}

var Car = function(year){
	console.log("called.. with" + year);
	//console.log(this);
	this.year = year;
	this.start = function(){
		console.log('starting.. the car with year'+ this.year);
	}
	//console.log(this);
}

var mycar = new Car(2013);
console.log(typeof(mycar));

var myCar1= new Car(2013);
var myCar2= new Car(2014);

myCar1.start(); 
myCar2.start();
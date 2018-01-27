var Vehicle = function(){
	this.miles = 0;
}

Vehicle.prototype.drive = function(dist){
	debug(this);
	debug("Vehicle Driving...");
	this.miles+=dist;
}

var Car = function(year){
	this.year =year;
	this.drive= function(dist){
		debug("Car Driving...");
		//this.__proto__.drive(dist);
		this.__proto__.drive.apply(this, arguments);
	}
}

Car.prototype = new Vehicle();
var car1 = new Car(2014);
var car2 = new Car(2015);
car1.drive(10);
debug(car1.miles);
debug(car2.miles);
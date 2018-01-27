var Vehicle = function(){
	this.miles = 0;
}

Vehicle.prototype.drive = function(dist){
	debug("vehicle driving");
	this.miles+=10;
}

var Car = function(year){
	this.year =year;
}

var EfficientVehicle = function(dist){
	// this.miles = 0;
	this.drive = function(){
		debug("drive efficiently...");
	}
}

Car.prototype = new Vehicle();
// var car1 = new Car(2014);
// debug(car1.year);
// debug(car1.miles);
// car1.drive(10);


// open question is why I am not getting miles from the parent class Vehicle getting printed
// as undefined
var car2 = new Car(2015);
car2.__proto__ = new EfficientVehicle();
debug(car2.year);
debug(car2.miles);
car2.drive(10);





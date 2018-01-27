var Car = function(){
	this.miles = 0;
	this.drive = function(dist){
	 debug("Vehicle driving...")
	    this.miles+=dist;
	};
	
};

Car.prototype.year = 2014;


var car1 = new Car();
car1.drive(10);
car1.year = 2013;

//delete car1.year;

var car2 = new Car();

debug(car1.miles);
debug(car2.miles);

debug(car1.year);
debug(car2.year);



var Car = function(){
	this.miles = 0;
	this.drive = function(dist){
	 console.log("Vehicle driving...")
	    this.miles+=dist;
	};
	
};

Car.prototype.year = 2014;


var car1 = new Car();
car1.drive(10);
car1.year = 2013;

//delete car1.year;

var car2 = new Car();

console.log(car1.miles);
console.log(car2.miles);

console.log(car1.year);
console.log(car2.year);



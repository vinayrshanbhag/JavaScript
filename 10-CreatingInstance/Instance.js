var Car = function(year){
	console.log(this);
	console.log(this.__proto__);
	this.year = year;
};

Car.prototype.start = function(){
	console.log('Starting....')
};

var car1 = new Car(2013);

var car2 = new Car(2014);

console.log(car1.__proto__=== car2.__proto__);

// var car1 = {};
// car1.__proto__ = Car.prototype;
// Car.call(car1, 2013); 
Car.apply(car1,[2013]);

// console.log(car1.year);
// car1.start();

// 1 Allocates memory for an instance, We will call this as inst(JSON)
// 2 It sets the class's prototype as the prototye of the inst
//   inst.__proto__ = Car.prototype

//3 It invokes the constructor ( function Car) with the inst as the context object.
// Car.call(inst, 2013)
// Car.apply(inst, [2013])









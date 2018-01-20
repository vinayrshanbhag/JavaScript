var Car = function(year) {
	
	this.year =2013;
	this.drive = function(){
		console.log("Driving...")
	}
}
//This is another way of adding the function by using 
//the prototype. All the objects share the prototype

Car.prototype.turn = function(){
	console.log("Turning...");
};



// Car.drive = function(){
// 	console.log("Driving....");
// }

var car1 = new Car(2013);
car1.drive();
car1.turn();

var car2 = new Car(2014);


console.log(car1.drive===car2.drive);
console.log(car1.turn===car2.turn);





var Car = function(year){
 this.year = year;
 
}

Car.prototype.doInspect = function(){
 debug("Inspecting");
 debug(this.year);
 this.report();
}

Car.prototype.report = function(){
 debug("Reporting on...");
 debug(JSON.stringify(this));
}

var car = new Car(2014);
debug(car.year);
car.doInspect();
var Car = function(){
 this.miles = 0;
 this.color = 'red';
}
var car = new Car();

debug(Object.isFrozen(car));
//Free will make sure that u cannot modify the value

Object.freeze(car);
debug(Object.isFrozen(car));

//Level of freeze and seal is only in top level not at the inner object level.

var car1 = new Car();
var car2 = new Car();
car2.color = "Blue";

car1.tow = car2;
Object.freeze(car1);
car1.miles = 10;
car2.miles = 20;

debug(JSON.stringify(car1));
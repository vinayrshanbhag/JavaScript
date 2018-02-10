// 'use strict';

var Car = function(){
 this.miles = 0;
 this.color = 'red';
}

var car = new Car();
debug(JSON.stringify(car));

// this will allow the delete the property
// but it will not allow any addition.
Object.preventExtensions(car);
car.fuel = "Petrol";
debug(Object.isExtensible(car));

debug(JSON.stringify(car));
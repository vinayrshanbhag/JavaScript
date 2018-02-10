var Car = function(){
 this.miles =0;
 this.colour = 'red';
}


var car = new Car();
// Seal will not allow us to add and delete the property
// we can modify the value of the property.
Object.seal(car);
debug(Object.isSealed(car));
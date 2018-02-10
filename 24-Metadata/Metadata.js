'use strict'; //will not allow to modify the files

var Car = function(){
 this.miles = 0;
 this.color = 'red';
}

var car = new Car();
debug(JSON.stringify(car));
car.miles =1
   
// below line will ask the property to be false.
/*Object.defineProperty(car, 'miles', {value:1, writable:false,configurable:false});
debug(JSON.stringify(Object.getOwnPropertyDescriptor(car, 'miles')));
car.miles = 77;
delete car.miles;
debug(JSON.stringify(car)); */


Object.defineProperties(car,{
 miles:{value:7},
 color:{value:'blue'}
});

debug(JSON.stringify(car))





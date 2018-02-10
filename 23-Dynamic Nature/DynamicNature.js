var Car = function(){
 this.miles = 0;
}

var sam =  {
 firstName:'sam'
}

var car1= new Car();

debug(JSON.stringify(sam));
debug(JSON.stringify(car1));



car1.color = "red";
debug(JSON.stringify(car1));

delete sam.firstName;
debug(JSON.stringify(sam));
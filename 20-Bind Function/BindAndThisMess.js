var Car = function(){
 
 this.tuneupcount = 0;
 this.tuneup = function(callback){
  //var self = this;
  console.log("Tune up started..");
  
  /*var finishTuneup= function(){
   console.log("performing..");
   this.tuneupcount++;
   callback();
  }*/
  
  
  
  setTimeout(finishTuneup.bind(this),2000);
  
  
 }
 
}

var finishTuneup = function(){
 console.log("performing..");
 this.tuneupcount++;
 callback();
}


var car = new Car();
car.tuneup(function(){ 
 console.log("Tuneup completed..");
 console.log(car.tuneupcount); 
});

console.log("Hi Vinay");
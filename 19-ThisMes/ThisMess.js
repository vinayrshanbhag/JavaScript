var Car = function(){
 this.tuneupCount =0;
 this.callback;
 
 this.tuneUp = function(callback){
  this.callback = callback;
  self = this;
  
  console.log("tuning up...");
  
  setTimeout(function(){
     console.log("Completing tuneup...");
     console.log(self);
     self.tuneupCount++; 
     callback();
        
   }, 2000);
  
 };
 
// this.finishTuneUp = function(){
//      console.log("Completing tuneup...");
//      console.log(this);
//      this.callback();
//      this.tuneupCount++;
//    };
 
}

var car = new Car();
//car.tuneUp();

console.log(JSON.stringify(car));

car.tuneUp(function(){
 console.log("TuneUp done...");
 console.log(car.tuneupCount);
});

console.log(car.tuneupCount);


'use strict';
var Square = function(){};

// First approach
/*Square.prototype = {
 get area(){
  debug("getter called");
  return this.length * this.length;   
 },
 
 set area(value){
  debug("setter called");
  if(value>0){
   this.length = Math.sqrt(value);
  }
  else{
   throw new Error("area is negative..");
  }
  
 }
}*/
//Second approach...
var properties = {
 
 area:{
  
  get: function(){
   return this.length* this.length},
  set: function(value){
   this.length = Math.sqrt(value);
  }
  
  
 }
 
}

var square = Object.create(Square.prototype, properties);


//var square = new Square();
square.length =4;
square.area =  49;


debug(square.area);
debug(square.length);

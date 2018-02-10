var Square = function(){
 //this.length = length;
 
};



var squareProperties = {
 area : {
  get : function(){
   return this.length * this.length;
  }
 }
}

// Square.prototype = {
//  get area() {return this.length * this.length;}
// }

// var square = new Square(4);
var square = Object.create(Square.prototype, squareProperties);
square.length =4;
debug(square.length);
debug(square.area);
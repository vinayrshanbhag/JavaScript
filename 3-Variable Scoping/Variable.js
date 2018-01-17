/*max = 100;

console.log(100);*/

'use strict';

// Always declare the variable at the top
// else scope of the variable becomes global
// have short methods
//

var foo = function(){
 // var max = 100;
  var max2;
  console.log(max2);
  {
    var max2 =200;
    console.log(max2)
  }
  
  console.log(max2);
}

foo();
//console.log(max);
//console.log(max2);


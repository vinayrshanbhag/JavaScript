var max = function(numbers){
  // Below line would print the number of arguments
  //console.log(arguments)
  var large = arguments[0];
  for(var i =0;i<arguments.length;i++){
	  if(large<arguments[i])
		  large = arguments[i]; 
  }
  return large;
}

console.log(max(1,2));
console.log(max(1,3,5));
console.log(max(1,5,6,7));
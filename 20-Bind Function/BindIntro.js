var greet1 = function(msg, name){   
 debug(msg + ' '+ name);
}

var greet2 = function(msg, name1, name2){
 debug(msg + ''+ name1 + "and" + name2);
}


/*Function.prototype.ourBind = function(){
 var ourBindArgs = arguments;
 var originalFunction = this;
 debug(JSON.stringify(arguments));
 debug("Called 1...");
 
 return function(){
  var givenArgs = arguments;
  debug(JSON.stringify(arguments));
  //debug("Called 2...");
  
  originalFunction("what", "who");
  
 }
 
}*/

var sayHello =      greet1.bind(null, "Hello");
var sayhelloToTwo = greet2.bind(null, "Hello Both");

sayHello("Shanbhag");
sayhelloToTwo("Vinay", "Shruthi");

//greet1("Hi", "Vinay");
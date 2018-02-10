var Greeter = function(){}

Greeter.prototype={

 get hello() {
  debug("Hello");
 },
 
 get hi(){
  debug("hi");
 }

};


var greeter = new Greeter();
// greeter.hello;
// greeter.hi;

var messages= ['hi', 'hello','Jane', 'Joe'];

var call = function(message){
greeter[message];
//greeter.message; wont work.
}

//call('Hi');
//below is the way to create dynamic getter
var createDynamicGetter = function(name){
 
 Object.defineProperty(greeter, name, {
  get: function(){
    debug("Howdy"+ name);
  }
 });
 
}

createDynamicGetter('Jane');
createDynamicGetter('Joe');


messages.forEach(call);

// below is the way to create dynamic property

// var createDynamicProperty = function (name){
//  greeter[name] = function(){
//   debug('Howdy' + name);
//  }
// }
//
// var callDynamicProperty = function(name){
//  greeter[name]();
// }
//
// createDynamicProperty("Jane");
// createDynamicProperty("Joe");
//
// callDynamicProperty("Jane");
// callDynamicProperty("Joe");


// var sam = { 
//  first: "sam",
//  last: "baker"
// };
//
// debug(sam.first);
// debug(sam.last);
//
// var propName = 'first';
// debug(sam[propName]);
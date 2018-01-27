/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

/*function foo(n) {
  
  console.log("function foo called with" + n);
}

foo(6);

 function foo(n){
  console.log("foo is redefined");
}

foo(7); */

var foo = function(n) {
	console.log('function foo called with ' + n);
}
foo(6);

foo = function() {
	console.log('function redefined');
}

foo(6);

//Dont use below option as well

var foo = function foo(n) {
	console.log('Function foo called agin with ' + 6);
}

foo(6);

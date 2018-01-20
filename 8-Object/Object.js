//var person = {};

var person = {
	firstName : "Vinay",
	lastName: "Shanbhag",
	play : function(toy){
		console.log('Playing with ' + toy);
	}
}; 

//console.log(typeof(person));
//console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.play);
console.log(typeof(person.firstName));
console.log(typeof(person.play));

person.lastName = 'SHANBHAG';

console.log(person.lastName);
person.play('Marbles');

person.play = function(){
	console.log('play redefined');
};

person.play();



var properties = {
	firstName : 'Jason',
	lastName :  'Johnson'
};

for (var property in properties){
	console.log(property);
}

for(var property in properties){
	person[property]= properties[property];
}

for(var property in person){
	//console.log(property);
	if(typeof(person[property])!== 'function'){
		console.log(property + '--' +  person[property]);	
	}
	
}














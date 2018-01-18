String.prototype.greet = function(name1, name2){
   
   console.log(this.toUpperCase()+ '' + name1 + ' and ' + name2);

}

var greetFriends= function(message, name1,name2){
	
	message.greet(name1,name2);
}

var str1 = 'Hello';
var str2 = 'Howdy';

'Maga How are you'.greet('Siva', 'Indresh');

greetFriends(str1, 'Vinay', 'Shruthi');
greetFriends(str2, 'Vinay', 'Shruthi');

var sampleGreet = function(name1, name2){
	console.log(this.toUpperCase()+ ' ' + name1 + ' and ' + name2);
}

sampleGreet.call('Hi ','Kunal','Prakash');
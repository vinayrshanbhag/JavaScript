


var greet = function(name1, name2){
    console.log(this.toUpperCase() + name1 + " " + name2);

}

var names = ['Jack', 'Jill']
//greet.call('Hello', 'Jack', 'Jill');

greet.call('Hello', names[0], names[1]);

greet.apply('Hello', names);
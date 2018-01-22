var sam = {
	
	first: "Vinay",
	last: "Shanbhag"
};

// console.log(sam.first);
// console.log(sam["last"]);

var work = {
	position : "Programmer"
};

sam.__proto__ = work;

for(var property in sam){
	console.log(property + '--' + sam[property] + sam.hasOwnProperty(property));
}
	
	

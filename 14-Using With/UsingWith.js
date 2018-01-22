var sam = {
	
	first: "Vinay",
	last: "Shanbhag",
	work: function(){
		console.log("Working....");
	},
	play: function(){
		console.log("Playing...");
	},
	
	foo: function(){
		console.log("Function foo of sam...");
	},
	
};

 
with(sam){
	work();
	play();
	foo();
}
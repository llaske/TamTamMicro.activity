
// Main app class
enyo.kind({
	name: "TamTam.App",
	kind: enyo.Control,
	published: {activity: null},
	components: [
	],
	
	// Constructor
	create: function() {
		this.inherited(arguments);
		this.init();
	},
	
	// Draw screen
	init: function() {
console.log("Hello Enyo World !");
	}	
});

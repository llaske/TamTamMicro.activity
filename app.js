
// Main app class
enyo.kind({
	name: "TamTam.App",
	kind: enyo.Control,
	published: {activity: null},
	components: [
		{name: "box", components: [
		]}	
	],
	
	// Constructor
	create: function() {
		this.inherited(arguments);
		this.init();
	},
	
	// Draw screen
	init: function() {
		var len = TamTam.database.length;
		for(var i = 0 ; i < len ; i++ ) {
			this.$.box.createComponent(
				{ kind: "TamTam.Item", name: TamTam.database[i] },
				{ owner: this }
			).render();
		}
	}	
});

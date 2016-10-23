/* Init all the vars and call some functions */


// Give the canvas a size
resize();

// Create the client information
var client = {
	
	key: {
		left: false,
		right: false,
		up: false,
		down: false,
	},
	
	keyCode: {
		left: 65,
		right: 68,
		up: 87,
		down: 83
	},
	
	mouse: {
		down: false,
		x: 0,
		y: 0
	}
	
};



// Create the player
var player = {
	
	id: "a",
	
	x: 0,
	y: 0,
	
	width: 40,
	height: 40,
	color: "red",
	
	velocity: {
		
		x: 0,
		y: 0,
		max: 7,
		min: 0.5,
		inc: 0.3,
	    friction: 0.1
	    
	},
	
	projectile: {
		
		last: 0, // Last time a projectile was shot
		speed: 20,
		delay: 0.0005, // Seconds
		duration: 0.8, // Seconds
		color: "red"
		
	}
	
};


// Create the enemy
var enemy = {
	
	id: "b",
	
	x: 100,
	y: 100,
	
	width: 40,
	height: 40,
	color: "black",
	
	velocity: {
		
		x: 0,
		y: 0,
		max: 5,
		min: 1,
		inc: 0.5,
	    friction: 0.2
		
	},
	
	projectile: {
		
		last: 0, // Last time a projectile was shot
		speed: 5,
		delay: 3, // Seconds
		duration: 3, // Seconds
		color: "red"
		
	}
	
};


// All the projectiles
var projectile = [];




// Create the canvas context
var canvas = document.getElementById("game"); // The element
var ctx = canvas.getContext("2d"); // The default context








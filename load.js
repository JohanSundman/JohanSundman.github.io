/* Init all the vars and call some functions */


// Create the client information
var client = {
	
	width: 0,
	height: 0,
	
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
	},
	
	offset: {
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
		max: 6,
		min: 0.5,
		inc: 0.4,
	    friction: 0.1
	    
	},
	
	projectile: {
		
		amount: 3, // 1, 3, 5 ... odd numbers
		offsetStartTimes: 1, // x >= 1 // NOT 0 = STACKED SHOOTS
		offsetAngle: 8, // Deg
		speed: 18,
		delay: 0.15, // Seconds
		duration: 0.4, // Seconds
		color: "blue",
		last: 0 // Last time a projectile was shot
		
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



// Give the canvas a size
resize();







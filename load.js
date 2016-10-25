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
	
	id: "playeriditis",
	
	x: 0,
	y: 0,
	
	width: 40,
	height: 40,
	color: "blue",
	
	
	health: {
		
		state: 100,
		max: 100,
		
		color: "green"
		
	},
	
	velocity: {
		
		x: 0,
		y: 0,
		max: 4,
		min: 0.5,
		inc: 0.5,
	    friction: 0.08
	    
	},
	
	projectile: {
		
		amount: 3, // 1, 3, 5 ... odd numbers
		offsetStartTimes: 1, // x >= 1 // NOT 0 = STACKED SHOOTS
		offsetAngle: 6, // Deg
		speed: 6,
		delay: 0.15, // Seconds
		duration: 0.3, // Seconds
		color: "purple",
		damage: 20,
		last: 0 // Last time a projectile was shot
		
		
	}
	
};


// The blueprint to use when creating enemies
var enemy_1 = {
	
	id: "enemy",
	
	width: 40,
	height: 40,
	color: "orange",
	
	health: {
		
		state: 100,
		max: 100,
		
		color: "red"
		
	},
	
	velocity: {
		
		x: 0,
		y: 0,
		max: 4,
		min: 0.5,
		inc: 0.2,
	    friction: 0.2
		
	},
	
	projectile: {
		
		amount: 1, // 1, 3, 5 ... odd numbers
		offsetStartTimes: 1, // x >= 1 // NOT 0 = STACKED SHOOTS
		offsetAngle: 0, // Deg
		speed: 4,
		delay: 0.8, // Seconds
		duration: 0.5, // Seconds
		color: "red",
		damage: 10,
		last: 0 // Last time a projectile was shot
		
	},
	
	instruction : {
		
		attackDist: 500
		
	}
	
};
var enemy_2 = {
	
	id: "enemy2",
	
	width: 60,
	height: 60,
	color: "yellow",
	
	health: {
		
		state: 150,
		max: 150,
		
		color: "red"
		
	},
	
	velocity: {
		
		x: 0,
		y: 0,
		max: 4,
		min: 0.5,
		inc: 0.2,
	    friction: 0.2
		
	},
	
	projectile: {
		
		amount: 20, // 1, 3, 5 ... odd numbers
		offsetStartTimes: 1, // x >= 1 // NOT 0 = STACKED SHOOTS
		offsetAngle: 18, // Deg
		speed: 1.2,
		delay: 1.0, // Seconds
		duration: 0.40, // Seconds
		color: "red",
		damage: 5,
		last: 0 // Last time a projectile was shot
		
	},
	
	instruction : {
		
		attackDist: 200
		
	}
	
};



// All the enemys
var enemy = [];


// All the projectiles
var projectile = [];




// Create the canvas context
var canvas = document.getElementById("game"); // The element
var ctx = canvas.getContext("2d"); // The default context



// Give the canvas a size
resize();







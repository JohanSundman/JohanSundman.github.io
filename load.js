/* Init all the vars and call some functions */


// Create the client information
var client = {
	
	width: 0,
	height: 0,
	
	zoom: {
		
		current: 1,
		max: 0.4,
		min: 2
		
	},
	
	stat: {
		
		currentKills: 0,
		
		sessionKills: 0,
		sessionMax: 0,
		
	},
	
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
	},
	
	background: {
		color: "#ffffff",
		line_amount: 6,
		line_color: "#cccccc"
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
		max: 12,
		min: 2.1,
		inc: 4.2,
	    friction: 2.0
	    
	},
	
	projectile: {
		
		amount: 5, // 1, 3, 5 ... odd numbers
		offsetStartTimes: 1, // x >= 1 // NOT 0 = STACKED SHOOTS
		offsetAngle: 4, // Deg
		speed: 16,
		delay: 0.15, // Seconds
		duration: 0.42, // Seconds
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
		inc: 0.15,
	    friction: 0.04
		
	},
	
	projectile: {
		
		amount: 2, // 1, 3, 5 ... odd numbers
		offsetStartTimes: 1, // x >= 1 // NOT 0 = STACKED SHOOTS
		offsetAngle: 180, // Deg
		speed: 8,
		delay: 0.4, // Seconds
		duration: 1, // Seconds
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
		inc: 0.1,
	    friction: 0.03
		
	},
	
	projectile: {
		
		amount: 10, // 1, 3, 5 ... odd numbers
		offsetStartTimes: 1, // x >= 1 // NOT 0 = STACKED SHOOTS
		offsetAngle: 18, // Deg
		speed: 6,
		delay: 0.4, // Seconds
		duration: 0.5, // Seconds
		color: "red",
		damage: 5,
		last: 0 // Last time a projectile was shot
		
	},
	
	instruction : {
		
		attackDist: 300
		
	}
	
};

var enemy_3 = {
	
	id: "enemy3",
	
	width: 20,
	height: 20,
	color: "grey",
	
	health: {
		
		state: 40,
		max: 40,
		
		color: "red"
		
	},
	
	velocity: {
		
		x: 0,
		y: 0,
		max: 4,
		min: 0.5,
		inc: 0.05,
	    friction: 0.02
		
	},
	
	projectile: {
		
		amount: 1, // 1, 3, 5 ... odd numbers
		offsetStartTimes: 1, // x >= 1 // NOT 0 = STACKED SHOOTS
		offsetAngle: 0, // Deg
		speed: 2,
		delay: 0.4, // Seconds
		duration: 5, // Seconds
		color: "black",
		damage: 3,
		last: 0 // Last time a projectile was shot
		
	},
	
	instruction : {
		
		attackDist: 700
		
	}
	
};



// All the enemys
var enemy = [];


// All the projectiles
var projectile = [];




// Create the canvas context
var canvas = document.getElementById("game"); // The element
var ctx = canvas.getContext("2d"); // The default context
var textCanvas = document.getElementById("textCanvas");
var textLayer = textCanvas.getContext("2d"); // The text context



// Give the canvas a size
resize();







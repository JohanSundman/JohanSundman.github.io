function ignite(){
	/* Will launch the game when called */
	
	// Start the rendering and the physics
	setInterval(render, 1000 / 60);
	
	// Start the journey ( Level handling )
	setInterval(journey, 1000 * 1); // Check the game level every second
}


function journey(){
	const delay = 4; // Seconds
	
	// Validate level change
	if(!game.safety){ // Is not in safety mode
		if(enemy.length !== 0){ // Enemies still left
			return false;
		}
	}
	else{ // Is in safety mode
		return false;
	}
	
	
	
	/* -- Launch the next level -- */
	game.safety = true; // Make it stop checking for next level during pause/safety time
	enemy = []; // Empty the enemy array
	game.level++; // Increment the level
	
	drawText("Level " + game.level, "red", (delay / 3) * 2); // Draw the text (delayed disappearing text)
	
	setTimeout(level_spawn, delay * 1000, // Spawn the enemies (delayed)
				game.level, // Which level to spawn
				game.bossFactor, // Boss rarity 
				"this just goes on and on"
				);
}

/*-- Temporary spawning solution --*/
function level_spawn(level, bossFactorial){
	game.safety = false; // Is not in safety mode anymore
	
	// Check for boss battle
	if(level == factorise(level, bossFactorial)){ // If this level is a boss level
		var bossLvl = level / bossFactorial; // Calculate the boss level
		level_boss(bossLvl); // Spawn the boss
		
		return true;
	}
	
	/* MATH algorithm to spawn enemies */
	var amount = 2*Math.sqrt(Math.pow(level, 0.8)); // Calculate the amount of enemies with | 2\sqrt{x^{0.8}} | view it on https://www.desmos.com/calculator
	var amount = Math.abs(Math.round(amount)); // Make it a whole number and possetive

	// Spawn the enemies now
	for(var i = 0; i < amount; i++){
		spawn_enemy( player.x + (Math.random() * 2000 - 1000) , player.y + (Math.random() * 1000 - 500) , enemy_1); // Enemy_1, enemy_2, enemy_3
	}
}

function level_boss(bossNum){
	
	drawText("                         boss nr." + bossNum, "red");
	console.log("This is a boss level! Every " + game.bossFactor + " is a boss level and this is the boss number " + bossNum + "!"); // -----------
	
}
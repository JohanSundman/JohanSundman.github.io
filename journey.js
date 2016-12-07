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
	setTimeout(spawn, delay * 1000, "First parameter", "second parameter", "this just goes on and on"); // Spawn the enemies (delayed)
	
}

/*-- Temporary spawning solution --*/
function spawn(){
	game.safety = false; // Is not in safety mode anymore
	
	spawn_enemy( player.x + (Math.random() * 2000 - 1000) , player.y + (Math.random() * 1000 - 500) , enemy_1);
	spawn_enemy( player.x + (Math.random() * 2000 - 1000) , player.y + (Math.random() * 1000 - 500) , enemy_2);
	spawn_enemy( player.x + (Math.random() * 2000 - 1000) , player.y + (Math.random() * 1000 - 500) , enemy_3);
}
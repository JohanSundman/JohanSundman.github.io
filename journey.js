function ignite(){
	// Will launch the game when called
	
	
	// Start the rendering and the physics
	setInterval(render, 1000 / 60);
	
	
	// Start the journey ( Level handling )
	journey();
	
}


function journey(){
	
	// Increment the level, spawn enemies, bosses and draw a text before each round
	
	
	// Message: text=string, color=string, duration=int, fade=bool
	drawText("First level", "red", 3);
	//game.level
	setInterval(spawn, 1000 * 5); // Will spawn every 5 seconds
	
	
}

/*-- Temporary spawning solution --*/
function spawn(){
	spawn_enemy( player.x + (Math.random() * 2000 - 1000) , player.y + (Math.random() * 1000 - 500) , enemy_1);
	spawn_enemy( player.x + (Math.random() * 2000 - 1000) , player.y + (Math.random() * 1000 - 500) , enemy_2);
	spawn_enemy( player.x + (Math.random() * 2000 - 1000) , player.y + (Math.random() * 1000 - 500) , enemy_3);
}
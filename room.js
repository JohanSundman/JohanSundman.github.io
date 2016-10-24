// Decide when to change room etc..

function player_dead(){
	
	// When the player dies
	player.x = 0;
	player.y = 0;
	player.velocity.current = 0;
	player.health = 100;
	
	// Get rid of the enemies
	enemy = []; // empty array
	
}
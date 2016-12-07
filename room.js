// Decide when to change room etc..

function player_dead(){
	
	// Reset the level
	game.level = 0;
	game.safety = false;
	
	// When the player dies
	player.x = 0;
	player.y = 0;
	player.velocity.current = 0;
	player.health.state = 100;
	
	// Kills
	if(client.stat.sessionKills < client.stat.currentKills){ client.stat.sessionKills = client.stat.currentKills; } // If current is more then session make it to session
	client.stat.currentKills = 0;
	
	// Get rid of the enemies and projectiles
	enemy = []; // Empty array
	projectile = []; // Empty array
}
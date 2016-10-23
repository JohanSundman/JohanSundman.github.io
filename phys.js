
function phys_player(){
	
	var incX = true, incY = true;
	
	// Calc the player velocity based on input
	if(client.key.left && player.velocity.x > -player.velocity.max)       player.velocity.x -= player.velocity.inc;
	else if(client.key.right && player.velocity.x < player.velocity.max)  player.velocity.x += player.velocity.inc;
	if(client.key.up && player.velocity.y > -player.velocity.max)         player.velocity.y -= player.velocity.inc;
	else if(client.key.down && player.velocity.y < player.velocity.max)   player.velocity.y += player.velocity.inc;
	
	// Calculate player velocity based on friction
	if(player.velocity.x >= 0)  player.velocity.x -= player.velocity.friction;
	else                        player.velocity.x += player.velocity.friction;
	if(player.velocity.y >= 0)  player.velocity.y -= player.velocity.friction;
	else                        player.velocity.y += player.velocity.friction;
	
	// Make the player stand still if velocity too low
	if(Math.abs(player.velocity.x) < player.velocity.min) incX = false;
	if(Math.abs(player.velocity.y) < player.velocity.min) incY = false;
	
	
	// Apply the player velocity to the player position
	if(incX)player.x += player.velocity.x;
	if(incY)player.y += player.velocity.y;

}


function phys_projectile(){
	
	// Get the time
	var d = new Date();
    var t = d.getTime();
	
	// Remove indexes
	var removeIndex = []
	
	// Loop through all the projectiles
	for(var i = 0; i < projectile.length; i++){
		
		// Check if it should be removed now
		if(projectile[i].ending <= t){
			// It's past the removal time
			
			removeIndex.push(i); // Add the index to an array
			continue; // Next obj
		}
		
	}
	
	// Loop through the removeIndex and remove all the unwanted projectiles
	for(var i = 0; i < removeIndex.length; i++){
		
		// Remove the 
		projectile.splice(removeIndex[i] - i, 1);
		
	}
	
	
	
	/* Move the projectile acording to it's coordinate */
	for(var i = 0; i < projectile.length; i++){

		// Increment the bullet position
		projectile[i].x += projectile[i].xInc;
		projectile[i].y += projectile[i].yInc;
	
	}
	
}





function phys(){
	
	// The players physics
    phys_player();
	
	// Physics for the projectiles
	phys_projectile();
	
	// Check if it should create projectile
	if(client.mouse.down){ create_player_projectile() }
}

// 120 tick physics
setInterval(phys, 1000 / 120);
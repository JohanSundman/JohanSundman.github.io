
function generate_projectile(x, y, angle, amount, offsetAngle, offsetStartTimes, speed, damage, ownerId, creationTime, endTime, color){

    var projectilePos = offsetStartTimes; // Higher than 0
	// Create multiple shoots
	for(var i = 0; i < amount; i++){

		// The offset in rad
		var offset = 0;
		if(i !== 0){
			// Make the offset!
			if(i/2 === Math.floor(i/2)){
				// Even numbers
				offset = -offsetAngle * projectilePos;
				projectilePos++; // increment the pos| Since both the even and uneven has been added now
			}
			else{
				// Uneven numbers
				offset = offsetAngle * projectilePos;
			}
			
		}
		
		
	    /* - Calculate the x and y per tick! - */
	    var xInc = 0;
	    var yInc = 0;
	    
	    // Calculate the x and y increments |  using speed(hypotenuse) and the angle the click was in
	    xInc = speed * Math.cos(angle + offset);
	    yInc = speed * Math.sin(angle + offset);
	    
	    
	    // The projectile object
	    var newProjectile = {
	    	
	    	id: ownerId,
	    	created: creationTime,
	    	ending: endTime, 
	    	
	    	x: x,
	    	y: y,
	    	xInc: xInc,
	    	yInc: yInc,
	    	speed: speed,
	    	angle: angle,
	    	damage: damage,
			
	    	color: color
	    	
	    }
	    
	    
	    // Add it to the array
	    projectile.push(newProjectile);
	}
}





function create_player_projectile(){
	// Create a projectile
	
	// Get the time
	var d = new Date();
    var t = d.getTime(); // Time
	
	// Get mouse position
	var x = client.mouse.x;
	var y = client.mouse.y;

	// Call projectile generator IF the delay time has passed since last time
	if(t - (player.projectile.delay * 1000) > player.projectile.last){ // Current T(ms) - delay(ms) > last time shoot
		
		// Update the time last shoot
		player.projectile.last = t;
		
		
		// Get the angle(rad) the mouse is i
		var angle = rad_angle(player.x + (player.width / 2) - client.offset.x, player.y + (player.height / 2) - client.offset.y,  x, y);

		// Create a projectile
		generate_projectile(player.x + player.width / 2, player.y + player.height / 2, angle, player.projectile.amount, deg2rad(player.projectile.offsetAngle), player.projectile.offsetStartTimes, player.projectile.speed, player.projectile.damage, player.id, t, t + player.projectile.duration * 1000, player.projectile.color);

	}	
}



function create_enemy_projectile(instance){
	// Create a projectile
	
	// Get the time
	var d = new Date();
    var t = d.getTime(); // Time
	
	// Call projectile generator IF the delay time has passed since last time
	if(t - (enemy[instance].projectile.delay * 1000) > enemy[instance].projectile.last){ // Current T(ms) - delay(ms) > last time shoot
		
		// Update the time last shoot
		enemy[instance].projectile.last = t;
		
		
		// Get the angle(rad) the player is in
		var angle = rad_angle(enemy[instance].x, enemy[instance].y, player.x, player.y);
        
		// Create a projectile
		generate_projectile(enemy[instance].x + (enemy[instance].width / 2), enemy[instance].y + (enemy[instance].height / 2), angle, enemy[instance].projectile.amount, deg2rad(enemy[instance].projectile.offsetAngle), enemy[instance].projectile.offsetStartTimes, enemy[instance].projectile.speed, enemy[instance].projectile.damage, enemy[instance].id, t, t + enemy[instance].projectile.duration * 1000, enemy[instance].projectile.color);

	}
}


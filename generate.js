
function generate_projectile(x, y, angle, speed, ownerId, creationTime, endTime, color){
	
	
	/* - Calculate the x and y per tick! - */
	var xInc = 0;
	var yInc = 0;
		
	// Calculate the x and y increments |  using speed(hypotenuse) and the angle the click was in
	xInc = speed * Math.cos(angle);
	yInc = speed * Math.sin(angle);
	
	
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
		
		color: color
		
	}
	
	
	// Add it to the array
	projectile.push(newProjectile);
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
		
		
		// Distance y, distance x
		var angle = rad_angle(player.x + player.width / 2, player.y + player.height / 2,  x, y)
		
		// Create a projectile
		generate_projectile(player.x + player.width / 2, player.y + player.height / 2, angle, player.projectile.speed, player.id, t, t + player.projectile.duration * 1000, player.projectile.color);

	}
	
	
	
}
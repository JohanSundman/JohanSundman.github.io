function render(){
	
	// Do the physics before rendering
	phys();
	
	// Clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	
	
	
	

	// Draw the background
	ctx.beginPath();
	ctx.strokeStyle = client.background.line_color;
	
	// Temp object for storing the usefull variables
	var temp = {
		margin: null,
		x: {
			firstLine: null
		},
		y: {
			firstLine: null
		}
	}
	// Essential variables
	temp.margin = Math.round(client.width / client.background.line_amount); // The pixel amount between each line
	temp.x.firstLine = factorise(client.offset.x, temp.margin); // Cord of first line in this frame
	temp.y.firstLine = factorise(client.offset.y, temp.margin); // Cord of first line in this frame
	
	// The vertical ones
	//for(var i = 0; i < client.background.line_amount; i++){
	for(var i = 0; temp.margin * i < client.width; i++){
		var thisX = temp.x.firstLine + (i * temp.margin) - client.offset.x;
		
		// Horizontal line (draw up to down)
		ctx.moveTo(thisX, 0);
	    ctx.lineTo(thisX, client.height);
		
	}
	// The horizontal ones
	//for(var i = 0; i < client.background.line_amount; i++){
	for(var i = 0; temp.margin * i < client.height; i++){
		var thisY = temp.y.firstLine + (i * temp.margin) - client.offset.y;
		
		// Horizontal line (draw up to down)
		ctx.moveTo(0, thisY);
	    ctx.lineTo(client.width, thisY);
		
	}
	ctx.stroke(); // Draw the lines
	
	
	
	
	
	
	// Draw all the projectiles
	for(var i = 0; i < projectile.length; i++){
		
		ctx.beginPath();
		ctx.fillStyle = projectile[i].color;
	    ctx.arc(projectile[i].x - client.offset.x, projectile[i].y - client.offset.y, 6, 0, 2 * Math.PI);
	    ctx.fill();
		
	}
	
	
	
	// Draw all the enemies
	for(var i = 0; i < enemy.length; i++){
	    ctx.beginPath();
		    // Enemy
	        ctx.fillStyle = enemy[i].color;
	        ctx.fillRect(enemy[i].x - client.offset.x, enemy[i].y - client.offset.y, enemy[i].width, enemy[i].height);
		ctx.fill();
	    ctx.beginPath();
		    // HP
			ctx.fillStyle = enemy[i].health.color;
	        ctx.fillRect(enemy[i].x - client.offset.x, enemy[i].y - client.offset.y + enemy[i].height + enemy[i].height / 10, enemy[i].width * (enemy[i].health.state / enemy[i].health.max), enemy[i].height / 10);
	    ctx.fill();
	}
	
	
	// Draw the player
	ctx.beginPath();
	    // Player
	    ctx.fillStyle = player.color;
	    ctx.fillRect(player.x - client.offset.x , player.y - client.offset.y, player.width, player.height);
	ctx.fill();
	ctx.beginPath();
	    // HP
	    ctx.fillStyle = player.health.color;
	    ctx.fillRect(player.x - client.offset.x, player.y - client.offset.y + player.height + player.height / 10, player.width * (player.health.state / player.health.max), player.height / 10);
	ctx.fill();
	
	
	
	
	// The kills
	ctx.font = "26px Arial";
    ctx.strokeText("Kills: " + client.stat.currentKills, 4, client.height - 8);
	
}


setInterval(render, 1000 / 60);
function render(){
	// Clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	
	// Draw the player
	ctx.beginPath();
	ctx.fillRect(player.x, player.y, player.width, player.height);
	ctx.fillStyle = player.color;
	ctx.fill();
	
	
	// Draw the enemy
	ctx.beginPath();
	ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
	ctx.fillStyle = enemy.color;
	ctx.fill();
	
	
	// Draw all the projectiles
	for(var i = 0; i < projectile.length; i++){
		
		ctx.beginPath();
	    ctx.arc(projectile[i].x, projectile[i].y, 8, 0, 2 * Math.PI);
	    ctx.fillStyle = projectile[i].color;
	    ctx.fill();
		
	}
	
}


setInterval(render, 1000 / 60);
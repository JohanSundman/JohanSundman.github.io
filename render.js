function render(){
	
	// Clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);


	// Draw the player
	ctx.beginPath();
	ctx.fillStyle = player.color;
	ctx.fillRect(player.x - client.offset.x , player.y - client.offset.y, player.width, player.height);
	ctx.fillStyle = player.color;
	ctx.fill();
	
	
	// Draw the enemy
	ctx.beginPath();
	ctx.fillStyle = enemy.color;
	ctx.fillRect(enemy.x - client.offset.x, enemy.y - client.offset.y, enemy.width, enemy.height);
	ctx.fill();
	
	
	// Draw all the projectiles
	for(var i = 0; i < projectile.length; i++){
		
		ctx.beginPath();
		ctx.fillStyle = projectile[i].color;
	    ctx.arc(projectile[i].x - client.offset.x, projectile[i].y - client.offset.y, 8, 0, 2 * Math.PI);
	    ctx.fill();
		
	}
	
}


setInterval(render, 1000 / 60);
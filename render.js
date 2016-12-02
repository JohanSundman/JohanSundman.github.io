function render(){
	
	// Clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);


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
	
	
	// Draw all the projectiles
	for(var i = 0; i < projectile.length; i++){
		
		ctx.beginPath();
		ctx.fillStyle = projectile[i].color;
	    ctx.arc(projectile[i].x - client.offset.x, projectile[i].y - client.offset.y, 6, 0, 2 * Math.PI);
	    ctx.fill();
		
	}
	
}


setInterval(render, 1000 / 60);
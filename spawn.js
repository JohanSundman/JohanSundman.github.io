
function spawn_enemy( x, y, blueprint){
	
	
	// Dublicate the blueprint object
	var newEnemy = cloneObject(blueprint);
	newEnemy.x = x;
	newEnemy.y = y;
	
	
	// Add it to the array
	enemy.push(newEnemy);
	
}





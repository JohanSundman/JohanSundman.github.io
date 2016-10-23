function deg_angle(x1, y1, x2, y2){
	
	// Get the angle (radians)
	var angle = Math.atan2(y2 - y1, x2 - x1)
	
	// Convert to degs
	angle *= 180 / Math.PI;
	
	return angle;
}

function rad_angle(x1, y1, x2, y2){
	
	// Get the angle (radians)
	var angle = Math.atan2(y2 - y1, x2 - x1)
	
	return angle;
}
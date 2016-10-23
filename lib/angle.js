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



function deg2rad(deg){
	var rad = deg / (180 / Math.PI);
	return rad;
}

function rad2deg(rad){
	var deg = rad * (180 / Math.PI);
	return deg
}
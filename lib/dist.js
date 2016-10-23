// Calculate the distance
function dist(x1, y1, x2, y2){
	var d, dx, dy; // distances

    // Calculate the distance- x/y
    dx = Math.abs( x1 - x2 );
	dy = Math.abs( y1 - y2 );
	
	// Calc the hypotenuse = dist
	d = Math.sqrt( Math.pow(dx,2) + Math.pow(dy,2)  ); // d = sqrt( dx^2 + dy^2 )
	
	// Return the calculated distance
	return d;
}
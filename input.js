// Decide the input
function keyDown(e){
	switch(e.keyCode){
        case client.keyCode.left:
            client.key.left = true;
            break;
        case client.keyCode.up:
            client.key.up = true;
            break;
        case client.keyCode.right:
            client.key.right = true;
            break;
        case client.keyCode.down:
            client.key.down = true;
            break;
    }
}


function keyUp(e){
	switch(e.keyCode){
        case client.keyCode.left:
            client.key.left = false;
            break;
        case client.keyCode.up:
            client.key.up = false;
            break;
        case client.keyCode.right:
            client.key.right = false;
            break;
        case client.keyCode.down:
            client.key.down = false;
            break;
    }
}




function click(e){
	
	// Get the time
	var d = new Date();
    var t = d.getTime(); // Time
	
	// Get mouse position
	var x = e.clientX;
	var y = e.clientY;
	
}











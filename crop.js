// Handle resizing

function resize(){

	var w = window.innerWidth;
	var h = window.innerHeight;
	var el = document.getElementById("game");
	// Call the cropping
	crop(w, h, el);
	
	// Update the client with the size
	if(typeof client == "undefined"){ return;}
	client.width = w;
	client.height = h;
}


function crop(w, h, el){
	// Width, Height, Element
	var offset = 0;
	el.width = w - offset;
	el.height = h - offset;
}
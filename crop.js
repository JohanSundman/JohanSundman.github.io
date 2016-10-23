// Handle resizing

function resize(){

	var w = window.innerWidth;
	var h = window.innerHeight;
	var el = document.getElementById("game");
	// Call the cropping
	crop(w, h, el);
}


function crop(w, h, el){
	// Width, Height, Element
	var offset = 17;
	el.width = w - offset;
	el.height = h - offset;
}
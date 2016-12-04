// Add a resize event
window.onresize = resize;

// KeyPress
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

// Click event
document.addEventListener("click", click);
document.addEventListener("mousedown", function(e){
	client.mouse.down = true;
});
document.addEventListener("mouseup", function(e){
    client.mouse.down = false;
});
document.addEventListener('mousemove', function(e) {
    client.mouse.x = e.clientX;
	client.mouse.y = e.clientY;
}, false);
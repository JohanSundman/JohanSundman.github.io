// Add a resize event
window.onresize = resize;

// KeyPress
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

// Click event
document.getElementById("game").addEventListener("click", click);
document.getElementById("game").addEventListener("mousedown", function(e){
	client.mouse.down = true;
});
document.getElementById("game").addEventListener("mouseup", function(e){
    client.mouse.down = false;
});
document.getElementById("game").addEventListener('mousemove', function(e) {
    client.mouse.x = e.clientX;
	client.mouse.y = e.clientY;
}, false);
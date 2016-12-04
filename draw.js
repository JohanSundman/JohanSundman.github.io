


	function drawText(txt = "", color = "#3C4B50", duration = 2, fade = false){
		/* 	Measure the txt with
		    --
		        textLayer.font = fontPixelSize + "px Verdana";
				textSize = textLayer.measureText("the text specified");   output: obj { width: *WIDTH* }
			--
			To test which font size would be best for the yet to be drawn text
		*/
		
		
		// Set the canvas settings
		textLayer.font = "40px Verdana"; // Text font
		textLayer.fillStyle = color; // Text color
		textLayer.textAlign = "center"; // Center text around cords
		textLayer.textBaseline = "bottom"; // Position with x cord as text bottom 
		
		// Draw the text
		textLayer.fillText(txt, canvas.width / 2, canvas.height / 3);
		
		// Set the delayed clearing
		setTimeout(function(){
			
			// Clear all the text
			textLayer.clearRect(0, 0, canvas.width, canvas.height);
			
		}, duration * 1000);
		//return textLayer.measureText(txt);
	}
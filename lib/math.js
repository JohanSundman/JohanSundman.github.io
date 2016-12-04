
// Function that makes a number divideable by a certain factor

// Simple method but not as fast as the one under this
/*
function factorise(number, factor){
	if(factor === 0){ return 0; }
	return Math.round(number / factor) * factor;
}
*/
function factorise(number, factor) {
  if(factor === 0) return 0;
  var rem = number % factor;
  number -= rem;
  return 2*rem >= factor ? number+factor : number;
}
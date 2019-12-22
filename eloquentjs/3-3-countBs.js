/*function countBs(string){
	let count = 0;
	for (var i = 0; i < string.length; i++) {
		if(string[i] == "B"){
			count++;
		}
	}
	return count;
}

function countChar(string, char){
	let count = 0;
	for (var i = 0; i < string.length; i++) {
		if(string[i] == char){
			count++;
		}
	}
	return count;
}*/

function countBs(string){
	
	function countChar(string){
		let count = 0;
		let char = "B";
		for (var i = 0; i < string.length; i++) {
			if(string[i] == char){
				count++;
			}
		}
		return count;
	}
	return countChar(string);
}



console.log(countBs("BBB"));
console.log(countBs("Bad"));
console.log(countBs("Yes"));
/*
console.log(countChar("BBB", "B"));
console.log(countChar("Bad", "a"));
console.log(countChar("Yes", "e"));
*/
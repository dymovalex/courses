let num = 100;
//Выводит Fizz - если кратно 3, Buzz - если 5
/*for (var i = 1; i <= num; i++) {
	if(!(i % 3)) {
		console.log("Fizz");
	} else if(!(i % 5)) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}*/

//Выводит Fizz - если кратно 3, Buzz - если 5, FizzBuzz - если и 3, и 5
for (var i = 1; i <= num; i++) {
	if(!(i % 3)){
		if(!(i % 5)){
			console.log("FizzBuzz");
		}
		console.log("Fizz");
	} else if(!(i % 5)) {
		console.log("Buzz");
	} else console.log(i);
}
function reduceArrays(arr) {
	return arr.reduce((a, b) => {return a.concat(b)});
}

console.log(reduceArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
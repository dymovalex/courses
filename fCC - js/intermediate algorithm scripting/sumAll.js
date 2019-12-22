function sumAll(arr){
	let sortFunc = function(a, b){
		return a - b;
	};
	arr.sort(sortFunc);
	let sum = 0;
	for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
		sum += i;
	}
	return sum;
}

console.log(sumAll([10, 5]));
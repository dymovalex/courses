function maxValue(data){
	let arr = [...data];
	let max = arr[0];
	if(arr.length === 1){
		return arr[0];
	}
	arr.shift();
	return max = max > maxValue(arr) ? max : maxValue(arr);
}

let array = [1, 2, 3, 4, 5, 6, 7, 999, 1111, 25, 45, 1900, 0, 5555, 1, 2, 3, 55555, 1, 2, 55555];

console.log(maxValue(array));
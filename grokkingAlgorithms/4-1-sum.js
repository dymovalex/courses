function sum(data) {
	let arr = [...data];
	let res = 0;
	if(arr.length === 0){
		return 0;
	}
	return res = arr.shift() + sum(arr);
}

let array = [1, 2, 3, 4, 5, 6, 7, 999, 1111, 25, 45, 1900, 0, 5555, 1, 2, 3, 55555, 1, 2, 55555];

console.log(sum(array));
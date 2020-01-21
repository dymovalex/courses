function count(data){
	let arr = [...data];
	let res = 0;
	if(arr.length === 0){
		return 0;
	}
	arr.shift();
	return res = count(arr) + 1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 999, 1111, 25, 45, 1900, 0, 5555, 1, 2, 3, 55555, 1, 2, 55555];

console.log(count(array));
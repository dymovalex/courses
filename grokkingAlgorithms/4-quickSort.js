function quickSort (data) {
	let arr = [...data];
	if(arr.length < 2){
		return arr;
	} else {
		let pivot = arr[0]; //опорный элемент
		//let pivot = arr[Math.floor(Math.random() * arr.length)];
		let less = [];
		let greater = [];
		for(let i = 1; i < arr.length; i++){
			if(arr[i] > pivot){
				greater.push(arr[i]);
			} else {
				less.push(arr[i]);
			}
		}
		return [...quickSort(less), pivot, ...quickSort(greater)];
	}
}

console.log(quickSort([10, 5, 2, 3]));
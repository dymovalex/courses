function reverseArray(array){
	let newArray = [];
	for (var i = 0; i < array.length; i++) {
		newArray[i] = array[array.length - 1 - i];
	}
	return newArray;
}

function reverseArrayInPlace(array){
	let ind = 0;
	for (var i = 0; i < Math.floor(array.length/2); i++) {
		ind = array[i];
		array[i] = array[array.length -1 - i];
		array[array.length -1 - i] = ind;
	}
	return array;
}

let data1 = [0, 1, 2, 3, 4, 5];
let newData1 = reverseArray(data1);

console.log(data1);
console.log(newData1);

let data2 = [0, 1, 2, 3, 4, 5, 6];
console.log(data2);

let newData2 = reverseArrayInPlace(data2);
console.log(data2);

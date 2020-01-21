function binarySearchRecursion(data, element) {
	let arr = [...data];
	let mid = Math.floor(arr.length / 2);
	if(arr[mid] === element){
		return arr[mid];
	}
	if(arr[mid] > element){
		return binarySearchRecursion(arr.slice(0, mid), element);
	} else {
		return binarySearchRecursion(arr.slice(mid + 1), element);
	}
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 99];
const elementForSearch = 10;

console.log(`The seeking element is ${binarySearchRecursion(data, elementForSearch)}`);
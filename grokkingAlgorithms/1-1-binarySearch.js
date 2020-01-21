function binarySearch(arr, element) {
	let low = 0;
	let high = arr.length;
	while(low <= high){
		let mid = Math.floor((high + low) / 2);
		console.count('Guesses');
		if(arr[mid] === element){
			return mid;
		}
		if(arr[mid] > element){
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return null;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const elementForSearch = 15;

console.log(`The seeking element is ${binarySearch(data, elementForSearch)}`);
	
function diffArray(arr1, arr2){
	var newArr = [];
/*	for (var i = 0; i < arr1.length; i++) {
		if(arr2.indexOf(arr1[i]) == -1){
			newArr.push(arr1[i]);
		} else {
			do {
				arr2 = arr2.splice(arr2.indexOf(arr1[i]), 1);
			} while (arr2.indexOf(arr1[i]) == -1);
		}
	}
	return newArr.concat(arr2);*/
	return arr1.concat(arr2).filter(i => !arr1.includes(i) || !arr2.includes(i));
}

console.log(diffArray([10, 5, 4], [3, 5, 4, 5]));
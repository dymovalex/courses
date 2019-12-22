function destroyer(arr, ...nums){
	for (let i = 0; i < nums.length; i++) {
		if(arr.indexOf(nums[i]) !== -1){
			do{
				arr.splice(arr.indexOf(nums[i]), 1);
			} while (arr.indexOf(nums[i]) !== -1);
		}
	}
	return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3, 4], 2, 3));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
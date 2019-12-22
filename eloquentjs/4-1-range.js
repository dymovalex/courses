function range(start, end, step = 1){
	let scope = [];
	if(step>0){
		for (var i = start; i <= end; i+=step) {
		scope.push(i);
		}
		return scope;
	} else {
		for (var i = start; i >= end; i+=step) {
		scope.push(i);
		}
		return scope;
	}
}

console.log(range(8, 1, 2));
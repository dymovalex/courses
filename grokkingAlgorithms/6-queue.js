function queueLogger (graph) {
	let searchQueue = [];
	let searched = [];
	for(let element of graph){
		searchQueue.push(element[0]);
	}
	console.log('Starting queue:');
	console.log(searchQueue);
	while(searchQueue.length !== 0){
		let currentElement = searchQueue.shift();
		if(!searched.includes(currentElement)){
			if(search(currentElement)){
				console.log(`${currentElement} is the seeking value!`);
				return true;
			}
			else {
				if(graph.has(currentElement)){
					searched.push(currentElement);
					searchQueue.push(...graph.get(currentElement));
					console.log(searchQueue);
				} else {
					console.log(searchQueue);
				}
				
			}
		} else {
			console.log(`${currentElement} is already in searched values`);
			console.log(searchQueue);
		}
	}
	console.log(`There is no the seeking value!`);
	return false;

}

function search(element){
	if(element === 42) return true;
	return false;
}


const graph = new Map();
graph.set(1, [1, 11, 12]);
graph.set(2, [20, 2, 22]);
graph.set(3, [30, 31, 3]);
graph.set(4, [40, 41, 42]);

//console.log(graph);
console.log(queueLogger(graph));


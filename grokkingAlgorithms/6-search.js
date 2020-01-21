/*function search (obj) {
	let searchQueue = [];
	searchQueue.push(...Object.keys(obj));
	//console.log(searchQueue);
	let searched = [];
	while (searchQueue) {
		let current = searchQueue.shift();
		if(!searched.includes(current)){
			if(personIsSeller(current)){
				console.log(`${current} is a mango seller!`);
				return true;
			} else {
				if(obj.hasOwnProperty(current)){
					searchQueue.push(...obj[current[1]]);
					console.log(searchQueue);
					searched.push(current);
					console.log(searched);
				}
			}
		}
	}
	console.log(`There is no a mango seller!`);
	return false;
}

function personIsSeller (person){
	if (person === 'steven') return true;
	return false;
}

const graph = {
	'you': ['alice', 'bob', 'claire'],
	'bob': ['anuj', 'peggy'],
	'alice': ['peggy'],
	'claire': ['thom', 'jonny'],
	'anuj': [],
	'peggy': [],
	'thom': [],
	'jonny': ['steven'],
};


//console.log(graph);
//console.log(search(graph));

console.log(search(graph));
*/

function search (graph) {
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
			if(personIsSeller(currentElement)){
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

function personIsSeller (person){
	if (person === 'tho') return true;
	return false;
}

const graph = new Map();
graph.set('you', ['alice', 'bob', 'claire']);
graph.set('bob', ['anuj', 'peggy']);
graph.set('alice', ['peggy']);
graph.set('claire', ['thom', 'jonny']);
graph.set('anuj', []);
graph.set('peggy', []);
graph.set('thom', []);
graph.set('jonny', []);

console.log(search(graph));
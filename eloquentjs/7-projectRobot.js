const roads = [
	"Alice's House-Bob's House", "Alice's House-Warehouse",
	"Alice's House-Post Office", "Bob's House-Church",
	"Daria's House-Ernie's House", "Daria's House-Church",
	"Ernie's House-Greta's House", "Greta's House-Farm",
	"Greta's House-Store", "Market-Farm",
	"Market-Post Office", "Market-Store",
	"Market-Church", "Store-Church"
];

const mailRoute = [
"Alice's House", "Warehouse", "Alice's House", "Bob's House",
"Church", "Daria's House", "Ernie's House",
"Greta's House", "Store", "Greta's House", "Farm",
"Market", "Post Office"
];

function buildGraph(edges) {
	let graph = Object.create(null); // create empty object
	function addEdge(from, to) {
		if (graph[from] == null) {
			graph[from] = [to];
		} else {
			graph[from].push(to);
		}
	}
	for (let [from, to] of edges.map(r => r.split("-"))) {
		addEdge(from, to);
		addEdge(to, from);
	}
	return graph;
}
///////////////////////////////////////////////////////////////////////////////////////
	/*
	Все действия выполняются в методе move. Сначала он проверяет, существует ли дорога из текущего места в пункт назначения,
	и если нет, то возвращает старое состояние, поскольку это недопустимый ход. Затем метод создает новое состояние с
	пунктом назначения в качестве нового местоположения робота. Но для этого также необходимо создать новое множество
	посылок — те посылки, которые несет робот (находящиеся в текущем местоположении робота), необходимо переместить на
	новое место. Кроме того, посылки, адресованные данному месту, должны быть доставлены — другими словами, удалены из
	множества недоставленных посылок. Перемещения выполняются посредством вызова map, а доставка — с помощью вызова
	filter. При перемещениях объекты посылок не изменяются, а создаются заново.
	Метод move создает новое состояние деревни, при этом не изменяя старое.
	*/
///////////////////////////////////////////////////////////////////////////////////////
class VillageState { //Состояние деревни
	constructor(place, parcels) {
		this.place = place; //место нахождения робота
		this.parcels = parcels; //массив посылок в виде:
								//{place: "где посылка находится в данный момент",
								// address: "куда её необходимо отправить"}
	}
	move(destination) { // функция перемещения в точку destination
		if (!roadGraph[this.place].includes(destination)) { //проверяем, есть ли вообще такое место в деревне
			console.log(`There is no such a place in Village like ${destination}`);
			return this; //если нет, то возвращаем исходный объект
		} else { //если такое место имеется
			let parcels = this.parcels // берём посылки
				.map(parcel => { // для каждой посылки:
					if (parcel.place != this.place) return parcel; //если робот не находится в том месте,
																	//где находится посылка, то возвращаем её
																	//обратно в посылки
					return {place: destination, address: parcel.address}; //если робот находится там, где посылка,
																			// то переносим её на место destination
				})
				.filter(parcel => parcel.place != parcel.address); //если текущее место и место назначения посылки
																	// совпадают, то удаляем их из массива
			return new VillageState(destination, parcels); //возвращаем новое состояние деревни
		}
	}
}

const roadGraph = buildGraph(roads);
///////////////////////////////////////////////////////////////////////////////////////
	/*
	console.log(roadGraph);

	let first = new VillageState("Post Office", [{place: "Post Office", address: "Alice's House"}]);
								//робот находится на Почте
								//посылка лежит на Почте, адресат - Дом Алисы
	let next = first.move("Alice's House");
	//logging
		console.log(next.place);
		// → Дом Алисы
		console.log(next.parcels);
		// → []
		console.log(first.place);
		// → Почта
		console.log(first.parcels);
	*/
///////////////////////////////////////////////////////////////////////////////////////
function randomPick(array) {
	let choice = Math.floor(Math.random() * array.length);
	return array[choice];
}

VillageState.random = function(parcelCount = 5) {
	let parcels = [];
	for (let i = 0; i < parcelCount; i++) {
		let address = randomPick(Object.keys(roadGraph));
		let place;
		do {
			place = randomPick(Object.keys(roadGraph));
		} while (place == address);
		parcels.push({place, address});
	}
	return new VillageState("Post Office", parcels);
}

function randomRobot(state) {
	return {direction: randomPick(roadGraph[state.place])};
}

function runRobot(state, robot, memory) { //memory не обязательный параметр
	for (let turn = 0;; turn++) {
		if (state.parcels.length == 0) {
			console.log(`Done ${turn} steps`);
			//return turn; // для задачи сравнения эффективности двух роботов
							// в книге предлагается в качестве решения создать
							// отдельную функцию-копию countSteps,
							// без console.log, но с возвращением значения ходов
			break;
		}
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
		console.log(`Moving to ${action.direction}`);
	}
}

//runRobot(VillageState.random(), randomRobot); // не задан memory


function routeRobot(state, memory) {
	if (memory.length == 0) {
		memory = mailRoute;
	}
	return {direction: memory[0], memory: memory.slice(1)};
}

//runRobot(VillageState.random(), routeRobot, mailRoute);

function findRoute(graph, from, to) {
	let work = [{at: from, route: []}]; //Программа начинает работать с начальной точки и пустого
										//маршрута.
	// Начинаем цикл по массиву work (маршрут)
	for (let i = 0; i < work.length; i++) {
		//let {at, route} = work[i]; // запись из книги, деструктуризация
		let at = work[i].at;
		let route = work[i].route;
		for (let place of graph[at]) { // рассматриваем, куда можно дойти из точки at в городе (graph)
			if (place == to) return route.concat(place); // если это то место, куда мы собирались прийти,
														// то возвращаем маршрут
			if (!work.some(work => work.at == place)) { // если маршрут в эту точку уже был простроен,
														// то ничего не делаем
				work.push({at: place, route: route.concat(place)}); // если не было этой точки в маршруте,
																	// то добавляем в маршрут
			}
		}
	}
}


function goalOrientedRobot({place, parcels}, route) {
	if (route.length == 0) { // если в маршруте нет доступных точек, необходимо простроить этот маршрут
		let parcel = parcels[0];
		if (parcel.place != place) { // если робот находится не там, где находится посылка, то
			route = findRoute(roadGraph, place, parcel.place); // создать маршрут до места, где лежит посылка
		} else {
			route = findRoute(roadGraph, place, parcel.address); // иначе, простроить маршрут до адресата
		}
	}
	return {direction: route[0], memory: route.slice(1)}; // потом идём по точкам маршрута, отрезая по одной
															// точке от маршрута (route)
}

function lazyRobot({place, parcels}, route) {
	if (route.length == 0) {
		// Простраиваем пути к каждой посылке
		let routes = parcels.map(parcel => {
		if (parcel.place != place) {
			return {route: findRoute(roadGraph, place, parcel.place),
				pickUp: true};
		} else {
			return {route: findRoute(roadGraph, place, parcel.address),
				pickUp: false};
		}
		});
		// Определяем приоритет, который получает маршрут
		// Длина маршрута считается отрицательно
		// Маршруты, на которых подбираются посылки, получает небольшой бонус
		function score({route, pickUp}) {
			return (pickUp ? 0.5 : 0) - route.length;
		}

		route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
	}

	return {direction: route[0], memory: route.slice(1)};
}

//runRobot(VillageState.random(), goalOrientedRobot, []);
runRobot(VillageState.random(), lazyRobot, []);

/*
function compareRobots(robot1, robot2, robot3){
	let results = {};
	let res1 = [];
	let res2 = [];
	let res3 = [];
	for(let i = 1; i <= 100; i++){
		let village = VillageState.random();
		let stepsRobot1 = runRobot(village, robot1, mailRoute);
		res1.push(stepsRobot1);
		let stepsRobot2 = runRobot(village, robot2, mailRoute);
		res2.push(stepsRobot2);
		let stepsRobot3 = runRobot(village, robot3, []);
		res3.push(stepsRobot3);

	}
	return [
		res1.reduce((a, b) => a + b, 0) / 100,
		res2.reduce((a, b) => a + b, 0) / 100,
		res3.reduce((a, b) => a + b, 0) / 100
	];
}
*/
// Переделанная функция runRobot
// вместо выведения информации с помощью console.log,
// возвращает количество шагов
function countSteps(state, robot, memory) {
	for (let steps = 0;; steps++) {
		if (state.parcels.length == 0) return steps;
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
	}
}


function compareRobots(robot1, memory1, robot2, memory2){
	let total1 = 0;
	let total2 = 0;
	for(let i = 1; i <= 100; i++){
		let village = VillageState.random();
		total1 += countSteps(village, robot1, memory1);
		total2 += countSteps(village, robot2, memory2);
	}
	console.log(`Robot1 needed ${total1 / 100} steps`);
	console.log(`Robot2 needed ${total2 / 100} steps`);
}

//console.log(compareRobots(randomRobot, [], routeRobot, []));
//console.log(compareRobots(routeRobot, [], goalOrientedRobot, []));
console.log(compareRobots(goalOrientedRobot, [], lazyRobot, []));

/*
Однако его метод add должен возвращать новый экземпляр PGroup с добавленным заданным
элементом, оставляя старый экземпляр без изменений.
Аналогично delete создает новый экземпляр, в котором нет заданного
элемента.
Класс должен работать со значениями любого типа, а не только со строками. Он не должен быть
эффективным для большого количества значений.
Конструктор не должен быть частью интерфейса класса (хотя вы определенно захотите использовать
его внутри класса). Вместо этого существует
пустой экземпляр PGroup.empty, который можно применять в качестве начального значения.
Зачем нужно единственное значение PGroup.empty, если можно создать
функцию, которая бы каждый раз генерировала новый пустой словарь?
*/

class PGroup {
	constructor(members){
		this.members = members;
	}
	add (value) {
		if(this.has(value)) return this;
		return new PGroup(this.members.concat([value]));
	}
	delete (value) {
		if(!this.members.includes(value)) return this;
		return new PGroup (this.members.filter(v => v !== value));
	}
	has (value) {
		return this.members.includes(value);
	}
}

PGroup.empty = new PGroup([]);
/*
let a = PGroup.empty.add('a');
console.log(a);
let ab = a.add('b');
console.log(ab);
console.log(a);
console.log(ab.delete('a'));
console.log(ab);
console.log(ab.has('a'));
*/
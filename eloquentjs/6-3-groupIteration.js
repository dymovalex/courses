/*
Сделайте класс Group из предыдущего упражнения итерируемым. Если вы
не помните точный вид интерфейса итератора, перечитайте раздел, посвященный этому интерфейсу,
ранее в данной главе.
Если для представления членов группы вы использовали массив, не возвращайте просто итератор,
созданный путем вызова метода Symbol.iterator для массива. Это бы сработало, но оно не соответствует
цели данного упражнения.
Если ваш итератор ведет себя странно, когда группа изменяется во время
итерации, — это нормально
*/

class Group {
	constructor(){
		this.group = [];
	}
	add (obj) {
		this.group.push(obj);
		return this.group;
	}
}

class GroupIterator{
	constructor(group){
		this.group = group;
		this.index = 0;
	}
	next(){
		if(this.index < this.group.length){
			this.index++;
			return {value: this.group[this.index - 1], done: false};
		}
		return {done: true};
	}
}

Group.prototype[Symbol.iterator] = function () {
	return new GroupIterator(this);
}

const myGroup = new Group();
myGroup.add({x: 1});
myGroup.add({y: 2});
console.dir(myGroup);

for(let value of myGroup){
	console.log(value);
}


/*
for (let value of Group.from(['a', 'b', 'c'])) {
	console.log(value);
}
*/
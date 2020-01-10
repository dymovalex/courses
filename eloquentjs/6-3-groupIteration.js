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
		this.members = [];
	}
	add (obj) {
		this.members.push(obj);
		return this.members;
	}
}

class GroupIterator{
	constructor(group){
		this.group = group;
		this.index = 0;
	}
	next(){
		if(this.index < this.group.members.length){
			this.index++;
			return {value: this.group.members[this.index - 1], done: false};
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


class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return {done: true};
    } else {
      let result = {value: this.group.members[this.position],
                    done: false};
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
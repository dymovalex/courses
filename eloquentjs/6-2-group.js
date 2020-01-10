/*
Стандартная среда JavaScript предоставляет еще одну структуру данных,
которая называется Set. Подобно экземпляру Map, Set содержит коллекцию
значений. В отличие от Map класс Set не связывает с ними другие значения —
только отслеживает, какие значения являются частью множества. Значение
может входить в состав множества только один раз — попытка добавить его
снова не будет иметь никакого эффекта.
Напишите класс с именем Group (поскольку имя Set уже занято). Как и Set,
он располагает методами add, delete и has. Его конструктор создает пустую
группу, add добавляет в нее значение (но только если такого значения там
еще нет), метод delete удаляет свой аргумент из группы (если таковой там
был), а has возвращает логическое значение, указывающее, является ли его
аргумент членом группы.
Для того чтобы определить, одинаковы ли два значения, используйте оператор
=== или какой-либо его эквивалент, например indexOf.
Присвойте классу статический метод from, который принимает в качестве
аргумента итерируемый объект и создает группу, содержащую все значения,
полученные посредством перебора.
*/
// Group is an object of objects
/*
class Group {
	constructor(){
		this.group = {};
	}
	add (obj) {
		const prop = Object.keys(obj);
		if(prop.length > 1){
			return `It's not possible to push in Group more than 1 property at the time`;
		}
		if(this.group.hasOwnProperty(prop)){
			return `Value ${prop} is already in Group`;
		}
		this.group = {...this.group, ...obj};
		return this.group;
	}
	delete (obj) {
		const prop = Object.keys(obj);
		if(!this.group.hasOwnProperty(prop)){
			return `Property ${prop} doesn's exist in Group yet`;
		}
		delete this.group[prop];
		return this.group;
	}
	has (obj) {
		const prop = Object.keys(obj);
		if(!this.group.hasOwnProperty(prop)){
			return false;
		}
		return true;
	}
}
*/
// Group is an array
class Group {
	constructor(){
		this.members = [];
	}
	add (value) {
		if(!this.has(value)){
			this.members.push(value);
			return this.members;
		}
		return `The ${value} is already in the ${this.members}`;
	}
	delete (value) {
		if(this.members.includes(value)){
			return this.members = this.members.filter(v => v !== value);
		}
		return `Value ${value} doesn's exist in Group yet`;
	}
	has (value) {
		return this.members.includes(value);
	}
}
const myGroup = new Group();
//Group as an array
	console.groupCollapsed('add');
	console.log('Adding property A');
	console.log(myGroup.add('A'));
	console.log('Adding property B');
	console.warn(myGroup.add('B'));
	console.log('Adding property B second time');
	console.warn(myGroup.add('B'));
	console.groupEnd('add');

	console.groupCollapsed('delete');
	console.log('Deleting property A');
	console.log(myGroup.delete('A'));
	console.log('Deleting property A second time');
	console.warn(myGroup.delete('A'));
	console.groupEnd('delete');

	console.group('has');
	console.log('Has this Group property A?');
	console.info(myGroup.has('A'));
	console.log('Has this Group property B?');
	console.info(myGroup.has('B'));
	console.groupEnd('has');


//Group as an object
/*
	console.groupCollapsed('add');
	console.log('Adding property A');
	console.log(myGroup.add({A: 1}));
	console.log('Adding two properties B and C');
	console.warn(myGroup.add({B: 2, C: 3}));
	console.log('Adding property B');
	console.log(myGroup.add({B: 2}));
	console.log('Adding property B second time');
	console.warn(myGroup.add({B: 2}));
	console.groupEnd('add');

	console.groupCollapsed('delete');
	console.log('Deleting property A');
	console.log(myGroup.delete({A: undefined}));
	console.log('Deleting property A second time');
	console.warn(myGroup.delete({A: undefined}));
	console.groupEnd('delete');

	console.group('has');
	console.log('Has this Group property A?');
	console.info(myGroup.has({A: undefined}));
	console.log('Has this Group property B?');
	console.info(myGroup.has({B: undefined}));
	console.groupEnd('has');
*/


//Solution from book
/*
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
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
*/
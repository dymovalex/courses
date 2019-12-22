function deepEqual(param1, param2){
	if(param1 === null || param2 === null){
		return false;
	} else if(typeof param1 !== typeof param2){
		return false;
	} else if(typeof param1 !== "object" && typeof param2 !== "object"){
		return (param1 === param2);
	} else { // оба параметра - объекты
		let array1 = Object.keys(param1); //[x, y]
		let array2 = Object.keys(param2); // [x, y]
		if(array1.length !== array2.length){
			return false;
		} else {
			for (let i = 0; i < array1.length; i++) {
				if(param1.hasOwnProperty(`${array2[i]}`)){ // х
					if(!deepEqual(param1[`${array2[i]}`], param2[`${array2[i]}`])){
						return false;
					}
				} else {
					return false;
				}
				
			}
			return true;
		}
	}
//	return true;
}

/*
let objNull = null;
let num = 1;
let anotherNum = 1;
let str = "string";

console.log(deepEqual(num, str));
console.log(deepEqual(num, anotherNum));
console.log(deepEqual(num, objNull));
*/

let object1 = {x: 1, y: 2, z: {a: 1, b: 2}};
let object2 = {x: 1, y: 2, z: {a: 1, b: 2}};
//let object3 = object1;

console.log(deepEqual(object1, object2));
//console.log(deepEqual(object1, object3));
/*
Глубокое сравнение
Оператор == сравнивает объекты по их тождественности. Но иногда
желательно сравнить значения их реальных свойств.
Напишите функцию deepEqual, которая принимает два значения и
возвращает true, только если эти объекты имеют одинаковое значение
или являются объектами с одинаковыми свойствами и значения свойств
равны при сравнении с рекурсивным вызовом deepEqual.
Чтобы выяснить, нужно сравнивать значения напрямую (для этого
используйте оператор ===) или их свойства, можете использовать
оператор typeof.
Если его результатом для обоих значений является "object", то требуется
выполнить глубокое сравнение. Но вам следует принять во внимание одно
глупое исключение: исторически сложилось так, что результатом typeof
null также будет "object".
Для перебора и сравнения свойств объекта вам также пригодится функция
Object.keys

Для того чтобы узнать, какими свойствами обладает объект, можно
использовать функцию Object.keys. Если передать ей объект, то она
вернет массив
строк — имена свойств объекта.
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]
*/
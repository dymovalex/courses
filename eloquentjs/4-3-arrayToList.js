function arrayToList(array){
//Рекурсия
/*
	let obj = {};
	obj.value = array.shift();
	if(array.length >= 1){
	//	obj.value = array.shift();
		obj.rest = arrayToList(array);
	} else {
	//	obj.value = array[array.length-1]; // можно и array.shift();
		obj.rest = null;
	}
	return obj;
*/

//Цикл
	
	let obj = {value: array[0], rest: null};
	for (var i = array.length - 1; i; i--) {
		obj.value = array.pop()
		obj = {value: array[0], rest: obj};
	}
	return obj;	
}

function listToArray(list){
//Рекурсия
/*
	let result = [];
	function makeList(list){
		if(typeof list.value !== "undefined"){
			result.push(list.value);
		} else {
			return undefined;
		}
		if(list.rest == null){
			return result;
		} else {
			return makeList(list.rest);
		}
	}
	return makeList(list);
}
*/	

//Цикл

	var result = [];
	function makeList(list){
		for (let i = list; i; i = i.rest){
			if(typeof i.value !== "undefined"){
				result.push(i.value);
			} else {
				return undefined;
			}
			
		}
		return result;
	}
	return makeList(list);
}


function prepend(element, list){
	let newList = {};
	newList.value = element;
	newList.rest = list;
	return newList;
}


//Рекурсия
function nth(list, num){
	if(list.value === num){
		return list;
	} else if(list.rest === null){
		return undefined;
	} else {
		return nth(list.rest, num);
	}
}

//Цикл

function nth(list, num){
	for (var i = list; i; i = i.rest) {
		if(i.value === num){
			return i;
		} else if(i.rest === null){
			return undefined;
		}
	}
}


//Тесты

const n = {value: 1, rest: {value: 2, rest: {value: 3, rest: {value: 4, rest: null}}}};
const arr = [1, 2, 3, 4, 5, 6];
let example = arrayToList(arr);
//console.log(n);
//console.log(Object.keys(n));
//console.log(example);
//console.log(listToArray(example));
//console.log(arrayToList(arr));

let nList = prepend(0, example);
//console.log(nList);
console.log(nth(nList, 7));
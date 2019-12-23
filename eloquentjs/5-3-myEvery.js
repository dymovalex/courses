function myEvery(array, func) {
	if(array.some(a => !func(a))){
		return false;
	}
	return true;
}

/*
// С использованием цикла
function myEvery(array, func) {
	for(let element of array){
		if(!func(element)){
			return false;
		}
	}
	return true;
}
*/
/*
Для массивов существует метод every, аналогичный методу some. Этот метод возвращает true, когда заданная функция
возвращает true для каждого элемента массива. В некотором смысле some — это версия оператора || для массивов, а
метод every подобен оператору &&. Реализуйте метод every, принимающий в качестве параметров массив и предикативную
функцию. Напишите две версии: одну с использованием цикла, а вторую — с применением метода some.
*/

console.log(myEvery([1, 2, 3], a => a >= 2));
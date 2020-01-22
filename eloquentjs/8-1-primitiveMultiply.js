/*
Представьте, что у вас есть функция primitiveMultiply, которая в 20 % случаев умножает два числа, а в остальных 80 % случаев возникает исключение типа MultiplicatorUnitFailure. Напишите функцию, оборачивающую эту неуклюжую функцию и просто продолжающую попытки до тех пор, пока вызов не завершится успешно, после чего возвращающую результат.
Убедитесь, что вы обрабатываете только те исключения, которые рассчитываете обработать.
*/

class calcError extends Error {}

function primitiveMultiply(a, b){
	try {
		const chance = Math.floor(Math.random() * 100) + 1;
		if(chance <= 20) {
			return a * b;
		} else {
			throw new calcError();
		}
	} catch (e) {
		if(e instanceof calcError){
			console.log('80%');
			return primitiveMultiply(a, b);
		} else throw e;
		
	}
}

console.log(primitiveMultiply(2, 3));
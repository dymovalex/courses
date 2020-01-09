/*Ранее в этой главе я упоминал, что объект hasOwnProperty можно использовать как более надежную альтернативу
оператору in, если мы хотим проигнорировать свойства прототипа. Но что, если нужно включить в словарь
слово hasOwnProperty? Тогда вы больше не сможете вызывать этот метод,
поскольку его значение будет скрыто за собственным свойством объекта.
Можете ли вы придумать способ вызова hasOwnProperty для объекта, у которого есть собственное свойство с таким именем?
*/

let hasOwnProperty = Symbol("hasOwnProperty");
let map = {
	one: true,
	two: true,
	[hasOwnProperty]: 'falsy',
}

console.log(map.hasOwnProperty("one"));
console.log(map[hasOwnProperty]);

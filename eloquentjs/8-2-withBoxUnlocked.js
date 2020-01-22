/*
Это ящик с замком. В ящике есть массив, но его можно получить, только если отпереть ящик. Прямой доступ к частному свойству _content запрещен.

Напишите функцию withBoxUnlocked, которая принимает в качестве аргумента функциональное значение, отпирает ящик, запускает функцию, а затем гарантирует, что прежде, чем завершить работу, ящик снова будет заперт независимо от того, возвратила функция-аргумент нормальный результат или вызвала исключение.

Если хотите заработать дополнительные баллы, убедитесь, что при вызове withBoxUnlocked, когда ящик уже открыт, он остается открытым.
*/

const box = {
	locked: true,
	unlock() { this.locked = false; },
	lock() { this.locked = true; },
	_content: [],
	get content() {
		if (this.locked) throw new Error("Locked!");
		return this._content;
	}
};

function withBoxUnlocked (body) {
	if(!box.locked){
		return body();
	}
	box.unlock();
	try {
		return body();
	} finally {
		box.lock();
	}
}

try {
	withBoxUnlocked(function(){
		throw new Error('Pirates on the horizon! Abort!');
	});
} catch(e){
	console.log('Error raised: ' + e);
}


withBoxUnlocked(function(){
	box.content.push('gold piece');
});

console.log(box.locked); // -> true
function spinalCase(str) {
	const reg = /[_|\s]|(?=[A-Z])/g;
	let spinalStr = '';
	spinalStr = str.split(reg).join('-').toLowerCase();
	return spinalStr;
}

console.log(spinalCase('This Is Spinal Case'));
console.log(spinalCase('This_Is_Spinal_Case'));
console.log(spinalCase('ThisIs_SpinalCase'));
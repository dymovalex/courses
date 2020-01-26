//1. car и cat.
const regExp1 = /ca[rt]/;

console.group('1. car и cat.');
console.log('car', regExp1.test('car'));
console.log('cat', regExp1.test('cat'));
console.log('cab', regExp1.test('cab'));
console.groupEnd('1. car и cat.');

//2. pop и prop.
const regExp2 = /pr?op/;

console.group('2. pop и prop.');
console.log('pop', regExp2.test('pop'));
console.log('prop', regExp2.test('prop'));
console.log('prp', regExp2.test('prp'));
console.groupEnd('2. pop и prop.');

//3. ferret, ferry и ferrari.
const regExp3 = /ferr(et|y|ari)/;

console.group('3. ferret, ferry и ferrari.');
console.log('ferret', regExp3.test('ferret'));
console.log('ferry', regExp3.test('ferry'));
console.log('ferrari', regExp3.test('ferrari'));
console.log('ferr', regExp3.test('ferr'));
console.groupEnd('3. ferret, ferry и ferrari.');

//4. Любое слово, оканчивающееся на ious.
const regExp4 = /ious$\b/;

console.group('4. Любое слово, оканчивающееся на ious.');
console.log('curious', regExp4.test('curious'));
console.log('glorious', regExp4.test('glorious'));
console.log('prius', regExp4.test('prius'));
console.groupEnd('4. Любое слово, оканчивающееся на ious.');

//5. Пробельный символ, за которым следуют точка, запятая, двоеточие или
//точка с запятой.

const regExp5 = /\s[.,:;]{1}/;

console.group('5. Пробельный символ, за которым следуют точка, запятая, двоеточие или точка с запятой.');
console.log('tab.', regExp5.test('	.'));
console.log('space,', regExp5.test(' ,'));
console.log('tab:', regExp5.test('	:'));
console.log('space;', regExp5.test(' ;'));
console.log('!', regExp5.test('!'));
console.log('.tab', regExp5.test('.tab'));
console.groupEnd('5. Пробельный символ, за которым следуют точка, запятая, двоеточие или точка с запятой.');

//6. Слово длиннее шести букв.
const regExp6 = /\D{6,}/;

console.group('6. Слово длиннее шести букв.');
console.log('sixSix', regExp6.test('sixSix'));
console.log('moreThenSixLetters', regExp6.test('moreThenSixLetters'));
console.log('less', regExp6.test('less'));
console.log('666666', regExp6.test('666666'));
console.groupEnd('6. Слово длиннее шести букв.');

//7. Слово без буквы е (или Е).
const regExp7 = /\b[^e]+\b/i;

console.group('7. Слово без буквы е (или Е).');
console.log('no', regExp7.test('no'));
console.log('nope', regExp7.test('nope'));
console.groupEnd('7. Слово без буквы е (или Е).');
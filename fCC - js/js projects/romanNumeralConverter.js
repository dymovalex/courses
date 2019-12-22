function convertToRoman(num){
	let romanNumbers = ["I", "V", "X", "L", "C", "D", "M"];
	let answer = "";
	num = num.toString();

	for (let i = num.length - 1, j = 0, k = 1; i >= 0; i--, j+=2, k++) {
		if(k == 4){
			index = num.slice(0, num.length - k + 1);
			if(index <= 1000){
				for (let i = 1; i <= index; i++) {
				answer = `${romanNumbers[6]}` + answer;
				}
				return answer;
			} else {
				return "Number is too big!";
			}
			
		} else {
			switch(num[num.length - k]){
			case "3": {answer = `${romanNumbers[j]}` + answer};
			case "2": {answer = `${romanNumbers[j]}` + answer};
			case "1": {answer = `${romanNumbers[j]}` + answer};
			break;
			case "4": {answer = `${romanNumbers[j]}${romanNumbers[j+1]}` + answer};
			break;
			case "8": {answer = `${romanNumbers[j]}` + answer};
			case "7": {answer = `${romanNumbers[j]}` + answer};
			case "6": {answer = `${romanNumbers[j]}` + answer};
			case "5": {answer = `${romanNumbers[j+1]}` + answer};
			break;
			case "9": {answer = `${romanNumbers[j]}${romanNumbers[j+2]}` + answer};
			break;
			case "0": answer;
			break;
			}
		}
	}	
	return answer;
}

console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));
/*
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/
/*console.log(convertToRoman(0));
console.log(convertToRoman(1));
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(6));
console.log(convertToRoman(7));
console.log(convertToRoman(8));
console.log(convertToRoman(9));
console.log(convertToRoman(10));
console.log(convertToRoman(51));
console.log(convertToRoman(100));
console.log(convertToRoman(521));
console.log(convertToRoman(1984));
console.log(convertToRoman(3984));
console.log(convertToRoman(3999));
console.log(convertToRoman(4000));
console.log(convertToRoman(4001));
console.log(convertToRoman(5001));
console.log(convertToRoman(9001));
console.log(convertToRoman(9999));
console.log(convertToRoman(10001));
console.log(convertToRoman(11001));
console.log(convertToRoman(1000001));
console.log(convertToRoman(1172241));
//console.log(convertToRoman(967848657874));
*/

/*
1 - I
5 - V
10 - X
50 - L
100 - C
500 - D
1000 - M
*/

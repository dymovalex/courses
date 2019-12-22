function palindrome (str){
	let clearStr = str.replace(/[\.,\:/#|\*_\-()\s]/g, "").toLowerCase();
	for(let i = 0; i < Math.floor(clearStr.length/2); i++){
		if (clearStr[i] != clearStr[clearStr.length-1-i]){
			return false;
		}
	}
	return true;
}

console.log(palindrome("eye"));
console.log(palindrome("_ey e#*"));
console.log(palindrome("0_0 (:/-\:) 0-0"));
console.log(palindrome("My age is 0, 0 si ega ym."));
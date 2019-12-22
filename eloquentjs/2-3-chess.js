let str = "";
let size = 32;


for (let i = 0, ind = 0; i < (size+1) * size ; i++) {
	if((i!=size+ind) && (i==0 || !(i%2))){ // чётное
		str = str + " ";
	} else if ((i!=size+ind)&& (i==1 || i%2)){ //нечётное
		str = str + "#";
	} else {
		str = str + "\n";
		ind = ind + size+1;
	}
}

/*
for (let i = 0, ind = 0; i < (size+1) * size ; i++) {
	if(i == size+ind){
		str = str + "\n";
		ind = ind + size + 1;
	} else if(i==0 || !(i%2)){ // чётное
		str = str + " ";
	} else if (i==1 || i%2){ //нечётное
		str = str + "#";
	}
}
*/
console.log(str);

/*
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/
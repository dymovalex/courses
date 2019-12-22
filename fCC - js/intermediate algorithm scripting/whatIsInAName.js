function whatIsInAName(collection, source) {
	/*var arr = [];
		for (let element in collection){
			//console.log(collection[element]);
			for (let prop in source){
				//console.log(collection[element][i]);
				if(collection[element].hasOwnProperty(prop) && collection[element][prop] === source[prop]){
					arr.push(collection[element]);
				}
			}
		}
	return arr;
}*/


var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

const array = [{first: "Romeo", last: "Montague"},
				{first: "Mercutio", last: null},
				{first: "Tibalt", last: "Capulet"}];

console.log(whatIsInAName(array, {last: "Capulet"}));
//whatIsInAName(array);
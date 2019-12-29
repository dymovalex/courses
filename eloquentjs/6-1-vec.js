/*
Напишите класс Vec, который представляет вектор в двумерном пространстве.
Вектор принимает параметры x и y (числа) и сохраняет их в свойствах
с тем же именем.
Напишите для прототипа Vec два метода, plus и minus, которые принимают
в качестве параметра другой вектор и возвращают новый вектор, представляющий
собой сумму или разность значений x и y для двух векторов (this
и параметра).
Добавьте в прототип свойство-геттер length, которое вычисляет длину
вектора — расстояние от точки (x, y) до начала координат (0, 0).
*/

class Vec {
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
	plus(a, b){
		return [this.x + a, this.y + b];
	}
	minus(a, b){
		return [this.x - a, this.y - b];
	}
	get length(){
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
}

let myVec = new Vec (10, 16);
console.log(myVec.plus(10, 4));
console.log(myVec.minus(16, 26));
console.log(myVec.length);
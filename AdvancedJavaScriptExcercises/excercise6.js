//Evaluate these:
//#1
[2] === [2]
//ANSWER
//false
{} === {}
//ANSWER
//false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4 
const object2 = object1;  //4
const object3 = object2;  //4
const object4 = { a: 5};  //5
object1.a = 4;            


//#3 create two classes: an Animal class and a Mamal class. 
//ANSWER
class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.type = type;
		this.color = color;
	}
};
class Mamal {
	constructor(type, age) {
		this.type = type;
		this.age = age;
	}
}

// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
//ANSWER
class Cow extends Animal {
	constructor(name, type, age) {
		super(name, type, age);
	}
	sound() {
		console.log(`Moooo, my name is ${this.name}, I am a ${this.type} cow, and I am ${this.color} in color.`);
	}
}

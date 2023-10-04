console.log("Hello Objects!");

function Question(title, questionText) {
	
}

function Animal(type, name, color, sound) {
	this.type = type;
	this.name = name;
	this.color = color;
	this.sound = sound;
	this.vocalize = function() {
		console.log("The " + this.color + " " + this.type + " named " 
			+ this.name + " says " + this.sound + ".");
	};
}

function Dog(name, color) {
	// this.Animal = Animal;
	// this.Animal("dog", name, color, "woof");
	Animal.call(this, "dog", name, color, "woof");
	this.pet = function() { console.log(this.name + " loves you back."); };
}

function Cat(name, color) {
	Animal.call(this, "cat", name, color, "meow");
	this.pet = function() { console.log(this.name + " pretends not to love you back."); };
}


function Bird(name, color) {
	Animal.call(this, "bird", name, color, "tweet");
	this.pet = function() { console.log(this.name + " pecks you."); };
}

function Lizard(name, color) {
	Animal.call(this, "lizard", name, color, "hiss");
	this.pet = function() { console.log(this.name + " bites.") };
}

var pets = [
	new Dog("Spot", "white with black spots"),
	new Cat("Maki", "Tabby"),
	new Cat("Retsina", "calico-torbie"),
	new Dog("Kate", "blue merle"),
	new Bird("Alphie", "green"),
	new Bird("Beauregard", "blue"),
	new Lizard("Jeremy", "green")
];


for (var i = 0; i < pets.length; i++) {
	pets[i].vocalize();
	pets[i].pet();
}
/* Private class member demo */

class Greet {
	#name = 'World';  get name() {
		return this.#name;
	}  
	set name(name) {
		this.#name = name;
	}  
	sayHello() {
		console.log(`Hello, ${this.#name}`);
	}
}

const greet = new Greet();
greet.sayHello();

// console.log(greet.#name); // Syntax error
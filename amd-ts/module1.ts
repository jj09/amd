import m2 = require('module2');
import NewModule = require('NewModule');

export function hello() {
	console.log("Hello from Module1");
	console.log("Calling Module2 from Module 1: START");
	m2.hello();
	console.log("Calling Module2 from Module 1: END");
	console.log("Calling NewModule from Module 1: START");
	console.log("2 + 2 = " + NewModule.add(2,2));
	console.log("Calling NewModule from Module 1: END");
}

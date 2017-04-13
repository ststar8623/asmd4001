const subtract = require('./subtract.js');
let array1 = [5, 7];
let array2 = [-5, -7];
let array3 = [5, -7];

class TestSuite {
	runTest(testName){
		const result = this[testName]();
		console.log(result, testName);
	}

	runTests(){
		Object.getOwnPropertyNames(Object.getPrototypeOf(this))
			.filter(prop => this[prop] instanceof Function)
			.filter(prop => prop.indexOf('test') !== -1)
			.forEach(testName => this.runTest(testName))
	}

	assertEquals(a,b){
		return a === b;
	}

	testSubtractPositiveNumbers(){
		return this.assertEquals(subtract(array1), -2);
	}

	testSubtractNegativeNumbers(){
		return this.assertEquals(subtract(array2), 2);
	}

	testSubtractPositiveAndNegativeNumber(){
		return this.assertEquals(subtract(array3), 12);
	}
}

const testSuite = new TestSuite();
testSuite.runTests();
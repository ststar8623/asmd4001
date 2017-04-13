const add = require('./add.js');
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

	assertEquals(a, b){
		return a === b;
	}

	testAddPositiveNumbers(){
		return this.assertEquals(add(array1), 12);
	}

	testAddNegativeNumbers(){
		return this.assertEquals(add(array2), -12);
	}

	testAddPositiveAndNegativeNumber(){
		return this.assertEquals(add(array3), -2);
	}
}

const testSuite = new TestSuite();
testSuite.runTests();
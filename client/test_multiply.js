const multiply = require('./multiply.js');
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

	testMultiplyPositiveNumbers(){
		return this.assertEquals(multiply(array1), 35);
	}

	testMultiplyNegativeNumbers(){
		return this.assertEquals(multiply(array2), 35);
	}

	testMultiplyPositiveAndNegativeNumber(){
		return this.assertEquals(multiply(array3), -35);
	}
}

const testSuite = new TestSuite();
testSuite.runTests();
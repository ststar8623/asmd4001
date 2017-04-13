const divide = require('./divide.js');
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

	testDividePositiveNumbers(){
		return this.assertEquals(divide(array1), 0.7142857142857143)
	}

	testDivideNegativeNumbers(){
		return this.assertEquals(divide(array2), 0.7142857142857143)
	}

	testDividePositiveAndNegativeNumber(){
		return this.assertEquals(divide(array3), -0.7142857142857143)
	}
}

const testSuite = new TestSuite();
testSuite.runTests();
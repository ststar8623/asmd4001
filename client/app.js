const add = require('./add.js');
const subtract = require('./subtract.js');
const multiply = require ('./multiply.js');
const divide = require('./divide.js');

class ViewManager {
	connectEventHandlers(){
		document.getElementById('form-add').addEventListener('submit', this.adding.bind(this));
		document.getElementById('form-subtract').addEventListener('submit', this.subtracting.bind(this));
		document.getElementById('form-multiply').addEventListener('submit', this.multiplying.bind(this));
		document.getElementById('form-divide').addEventListener('submit', this.dividing.bind(this));
		document.getElementById('new-factor').addEventListener('submit', this.newFactor.bind(this));
	}

	newFactor(event){
		// block form from actually submitting
		event.preventDefault();

		let div = document.createElement('div');
		let input = document.createElement('input');
		input.type = 'text';
		input.autocomplete = 'off';
		div.append(input);

		document.getElementById('form-numbers').append(div);

	}

	collectElement(){
		let element = document.getElementsByTagName('input');
		let array = [];
		for(let i = 0; i < element.length; i++){
			array.push(element[i].value);
		}
		return array;
	}

	adding(event){
		event.preventDefault();
		let array = this.collectElement();
		const sum = add(array);
		this.renderSum(sum);
	}

	subtracting(event){
		event.preventDefault();
		let array = this.collectElement();
		const sum = subtract(array);
		this.renderSum(sum);
	}

	multiplying(event){
		event.preventDefault();
		let array = this.collectElement();
		const sum = multiply(array);
		this.renderSum(sum);
	}

	dividing(event){
		event.preventDefault();
		let array = this.collectElement();
		const sum = divide(array);
		this.renderSum(sum);
	}

	renderSum(sum){
		document.querySelector('.sum').textContent = sum;
	}


}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
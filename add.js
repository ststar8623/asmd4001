const add = function(array){
	return array.reduce(function(a,b){
		return a + b;
	})
}

module.exports = add;
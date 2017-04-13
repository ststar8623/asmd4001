const add = function(array){
	return array.reduce(function(a,b){
		return parseInt(a) + parseInt(b);
	})
}

module.exports = add;
const repeatString = function(str, num) {
	if (num < 0) { return "ERROR" }
	let result = ''
	for (let count = 0; count < num; count++) {
		result += str
	}
	return result
};

// Do not edit below this line
module.exports = repeatString;

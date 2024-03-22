const sumAll = function(start, end) {
	if (start < 0 || end < 0 || !checkIfNum(start) || !checkIfNum(end)) {
		return "ERROR"
	}

	let sum = 0

	if (start > end) {
		end = [start, start = end][0]
	}

	while (start <= end) {
		sum += start
		start++
	}
	return sum
};

function checkIfNum(value) {
	return typeof value === 'number'
}

// Do not edit below this line
module.exports = sumAll;

const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(nums) {
	let sum = nums.reduce (function (acc, currentValue) {
		return acc + currentValue}, 0);
	return Number(sum)
};

const multiply = function(nums) {
	let result = nums.reduce (function (acc, currentValue) {
		return acc * currentValue}, 1);
	return result
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
	let product = 1
	let counter = 1

	while (counter <= num) {
		product *= counter
		counter += 1
	}
	return product
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

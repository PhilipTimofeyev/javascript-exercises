const removeFromArray = function(arr, ...elements) {
	return arr.filter(identifyElement, elements)
};

function identifyElement(currentItem, ind, arr) {
	return !this.includes(currentItem)
}
// Do not edit below this line
module.exports = removeFromArray;

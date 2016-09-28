function qSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let pivot = arr.shift();
	let left = arr.filter(element => {
		return element <= pivot;
	});
	let right = arr.filter(element => {
		return element > pivot;
	})
	return qSort(left).concat(pivot,qSort(right));
}


module.exports = qSort;
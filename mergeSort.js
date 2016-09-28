
function merge(arrLeft,arrRight) {
	let mergedArr = [];
	let lastPush;
	let smaller;
	if(arrLeft[arrLeft.length -1] > arrRight[arrRight.length -1]) {
		lastPush = arrLeft;
		smaller = arrRight;
	} else {
		lastPush = arrRight;
		smaller = arrLeft;
	}

	while (smaller.length > 0){
		if(arrRight[0]> arrLeft[0]) {
			mergedArr.push(arrLeft.shift());
		} else {
			mergedArr.push(arrRight.shift());
		}
	}
	mergedArr = mergedArr.concat(lastPush);
	return mergedArr;
}

function mergeSort(arr) {
	if(arr.length === 2) {
		if(arr[0]>arr[1]) {
			return arr.slice(1).concat(arr[0]);
		} else {
			return arr;
		}
	}
	if(arr.length === 1) {
		return arr;
	}

	let left = arr.slice(0,Math.round(arr.length/2));
	let right = arr.slice(Math.round(arr.length/2));

	let mergedLeft= mergeSort(left);
	let mergedRight= mergeSort(right);
	return merge(mergedLeft,mergedRight);
}

module.exports = mergeSort;
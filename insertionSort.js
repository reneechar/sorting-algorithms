function insertionSort(arr) {
	let sortedArr = [arr.shift()];
	let j = sortedArr.length - 1;
	while(arr.length>0) {
		if(arr[0] > sortedArr[j]) {
			sortedArr.splice(j+1,0,arr.shift());
			j = sortedArr.length -1;
		} else {
			if(sortedArr.slice(0,j).length > 0) {
				j--;	
			} else {
				sortedArr.unshift(arr.shift());
				j = sortedArr.length - 1;
			}
		}
	}
	return sortedArr;
}


module.exports = insertionSort;
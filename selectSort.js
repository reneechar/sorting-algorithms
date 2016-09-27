function selectSort(arr) {
	let sorted = [];
	let smallest = arr[0];
	let index = 0;
	let count = 0;

	while(arr.length > 0 ){
		for (var i = 0; i < arr.length; i++) {
			if(arr[i] < smallest) {
				smallest = arr[i];
				index = i;
			}
		}

		sorted.push(arr[index]);
		arr.splice(index,1);
		smallest = arr[0];
		index = 0;
	}
	return sorted;
}


module.exports = selectSort;
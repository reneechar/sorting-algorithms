function compare(a,b) {
	if (a - b > 0) {
		return true;
	} else {
	return false;
	}
}

function bubSort(arr) {
	let swaps = 1;
	let sortedArr = arr;
	while(swaps > 0) {
		swaps = 0;
		sortedArr = sortedArr.reduce((newArr, num) => {
			if (newArr.length ===0) {
				newArr.push(num);
				return newArr;
			} else {
				if (compare(newArr[newArr.length-1],num)) {
					swaps++;
					let biggerNum = newArr[newArr.length -1];
					newArr[newArr.length -1] = num;
					newArr.push(biggerNum);
					return newArr;
				} else {
					newArr.push(num);
					return newArr;
				}
			}	
		},[]);
	}
	return sortedArr;
}

module.exports = bubSort;
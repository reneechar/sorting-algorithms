//Sorting Algorithms

//bubbleSort
let index = 0;

function bubSortOneSwap(unsortedArr,startIndex) {
	let arrayAfterOneSwap = unsortedArr.map(element => {
		return element;
	});

	for (var i = startIndex; i < arrayAfterOneSwap.length - 1; i++) {
		if (arrayAfterOneSwap[i] > arrayAfterOneSwap[i+1]){

			let big = arrayAfterOneSwap[i];
			arrayAfterOneSwap[i] = arrayAfterOneSwap[i+1];
			arrayAfterOneSwap[i+1] = big;
			return [arrayAfterOneSwap,i+1];
		}
	}
	return false;
}

function isSorted(arr) {
	if(bubSortOneSwap(arr, 0)) {
		return false;
	} else {
		return true;
	}
}


//insertionSort - generator

function* insertionSort(arr) {
	let sortedArr = [arr.shift()];
	let j = sortedArr.length - 1;
	while(arr.length>0) {
		if(arr[0] > sortedArr[j]) {
			sortedArr.splice(j+1,0,arr.shift());
			if(j+1 === sortedArr.length - 1) {
				j = sortedArr.length -1;
				//do not return a snap shot when you append the right unsorted arr to the left far right end since it wouldn't look like it moved
			} else {
				j = sortedArr.length -1;
				yield [sortedArr.concat(arr),sortedArr.length];
			}
		} else {
			if(sortedArr.slice(0,j).length > 0) {
				j--;	
			} else {
				sortedArr.unshift(arr.shift());
				j = sortedArr.length - 1;
				yield [sortedArr.concat(arr),sortedArr.length];
			}
		}
	}
	yield sortedArr;
}

//selectionSort - generator

function* selectSort(arr) {
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
		yield sorted.concat(arr);
		smallest = arr[0];
		index = 0;
	}
	return sorted;
}



let heightArr = createUniqueBars();
console.log('initial heightArr',heightArr)

//DOM elements

let buttonBar = document.getElementById('buttonBar');
let displayBox = document.getElementById('displayBox');

let bubButton = document.createElement('button');
bubButton.id = 'bubble';
bubButton.innerHTML = 'Bubble Sort';
bubButton.style.margin = 'auto';
buttonBar.appendChild(bubButton);

let insertButton = document.createElement('button');
insertButton.id = 'insert';
insertButton.innerHTML = 'Insertion Sort';
insertButton.style.margin = 'auto';
buttonBar.appendChild(insertButton);

let selectButton = document.createElement('button');
selectButton.id = 'select';
selectButton.innerHTML = 'Selection Sort';
selectButton.style.margin = 'auto';
buttonBar.appendChild(selectButton);

let resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset';
resetButton.id = 'reset';
resetButton.style.margin = 'auto';
buttonBar.appendChild(resetButton);


reset.addEventListener('click',()=> {
	while(displayBox.firstChild) {
		displayBox.removeChild(displayBox.firstChild);
	}
	heightArr = createUniqueBars();

	for (var i = 0; i < heightArr.length; i++) {
		let bar = document.createElement('div');
		bar.style.height = heightArr[i] + 'px';
		bar.style.width = '40px';
		bar.id = i + ''; 
		displayBox.appendChild(bar);
	}
});

//initial onload displayBox
for (var i = 0; i < heightArr.length; i++) {
	let bar = document.createElement('div');
	bar.style.height = heightArr[i] +'px';
	bar.style.width = '40px';
	bar.id = i + '' ; 
	displayBox.appendChild(bar);
}

//create randomized array of heights
function createUniqueBars() {
	let initialArrHts = [];
	for (var i = 1; i < 11; i++) {
		initialArrHts.push(i*39);
	}

	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	    return a;
	}
	return shuffle(initialArrHts);
}

//bubSort button event

function resetColors() {
	for (var i = 0; i < heightArr.length; i++) {
		let temp = document.getElementById(i + '');
		temp.style.backgroundColor = 'pink';
	}
}

bubButton.addEventListener('click', () => {
	let bSortTracker = setInterval(() =>{
		resetColors();

		//perform bubble sort here
		if(isSorted(heightArr)) {
			clearInterval(bSortTracker);
		} else {
			let currentPlaceArr = bubSortOneSwap(heightArr,index);

			if(currentPlaceArr === false) {
				index = 0;
				currentPlaceArr = bubSortOneSwap(heightArr,index);
			}
			heightArr = currentPlaceArr[0];
			index = currentPlaceArr[1];
			for (var i = 0; i < heightArr.length; i++) {
				let temp = document.getElementById(i+'');
				temp.style.height = heightArr[i] + 'px';
				if(i === index) {
					temp.style.backgroundColor = 'white';
				}
			}
		}
	},1000);
});

//insertion sort button event

insertButton.addEventListener('click', () => {
	let changingArr = heightArr.map((element) => {
		return element;
	});
	let insertionGenerator = insertionSort(changingArr);
	let sorted;
	let snapShot;
	let iSortTracker = setInterval(() => {
		resetColors();

		sorted = insertionGenerator.next();
		if (sorted.done) {
			clearInterval(iSortTracker);
		} else {
			snapShot = sorted.value;
			for (var i = 0; i < snapShot[0].length; i++) {
				let temp = document.getElementById(i+'');
				temp.style.height = snapShot[0][i] + 'px';
				if(snapShot[1] === i) {
					temp.style.backgroundColor = 'white';
				}
			}
		}
	},1000);
})

//selection sort button event

selectButton.addEventListener('click', () => {
	let changingArr = heightArr.map((element) => {
		return element;
	});

	let selectionGenerator = selectSort(changingArr);
	let snapShot;
	let sSortTracker = setInterval(() => {
		
		snapShot = selectionGenerator.next();
		if(snapShot.done) {
			clearInterval(sSortTracker);
		} else {
			snapShot = snapShot.value;
			for (var i = 0; i < snapShot.length; i++) {
				let temp = document.getElementById(i+'');
				temp.style.height = snapShot[i] + 'px';
			}
		}
	},1000);
})

Quick Sort
	i.
	Lay the numbers down side by side. Pick up the number on the left and put it below the list of numbers. Compare each number in the list and put it on the left if it's smaller and put it on the right if it's bigger. Look at your new smaller lists and do the same thing until you only have a list with one number or no numbers. Then bring up the left numbers up to the number right above it and attach it on the left of the upper number. Bring the right numbers to the number right above it and attach it on the riht side of the upper number. Continue till you reach the top number.

	ii. 
	There are four important parts to quick sorting. The pivot, partitions, recursion, and concatenation. The pivot is always the first element in the data set. You will use the pivot
	to create partitions. Remove the pivot element from the data set and compare the rest of the
	elements in the data set to this pivot element. If it should appear before the pivot element
	in a sorted data set, then move the element to a temporary holding data set called left.
	If it should appear after the pivot element in a sorted data set, then move the element to a 
	temporary holding data set called right. After creating these two separate data sets. Use recursion to once again select a pivot element and partition them according to where they should appear in a sorted data set. You should recurse until you hit the base case, which is when you either pass in an empty data set or a data set with a single element in it. In those cases, you should return the data set. From there you must concat the left data sets to the pivot. Then concat that result with the right data sets. 
	
	iii. 
	Best Case: If the pivot element splits the data set evenly into left and right sub data sets
	Worst Case: If the data set is in ascending or descending order, thus having the pivot element not divide the data set into a smaller sub data sets.

Bubble Sort
	i.
	Your first selected number is always on the far left. Compare the selected number to the number directly on its right. If it is in the right order, change your selected number to the one on the right. If it is not in the right order, swap the numbers and keep the same selected number. Keep track if you made a swap. Continue comparing the selected number to the number directly on its right. When there is no more numbers on the right, check if you made a swap at all. If no swaps were made, the numbers are in order. If there were swaps, then repeat the instructions from the beginning and erase the swaps made. 
	
	ii.
	Start at the first index and compare it to the element directly right of it. If the two elements are already sorted in the order you wish them to appear relative to each other, leave the first index element and now move your selected element to the element directly right of it. If it was not already sorted in the order you wish them to appear, put the right element in the place of the selected element and move the selected element to the index of the directly right element. Now that they have been swapped, continue comparing the selected element to the element directly right of it. When you reach the end of the data set,
	if there were no swaps done in the entire pass through of the data set, then it is sorted and you can return that data set. If not, then you must start at index 0 again and repeat this process until you go through one entire pass of the data set with no swaps.

	iii.
	Best Case: All elements are already sorted and only one pass needs to be done. O(n)
	Worst Case: Elements are in reverse order and needs n passes or n^2 comparison operations 
	O(n^2)

Merge Sort
	i.
	Split the data into left and right halves. Take the left half and split into left and right halves again and do the same for the right half. Continue until you have one or two data elements in a half. Compare the left half to the right half and order them. Then take the ordered set and compare it to another ordered set next to it. Continue until there are no more sets to be compared.
	
	ii.
	Divide the data set to left and right sub data sets based on the original order in which they appear. Continue dividing sub data sets in the same manor until the sub data sets contain one element. Once you've reached the base case, compare the left data set with the right data sets, starting with the beginning indicies of both data sets. Create this merged data set by removing the smaller numbers from the data sets and move the compared elements to the next index of the data set that the smaller number was removed from. When one of the data sets are empty, push the rest of the elements on the other data set into the newly created merged data set. Continue back up the data sets in the same manor until you reach the top data set.

	iii.
	Best Case: When the data set is already sorted and when sub sets are all less than the compared sub set or greater than the compared sub set. 
	Worst Case: Take the sorted array, put the largest number at the beginning and smallest number at the end. Then put the second largest number right before the smallest number and the second smallest number right after the largest number. Continue until you've placed all numbers in the data set and that is the worst case because you will have to do a comparison and you will have to alternate pushing in element from both data sets, so you are never able to push in an already ordered data set into the merged array and concat the other data set to the merged array.

Insertion Sort
	i.
	Make space for an empty sorted list. Remove the first number in the unsorted list and place it in the sorted list. Remove the new first number in the unsorted list and compare it to the last number in the sorted list. Continue going from last number in the sorted list to the first number in the sorted list and place the number where it should appear in the sorted list. Continue until there are no more numbers in the unsorted list and all numbers are in the sorted list.
	ii.
	Your first selected element is the element at index 0 of the data set. Create a new empty sorted data set and push this first element into the sorted data set. Repeat again from the newly shortened unsorted data set and select the first element in the unsorted data set. Start from the most right side of the data set and compare the selected element to see if it should appear right side of the element in the sorted data set. If it should appear on the right, remove that element from the unsorted data set and put it in the sorted data set where it should appear. If it not necessarily should appear on the right, then go to the next element in the sorted data set to the left of the previous compared element. Continue comparing them until you find the place to insert it or you get to the very beginning of the sorted data set. If you get to the beginning, place the element at the beginning of the sorted data set. Continue the process until there are no more elements in the unsorted data set, and all elements have been moved to the sorted data set.

	iii.
	Best Case: data is already in order.
	Worst Case: Unsorted data set is in reversed order of sorted data set


Selection Sort
	i.
	Start from the left of your unsorted list, pick up the number. Compare the number you picked up to the one on the right. If the number in your hand is smaller, continue to the next number on the right. If the number in your hand is bigger, then put down the number where you picked it up from in the list and pick up the smaller number. Continue until you get to the end of the list and take the number in your hand and put it at the end of your sorted list. Then repeat the steps from the beginning on your unsorted list until you have no numbers in your unsorted list and all numbers in your sorted list.

	ii.
	Create a new data set. Go through the entire unsorted data set and find the smallest element. Remove the element from the unsorted data set and put the element into a new sorted data set. Repeat steps to find the smallest element in the unsorted newly shortened data set and once you go through the entire unsorted data set, remove the smallest element from the unsorted data set and put it at the end of the sorted data set. Repeat steps until the unsorted data set has no elements left in it and the sorted data set has all elements in it.

	iii.
	best case = worst case. You always go through the entire unsorted data set to find the smallest number and you always place that smallest number at the end of the sorted data set.
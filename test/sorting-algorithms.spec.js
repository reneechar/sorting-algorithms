const qSort = require('../qSort');
const bubSort = require('../bubSort');
const mergeSort = require('../mergeSort');
const insertionSort = require('../insertionSort');
const selectSort = require('../selectSort');
const Chai = require('chai');
const expect = Chai.expect;
let testArr;
let resultArr;


describe('sorting-algorithms', () => {
	
	describe('qSort()', () =>{
		beforeEach(() => {
			testArr = [5,4,2,1,4];
			resultArr = [1,2,4,4,5];
		});

		it('should sort an array', () => {
			expect(qSort(testArr)).to.deep.equal(resultArr);
		})
		
	});
	describe('bubSort()', () => {
		beforeEach(() => {
			testArr = [5,4,2,1,4];
			resultArr = [1,2,4,4,5];
		});

		it('should sort an array', () => {
			expect(bubSort(testArr)).to.deep.equal(resultArr);
		});
	});

	describe('mergeSort()', () => {
		beforeEach(() => {
			testArr = [5,4,2,1,4,23,1235,4,2,5];
			resultArr = [1,2,2,4,4,4,5,5,23,1235];
		});

		it('should sort an array', () => {
			expect(mergeSort(testArr)).to.deep.equal(resultArr);
		});
	});

	describe('insertionSort()', () => {
		beforeEach(() => {
			testArr = [5,4,2,1,4,23,1235,4,2,5];
			resultArr = [1,2,2,4,4,4,5,5,23,1235];
		});

		it('should sort an array', () => {
			expect(insertionSort(testArr)).to.deep.equal(resultArr);
		});
	})
});
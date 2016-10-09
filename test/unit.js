var expect = require('chai').expect;
var ourModule = require('../index.js');

describe('unit', function() {

	describe('add(a, b)', function() {

		it('should add a and b', function() {

			var actualResult = ourModule.add(1, 2);
			var expectedResult = 3;

			expect(actualResult).to.equal(expectedResult);
		});
	});

	describe('subtract(a, b)', function() {

		it('should subtract a from b', function() {

			var actualResult = ourModule.subtract(1, 2);
			var expectedResult = -1;

			expect(actualResult).to.equal(expectedResult);
		});
	});
});

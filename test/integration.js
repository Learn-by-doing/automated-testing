var expect = require('chai').expect;
var request = require('request');

describe('integration', function() {

	describe('server', function() {

		before(function() {

			require('../server');
		});

		it('should say hello', function(done) {

			var uri = 'http://localhost:3000/';

			request(uri, function(error, response, body) {

				expect(body).to.equal('Hello World!');
				done();
			});
		});
	});
});

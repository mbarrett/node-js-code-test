/*jshint multistr: true */
var assert = require('assert');
var Errors = require('../lib/enums/errors');

describe("Competition controller input parser unit tests", function() {
	var parser;

	beforeEach(function() {
		parser = require('../lib/controllers/parsers/competition');
	});

	it('Should not parse wrong test input', function(done) {
		var input = "";
		parser.create(input, function(err, params) {
			assert.equal(err.message, Errors.InvalidBattleArenaInput);
			done();
		});
	});

	it('Should not parse wrong test input', function(done) {
		var input = "5 \n";
		parser.create(input, function(err, params) {
			assert.equal(err.message, Errors.InvalidBattleArenaInput);
			done();
		});
	});

	it('Should not parse wrong test input', function(done) {
		var input = "5 5";
		parser.create(input, function(err, params) {
			assert.equal(err.message, Errors.InvalidRobotsInput);
			done();
		});
	});

	it('Should not parse wrong test input', function(done) {
		var input = "5 5\n\
			1 2 N\n\
			LMLMLMLMM\n\
			MMRMMRMRRM";
		parser.create(input, function(err, params) {
			assert.equal(err.message, Errors.InvalidRobotsInput);
			done();
		});
	});

	it('Should not parse wrong test input', function(done) {
		var input = "5 5\n\
			1 2 N\n\
			LMLMLMLMM\n\
			3 E\n\
			MMRMMRMRRM";
		parser.create(input, function(err, params) {
			assert.equal(err.message, Errors.InvalidRobotsInput);
			done();
		});
	});

	it('Should parse default test input', function(done) {
		var input = "5 5\n\
			1 2 N\n\
			LMLMLMLMM\n\
			3 3 E\n\
			MMRMMRMRRM";
		parser.create(input, function(err, params) {
			assert.ifError(err);
			assert.equal(params.width, 5);
			assert.equal(params.height, 5);
			assert.equal(params.robots.length, 2);
			assert.equal(params.robots[0].x, 1);
			assert.equal(params.robots[0].y, 2);
			assert.equal(params.robots[0].heading, 'N');
			assert.equal(params.robots[0].movements, 'LMLMLMLMM');
			assert.equal(params.robots[1].x, 3);
			assert.equal(params.robots[1].y, 3);
			assert.equal(params.robots[1].heading, 'E');
			assert.equal(params.robots[1].movements, 'MMRMMRMRRM');
			done();
		});
	});

});


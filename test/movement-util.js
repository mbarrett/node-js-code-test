var assert = require('assert');

describe("Movement util library unit tests", function() {
	var lib;

	beforeEach(function() {
		lib = require('../lib/movement-util');
	});

	describe("Move direction robot unit tests", function() {

		it("Should move to left from E", function() {
			var facing = lib.moveDirectionRobot('E', 'L');
			assert.equal(facing, 'N');
		});

		it("Should move to left from N", function() {
			var facing = lib.moveDirectionRobot('N', 'L');
			assert.equal(facing, 'W');
		});

		it("Should move to left from W", function() {
			var facing = lib.moveDirectionRobot('W', 'L');
			assert.equal(facing, 'S');
		});

		it("Should move to left from S", function() {
			var facing = lib.moveDirectionRobot('S', 'L');
			assert.equal(facing, 'E');
		});

		it("Should move to right from E", function() {
			var facing = lib.moveDirectionRobot('E', 'R');
			assert.equal(facing, 'S');
		});

		it("Should move to right from N", function() {
			var facing = lib.moveDirectionRobot('N', 'R');
			assert.equal(facing, 'E');
		});

		it("Should move to right from W", function() {
			var facing = lib.moveDirectionRobot('W', 'R');
			assert.equal(facing, 'N');
		});

		it("Should move to right from S", function() {
			var facing = lib.moveDirectionRobot('S', 'R');
			assert.equal(facing, 'W');
		});
	});

	describe("Move forward robot in a field 3x3", function() {
		var field;

		beforeEach(function() {
			field = {
				width: 3,
				height: 3,
			};
		});

		it('Should move the robot to the north', function() {
			var position = lib.moveForwardRobot(field, 'N', 1, 1);
			assert.equal(position.x, 1);
			assert.equal(position.y, 2);
		});

		it('Should move the robot to the west', function() {
			var position = lib.moveForwardRobot(field, 'W', 1, 1);
			assert.equal(position.x, 0);
			assert.equal(position.y, 1);
		});

		it('Should move the robot to the south', function() {
			var position = lib.moveForwardRobot(field, 'S', 1, 1);
			assert.equal(position.x, 1);
			assert.equal(position.y, 0);
		});

		it('Should move the robot to the east', function() {
			var position = lib.moveForwardRobot(field, 'E', 1, 1);
			assert.equal(position.x, 2);
			assert.equal(position.y, 1);
		});

	});

});


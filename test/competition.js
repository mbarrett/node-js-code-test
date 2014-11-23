var assert = require('assert');

describe("Battle arena unit tests", function() {
	var model;

	beforeEach(function() {
		model = require('../lib/models/competition');
	});

	describe("Initialize a 5x5 battle arena", function() {

		beforeEach(function() {
			model.initialize(5, 5);
		});

		it('Populate new robot', function() {
			var robotId = model.populateRobot(1, 2, 'N');
			assert.equal(typeof(robotId), "string");
		});

		it('Update robot movements', function() {
			var robotId = model.populateRobot(1, 2, 'N');
			model.updateRobot(robotId, 'L');
			model.updateRobot(robotId, 'M');
			model.updateRobot(robotId, 'L');
			model.updateRobot(robotId, 'M');
			model.updateRobot(robotId, 'L');
			model.updateRobot(robotId, 'M');
			model.updateRobot(robotId, 'L');
			model.updateRobot(robotId, 'M');
			model.updateRobot(robotId, 'M');
			var robot = model.showRobot(robotId);
			assert.equal(robot.x, 1);
			assert.equal(robot.y, 3);
			assert.equal(robot.heading, 'N');
		});

		it('Update robot movements', function() {
			var robotId = model.populateRobot(3, 3, 'E');
			model.updateRobot(robotId, 'M');
			model.updateRobot(robotId, 'M');
			model.updateRobot(robotId, 'R');
			model.updateRobot(robotId, 'M');
			model.updateRobot(robotId, 'M');
			model.updateRobot(robotId, 'R');
			model.updateRobot(robotId, 'M');
			model.updateRobot(robotId, 'R');
			model.updateRobot(robotId, 'R');
			model.updateRobot(robotId, 'M');
			var robot = model.showRobot(robotId);
			assert.equal(robot.x, 5);
			assert.equal(robot.y, 1);
			assert.equal(robot.heading, 'E');
		});

	});

});


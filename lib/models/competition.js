var uuid = require('node-uuid').v4;
var Navigation      = require('../enums/movement').Navigation;
var NavigationModes = require('../enums/movement').NavigationModes;
var movementUtil = require('../movement-util');

exports.initialize = function(width, height) {
	var field = {
		width: width,
		height: height,
	};
	var robots = {};

	exports.populateRobot = function(x, y, heading) {
		var id = uuid();
		robots[id] = {
			x       : x,
			y       : y,
			heading : heading
		};
		return id;
	};

	exports.showRobot = function(id) {
		return robots[id];
	};

	exports.updateRobot = function(id, value) {
		var robot = robots[id];
		var mode = Navigation[value];
		switch (mode) {
			case NavigationModes.Move:
				var res = movementUtil.moveDirectionRobot(robot.heading, value);
				robot.heading = res;
				break;
			case NavigationModes.Forward:
				var position = movementUtil.moveForwardRobot(field, robot.heading, robot.x, robot.y);
				robot.x = position.x;
				robot.y = position.y;
				break;
		}
	};

};


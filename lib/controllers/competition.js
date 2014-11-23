var parser = require('./parsers/competition');

exports.create = function(req, res) {
	parser.create(req.body, function(err, params) {
		if (err) {
			return res.status(500).json(err.toString());
		}
		var battleArena = require('../models/competition');
		var movements = 0;
		battleArena.initialize(params.width, params.height);
		var i, j;
		for (i = 0; i < params.robots.length; i++) {
			var robot = params.robots[i];
			robot.id = battleArena.populateRobot(robot.x, robot.y, robot.heading);
			if (robot.movements.length > movements) {
				movements = robot.movements.length;
			}
		}
		for (i = 0; i < movements; i++) {
			for (j = 0; j < params.robots.length; j++) {
				var robot = params.robots[j];
				if (i < robot.movements.length) {
					battleArena.updateRobot(robot.id, robot.movements[i]);
				}
			}
		}
		res.json(params.robots.map(function(robot) {
			return battleArena.showRobot(robot.id);
		}));
	});
};


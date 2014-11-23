var Errors = require('../../enums/errors');

exports.create = function(body, callback) {
	var params = {};
	var lines = body.split(/(\r\n|\n|\r)/gm);
	if (!lines.length) {
		return callback(new Error(Errors.EmptyInput));
	}
	var battleArena = lines[0].trim().split(' ');
	if (battleArena.length < 2) {
		return callback(new Error(Errors.InvalidBattleArenaInput));
	}
	params.width = Number(battleArena[0]);
	params.height = Number(battleArena[1]);
	lines = lines.slice(1).filter(function(line) {
		return !!line.trim();
	});
	if (!lines.length || lines.length % 2 !== 0) {
		return callback(new Error(Errors.InvalidRobotsInput));
	}
	params.robots = [];
	for (var i = 0; i < lines.length; i++) {
		var robotLine = lines[i].trim().split(' ');
		if (robotLine.length < 3) {
			return callback(new Error(Errors.InvalidRobotsInput));
		}
		var movementsLine = lines[++i];
		params.robots.push({
			x         : Number(robotLine[0]),
			y         : Number(robotLine[1]),
			heading   : robotLine[2],
			movements : movementsLine.trim(),
		});
	}
	callback(null, params);
};


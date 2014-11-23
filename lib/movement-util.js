var Directions = require('./enums/movement').Directions;
var Movements  = require('./enums/movement').Movements;

var gradesToDirections = {};
for (var key in Directions) {
	gradesToDirections[Directions[key]] = key;
}

exports.moveDirectionRobot = function(heading, movement) {
	var facingGrades = Directions[heading] + Movements[movement];
	if (facingGrades < 0) {
		facingGrades = Directions.S;
	}
	if (facingGrades === 360) {
		facingGrades = Directions.E;
	}
	return gradesToDirections[facingGrades];
};

exports.moveForwardRobot = function(field, robotHeading, robotX, robotY) {
	var width = field.width;
	var height = field.height;
	var heading = Directions[robotHeading];
	switch (heading) {
		case Directions.E:
			robotX++;
			break;
		case Directions.N:
			robotY++;
			break;
		case Directions.W:
			robotX--;
			break;
		case Directions.S:
			robotY--;
			break;
	}
	robotX = robotX > width ? width : robotX < 0 ? 0 : robotX;
	robotY = robotY > height ? height : robotY < 0 ? 0 : robotY;
	return {
		x: robotX,
		y: robotY,
	};
};


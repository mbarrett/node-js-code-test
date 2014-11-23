exports.Directions = {
	E: 0,
	N: 90,
	W: 180,
	S: 270,
};

exports.Movements = {
	L: 90,
	R: -90,
};

exports.NavigationModes = {
	Move: 'move robot direction',
	Forward: 'move forwared',
};

exports.Navigation = {
	L: exports.NavigationModes.Move,
	R: exports.NavigationModes.Move,
	M: exports.NavigationModes.Forward,
};



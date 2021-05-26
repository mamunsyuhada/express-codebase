const colors = {
	reset: '\033[0m',
	/* text color */
	black: '\033[30m',
	red: '\033[31m',
	green: '\033[32m',
	yellow: '\033[33m',
	blue: '\033[34m',
	magenta: '\033[35m',
	cyan: '\033[36m',
	white: '\033[37m',
	/* background color */
	blackBg: '\033[40m',
	redBg: '\033[41m',
	greenBg: '\033[42m',
	yellowBg: '\033[43m',
	blueBg: '\033[44m',
	magentaBg: '\033[45m',
	cyanBg: '\033[46m',
	whiteBg: '\033[47m'
};

const success = (ctx, message) => {
	console.log(
		colors.cyanBg,
		`[i][${ctx}]`,
		colors.reset,
		`${message}`,
		colors.reset
	);
};

const info = (ctx, message) => {
	console.log(
		colors.cyanBg,
		`[i][${ctx}]`,
		colors.reset,
		`${message}`,
		colors.reset
	);
};

const error = (ctx, message) => {
	console.error(
		colors.redBg,
		colors.reset,
		` ${message}`,
		colors.reset,
	);
};

const warning = (ctx, message) => {
	console.warn(
		colors.yellowBg,
		`[e][${ctx}]`,
		colors.reset,
		` ${message}`,
		colors.reset
	);
};

module.exports={
	success,
	info,
	error,
	warning,
};
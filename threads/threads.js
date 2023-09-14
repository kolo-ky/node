const factorial = require('./factorial.js');

const compute = array => {
	const arr = [];

	for (let i = 0; i < 100000000; i++) {
		arr.push(i * i);
	}

	return array.map(el => factorial(el));
};

const main = () => {
	performance.mark('start');

	const result = [
		compute([25, 12, 30, 40, 14]),
		compute([30, 1, 22, 14, 22]),
		compute([34, 11, 5, 26, 17]),
		compute([41, 26, 33, 64, 22]),
	];

	console.log(result);

	performance.mark('end');
	performance.measure('main', 'start', 'end');
	console.log(performance.getEntriesByName('main').pop());
};

main();

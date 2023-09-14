const { Worker } = require('worker_threads');

const compute = array => {
	return new Promise((resolve, reject) => {
		const worker = new Worker('./worker.js', {
			workerData: {
				array,
			},
		});

		worker.on('message', msg => {
			resolve(msg);
		});

		worker.on('error', error => {
			reject(error);
		});

		worker.on('exit', () => {
			console.log('Complete');
		});
	});
};

const main = async () => {
	try {
		performance.mark('start');

		const result = await Promise.all([
			compute([25, 12, 30, 40, 14]),
			compute([30, 1, 22, 14, 22]),
			compute([34, 11, 5, 26, 17]),
			compute([41, 26, 33, 64, 22]),
		]);

		console.log(result);

		performance.mark('end');
		performance.measure('main', 'start', 'end');
		console.log(performance.getEntriesByName('main').pop());
	} catch (error) {
		console.log(error.message);
	}
};

main();

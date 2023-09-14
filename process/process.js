const { exec } = require('child_process');

const childProcess = exec('dir', (error, stdout, stderr) => {
	if (error) {
		console.error(`error: ${error.message}`);
	}

	console.log(`stdout ${stdout}`);
	console.error(`stderr ${stderr}`);
});

childProcess.on('exit', code => {
	console.log(`out code ${code}`);
});

const { spawn } = require('child_process');

const childSpawnProcess = spawn('dir');

childSpawnProcess.stdout.on('data', data => {
	console.log(`stdout ${data}`);
});

childSpawnProcess.stderr.on('data', data => {
	console.error(`stderr ${data.message}`);
});

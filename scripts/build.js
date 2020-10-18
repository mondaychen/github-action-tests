const {execSync} = require('child_process');

const cwd = process.cwd();

execSync(`date > output.txt`, {cwd});

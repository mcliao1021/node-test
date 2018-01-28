const uuidv1 = require('uuid/v1');
const md5 = require('md5');

let counter = 0;

setInterval(() => {
	console.log('rate', Math.floor(counter/60), '/s');
	counter = 0;
}, 60000);

function f() {
	md5(uuidv1());
	counter++;
	setImmediate(f);
}

f();

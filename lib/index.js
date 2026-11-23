var colors = require('colors')

function sayHello(who) {
	msg = `Hello from ${who}!`
	return msg.green
}

function grabFlag() {
	msg = `Flag is ${FLAG}`
	return msg.green
}

module.exports = {
	sayHello,grabFlag
}

var assert = require('assert')
const { sayHello } = require('../lib')
const { grabFlag } = require('../lib')

function testWho(who) {
	re = new RegExp(`Hello from ${who}!`)
	assert.match(sayHello(who), re)
}

function testGreen() {
	assert.equal(parseInt(sayHello('test').substring(2, 4)), 32)
}

function testgrabFlag() {
	re = new REgEx(`Flag is ${FLAG}`)
	assert.match(grabFlag(), re)
}

testWho('foo')
testGreen()
testgrabFlag()

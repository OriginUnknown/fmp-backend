const assert = require('chai').assert;
const foo = require('../app').foo;

describe('App', () => {
    it('Should return \'Hello World\'', () => {
        assert.equal(foo(), 'Hello World');
    });
});


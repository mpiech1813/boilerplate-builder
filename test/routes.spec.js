const supertest = require('supertest');
const app = require('../server/server');

const server = supertest(app);

describe('This is a blank test', () => {
  it('should pass', () => {
    expect(1 + 2).toEqual(3);
  });
});

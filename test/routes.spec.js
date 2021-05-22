const supertest = require('supertest');
const app = require('../server/server');

const server = supertest(app);

describe('This is a blank test', () => {
  it('should fail', () => {
    expect(1 + 2).toEqual(4);
  });
});

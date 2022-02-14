const { iteratee } = require('lodash');
const supertest = require('supertest');
const server = require('../server');

const request = supertest(server);

test('/api', async () => {
  const { body } = await request.get('/api').expect(200);
  expect(body.message).toBe('ok');
});

describe('GET /api/somethingunexpected', () => {
  it('400: responds with an error message for bad urlpath', async () => {
    const {body} = await request.get('/api/adsf').expect(400);
    expect(body.msg).toBe('Path not found')
  })
})


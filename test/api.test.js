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

describe('GET /api/recipes', () => {
  it ('200: responds with an array of recipes', async () => {
    const {body} = await request.get('/api/recipes').expect(200)
    expect(body.recipes).toBeInstanceOf(Array)
    expect(body.recipes).toHaveLength(100)
    body.recipes.forEach((recipe) => {
      expect(recipe).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          imageUrl: expect.any(String),
          instructions: expect.any(String)
        })
      )
    })
  })
  it ('400: responds with an error message for incorrect URL path', async () => {
    const {body} = await request.get('/api/recipipis').expect(400)
    expect(body.msg).toBe('Path not found')
  })
})
import request from 'supertest';

import app from '../../app';

describe('GET /api/v1/players', () => {
  it('responds with an array of players', async () => {
    request(app)
      .get('/api/v1/players')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('length');
        expect(response.body.length).toBe(1);
        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('ordinal');
        expect(response.body[0]).toHaveProperty('rank');
        expect(response.body[0]).toHaveProperty('position');
        expect(response.body[0]).toHaveProperty('name');
        expect(response.body[0]).toHaveProperty('bye');
        expect(response.body[0]).toHaveProperty('notes');
      });
  });
});


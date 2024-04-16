const request = require('supertest');

const app = require('./server');

describe('GET /', () => {
  it('devrait retourner le statut 200 OK et un message de bienvenue', async () => {
    
    const response = await request(app).get('/');
    expect(response.status).toBe(200);

    expect(response.text).toBe('Bienvenue sur le serveur Express !');
  });
});

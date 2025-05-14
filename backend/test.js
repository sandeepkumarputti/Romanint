const request = require('supertest');
const express = require('express');
const app = require('./server'); // Assuming server.js exports the app

describe('GET /romannumeral', () => {
  it('should return a valid Roman numeral for a valid input', async () => {
    const response = await request(app).get('/romannumeral?query=10');
    expect(response.status).toBe(200);
    expect(response.body.output).toBe('X');
  });

  it('should return 400 for an invalid input', async () => {
    const response = await request(app).get('/romannumeral?query=4000');
    expect(response.status).toBe(400);
  });

  it('should return 400 for a non-numeric input', async () => {
    const response = await request(app).get('/romannumeral?query=abc');
    expect(response.status).toBe(400);
  });
});

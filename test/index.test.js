'use strict';

const expect = require('chai').expect;
const request = require('supertest');
const index = require('../index.js');

describe('Playstore app', () => {
  it('should return a 200 ok response', () => {
    request(index)
      .get('/apps')
      .expect(200);
  });

  it('should return an array', () => {
    request(index)
      .get('/apps')
      .expect('Content-Type', 'application/json')
      .then(res => {
        expect(res.body).to.be('array');
      });
  });
});

describe('Playstore app query searches', () => {
  it('should sort by rating', () => {
    
  })
})


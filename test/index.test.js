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
    request(index)
      .get('/apps')
      .query({sort: 'Rating'})
      .expect(200)
      .then(res=>{
        let i = 0;
        let sorted = true;
        while (sorted && i < res.body.length - 1){
          sorted = res.body[i].Rating >= res.body[i+1].Rating;
          i++;
        }
        expect(sorted).to.be.true;
      })
  })

  it('should sort by name', () => {
    request(index)
      .get('/apps')
      .query({sort: 'App'})
      .expect(200)
      .then(res=>{
        let i = 0;
        let sorted = true;
        while (sorted && i < res.body.length - 1){
          sorted = res.body[i].App >= res.body[i+1].App;
          i++;
        }
        expect(sorted).to.be.true;
      })
  })

  it('should return results in action genre', ()=>{
    return request(index)
      .get('/apps')
      .query({genre:'Action'})
      .expect(200)
      .then(res=>{
        let i = 0;
        let sorted = true;
        while(sorted && i <res.body.length -1){
          sorted = sorted && res.body[i].Genres.includes('Action');
          i++;
        }
        expect(sorted).to.be.true;
      })
  })

  it('should return results in puzzle genre', ()=>{
    return request(index)
      .get('/apps')
      .query({genre:'Puzzle'})
      .expect(200)
      .then(res=>{
        let i = 0;
        let sorted = true;
        while(sorted && i <res.body.length -1){
          sorted = sorted && res.body[i].Genres.includes('Puzzle');
          i++;
        }
        expect(sorted).to.be.true;
      })
  })

  it('should return results in strategy genre', ()=>{
    return request(index)
      .get('/apps')
      .query({genre:'Strategy'})
      .expect(200)
      .then(res=>{
        let i = 0;
        let sorted = true;
        while(sorted && i <res.body.length -1){
          sorted = sorted && res.body[i].Genres.includes('Strategy');
          i++;
        }
        expect(sorted).to.be.true;
      })
  })

  it('should return results in casual genre', ()=>{
    return request(index)
      .get('/apps')
      .query({genre:'Casual'})
      .expect(200)
      .then(res=>{
        let i = 0;
        let sorted = true;
        while(sorted && i <res.body.length -1){
          sorted = sorted && res.body[i].Genres.includes('Casual');
          i++;
        }
        expect(sorted).to.be.true;
      })
  })

  it('should return results in arcade genre', ()=>{
    return request(index)
      .get('/apps')
      .query({genre:'Arcade'})
      .expect(200)
      .then(res=>{
        let i = 0;
        let sorted = true;
        while(sorted && i <res.body.length -1){
          sorted = sorted && res.body[i].Genres.includes('Arcade');
          i++;
        }
        expect(sorted).to.be.true;
      })
  })

  it('should return results in card genre', ()=>{
    return request(index)
      .get('/apps')
      .query({genre:'Card'})
      .expect(200)
      .then(res=>{
        let i = 0;
        let sorted = true;
        while(sorted && i <res.body.length -1){
          sorted = sorted && res.body[i].Genres.includes('Card');
          i++;
        }
        expect(sorted).to.be.true;
      })
  })
})

describe('Incorrect query searches',()=>{
  it('should return bad request when given incorrect sort parameter',()=>{
    return request(index)
      .get('/apps')
      .query({sort:'Bad Stuff'})
      .expect(400)
  })

  it('should return bad request when given incorrect genre parameter',()=>{
    return request(index)
      .get('/apps')
      .query({genre:'Bad Stuff'})
      .expect(400)
  })
})


/* globals test, expect, beforeEach, afterEach */

(function() {
  
const rq = require('supertest');
const app = require("../index.js");


test('It should response the GET method', (done) => {
  rq(app).get('/').then((response) => {
    expect(response.statusCode).toBe(200);
    done();
  });
});
  
  
test("retrieves coin list from API and stores it in a db", (done) => {

  rq(app).get('/getCoinValues').then((response) => {
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("result");
    expect(Object.keys(response.body.result).length).toBeGreaterThan(1);
    
    let res = response.body.result;
    let first = res[Object.keys(res)[0]];
    expect(first).toHaveProperty("price");
    expect(first.price).toHaveProperty("last");    
    expect(first.price).toHaveProperty("change");    
    expect(first.price.change).toHaveProperty("percentage");    
    
  }).then(() => {
    rq(app).get('/getStoredCoinValues').then((response) => {
      console.log(response.body);
      expect(response.body).toBeTruthy();
      done();
    });
  });
  
});
  
test("get alerts when results"
  
})();
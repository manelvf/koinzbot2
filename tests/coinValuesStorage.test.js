/* globals test, describe, expect, beforeEach, afterEach */

(function() {
  
const coinValuesStorage = require("../coinValuesStorage.js");

let cvs;
  
beforeEach((done) => {
  cvs = new coinValuesStorage(':memory:', () =>{
    done();
  });
});

afterEach(() => {
  cvs = null;
});
  
test("storeCoinValues stores a value", (done) => {
  let values = [
    {src_coin: "BTC", dst_coin: "ETH", exchange: "XMANEL", last: 20.5, percentage: 3.2},
    {src_coin: "USD", dst_coin: "EUR", exchange: "NULLX", last: -2.5, percentage: 0.2}
  ];
  
  cvs.storeCoinValues(values, () => {
    cvs.getCoinValues((storedValues) => {
      
      storedValues.forEach((storedValue) => {
        let found = false;
        
        let filter = (storedValue, value) => {
          return (
            value.src_coin == storedValue.src_coin &&
            value.dst_coin == storedValue.dst_coin &&
            value.exchange == storedValue.exchange &&
            value.last == storedValue.last &&
            value.percentage == storedValue.percentage
          );
        }
        
        values.forEach((value) => {
          if (filter(storedValue, value)) {
            found = true;
          }
        });
        expect(found).toBeTruthy();
      });
      done();
    });
  });
});
  
  
})();
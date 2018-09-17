/* globals test, describe, expect, beforeEach, afterEach */

const Alert = require("../alerts");

(function() {
  
test("get alerts for values that go up to a threshold", () => {
  let values = [
    {src_coin: "BTC", dst_coin: "ETH", exchange: "XMANEL", last: 20.5, percentage: 3.2},
    {src_coin: "USD", dst_coin: "EUR", exchange: "NULLX", last: 2.5, percentage: 0.2},
    {src_coin: "BTC", dst_coin: "ETH", exchange: "XMANEL", last: 20.5, percentage: 0.2},
    {src_coin: "MNR", dst_coin: "IOT", exchange: "NULLX", last: 2.5, percentage: -2}
  ];
  
  let expected = [
    {src_coin: "BTC", dst_coin: "ETH", exchange: "XMANEL", last: 20.5, percentage: 3.2},
    {src_coin: "MNR", dst_coin: "IOT", exchange: "NULLX", last: 2.5, percentage: -2}
  ];
  
  let alert = new Alert(1);
  let alertValues = alert.get(values);
  expect(alertValues).toEqual(expected);
});
  
})();
/* globals test, describe, expect, beforeEach, afterEach */

(function() {
  
const telegramEmitter = require('../telegramEmitter');
  
let te;
  
beforeEach(() => {
  te = new telegramEmitter();
});
  
afterEach(() => {
  te = null;
});
  
test("store user id when user starts the bot", () => {
  
});

  
})();
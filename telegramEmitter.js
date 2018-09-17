(function() {
  
const Telegraf = require('telegraf');

class telegramEmitter {

  constructor() {
    this.bot = new Telegraf(process.env.BOT_TOKEN);
    
    this.bot.on('text', (ctx) => {
      return ctx.reply(`Hello, World`)
    })
  }
  
  
}
  
module.exports = telegramEmitter;
  
})();
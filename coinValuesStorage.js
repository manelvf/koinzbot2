(function() {

var Sequelize = require('sequelize');
  
class coinValuesStorage {

  constructor (storage, callback) {
    storage = storage || ':memory:';
    callback = callback || function() {};
    
    this.sequelize = new Sequelize('database', process.env.DB_USER, process.env.DB_PASS, {
      host: '0.0.0.0',
      dialect: 'sqlite',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      storage: storage,
      operatorsAliases: false
    });
    
    this.Coin = null;
    
    // authenticate with the database
    this.sequelize.authenticate()
        .bind(this)
        .then(function(err) {
          console.log('Connection has been established successfully.');
          // define a new table 'users'
          this.Coin = this.sequelize.define('coin', {
            src_coin: {
              type: Sequelize.STRING
            },
            dst_coin: {
              type: Sequelize.STRING
            },
            exchange: {
              type: Sequelize.STRING
            },
            last: {
              type: Sequelize.DOUBLE
            },
            percentage: {
              type: Sequelize.DOUBLE
            }
          });

          callback();
        })
        .catch(function (err) {
          console.log('Unable to connect to the database: ', err);
          callback();
        });
      
  }
  
  storeCoinValues(values, callback) {
    callback = callback || function() {};
      
    this.Coin.sync({force: true})
      .bind(this)
      .then(() => {
      for (let value of values) {
        this.Coin.create(value);
      }
      callback();
    });
  }
  
  getCoinValues(callback) {
    this.Coin.findAll().then(coins => callback(coins));
  }

}

module.exports = coinValuesStorage;  
  
})();


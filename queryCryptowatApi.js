const queryCryptoApi=require('./queryCryptoApi.js');


class queryCryptowatApi extends queryCryptoApi {

  constructor(baseUrl) {
    
    super(baseUrl);
             
    this.requestOptions = {
      method: 'GET',
      uri: null,
      json: true
    };

  }
  
  getCoinValues(callback) {
    this.__makeRequest(callback, "markets/summaries");
  }
  
}

module.exports = queryCryptowatApi;
(function() {

const rp = require('request-promise');


class queryCryptoApi {
  
  constructor(baseUri) {
    this.baseUri = baseUri;
  }
  
  getCoinValues() {
    throw new Error("Should be implemented");
  }

  __getOptions(uri) {
    console.log("URI", this.baseUri + uri);
    return Object.assign(this.requestOptions, {uri:this.baseUri + uri});
  }
  
  __makeRequest(resultCallback, method) {
    rp(this.__getOptions(method)).then((response) => {
      resultCallback(response);
    }).catch((err) => {
      console.log('API call error:', err.message);
    });
  }

}

module.exports=queryCryptoApi;
  
})();
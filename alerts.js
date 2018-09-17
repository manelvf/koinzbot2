(function() {

class Alerts {
  
  constructor(threshold) {
    this.threshold = threshold;
  }
  
  get(values) {
    let alertValues = [];
    
    values.forEach((value) => {
      if (Math.abs(value.percentage) > this.threshold) {
        alertValues.push(value);
      }
    });
    
    return alertValues;
  }
}

module.exports = Alerts;

})();
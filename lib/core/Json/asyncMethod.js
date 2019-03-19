function asyncMethod(methodName) {
  return function (...args) {
    let result;
    this[methodName].apply(this, [...args, function(res) {
      result = res;
    }]);
    return result;
  }
}

module.exports = asyncMethod;

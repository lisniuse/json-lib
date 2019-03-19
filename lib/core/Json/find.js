function find(conditions, callback) {
  let results = [];
  this._matchEach(conditions, object => {
    results.push(object);
  })
  typeof callback === 'function' ? callback(results) : void(0);
}

module.exports = find;

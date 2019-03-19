function findOne(conditions, callback) {
  this._matchEach(conditions, object => {
    typeof callback === 'function' ? callback(object) : void (0);
    return false;
  })
}

module.exports = findOne;

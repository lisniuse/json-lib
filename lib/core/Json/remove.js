function remove(conditions, callback) {
  let indexs = [];
  this._matchEach(conditions, (object, index) => {
    indexs.push(index);
  });
  if ( indexs.length > 0 ) {
    this._data = this._arrayRemove(this._data, indexs);
  }
  typeof callback === 'function' ? callback(indexs.length) : void(0);
}

module.exports = remove;


function update(conditions, newObject, callback) {
  let indexs = [];
  newObject = newObject || {};
  callback = callback || function() {};
  this._matchEach(conditions, (object, index) => {
    indexs.push(index);
  });
  if ( indexs.length > 0 ) {
    this._data = this._arrayUpdate(this._data, indexs, newObject);
  }
  typeof callback === 'function' ? callback(indexs.length) : void(0);
}

module.exports = update;

function updateOne(conditions, newObject, callback) {
  let index = '';
  this._matchEach(conditions, (object, idx) => {
    index = idx;
    return false;
  });
  if (index !== '') {
    this._data = this._arrayUpdate(this._data, [index], newObject);
  }
  typeof callback === 'function' ? callback(index === '' ? 0 : index) : void (0);
}

module.exports = updateOne;

function removeOne(conditions, callback) {
  let index = '';
  this._matchEach(conditions, (object, idx) => {
    index = idx;
    return false;
  });
  if ( index !== '' ) {
    this._data = this._arrayRemove(this._data, [index]);
  }
  typeof callback === 'function' ? callback(index==='' ? 0 : index) : void(0);
}

module.exports = removeOne;

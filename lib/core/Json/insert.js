function insert(newObject, conditions, position, callback) {
  let index = '';
  let objectIndex = 0;
  newObject = newObject || {};
  callback = callback || function() {};
  position = position || 'after';
  if ( conditions ) {
    this._matchEach(conditions, (object, idx) => {index=idx;return false});
  } else {
    index = 0;
  }
  index = index || 0;
  if ( position === 'before' ) {
    objectIndex = index;
    this._data.splice(index, 0, newObject);
  } else if ( position === 'after' ) {
    objectIndex = index + 1;
    this._data.splice(objectIndex, 0, newObject);
  } else {
    objectIndex = index + 1;
    this._data.splice(objectIndex, 0, newObject);
  }
  typeof callback === 'function' ? callback(objectIndex) : void(0);
}

module.exports = insert;

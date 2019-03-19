function insertMany(newObjects, conditions, position, callback) {
  let index = '';
  let objectIndex = 0;
  newObjects = newObjects || {};
  if (Object.prototype.toString.call(newObjects) === '[object Object]' ) {
    newObjects = [newObjects];
  }
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
    this._data.splice.apply(this._data, [objectIndex, 0].concat(newObjects));
  } else if ( position === 'after' ) {
    objectIndex = index + 1;
    this._data.splice.apply(this._data, [objectIndex, 0].concat(newObjects));
  } else {
    objectIndex = index + 1;
    this._data.splice.apply(this._data, [objectIndex, 0].concat(newObjects));
  }
  typeof callback === 'function' ? callback(Array.from({length: newObjects.length}).map((i,idx) => idx+objectIndex)) : void(0);
}

module.exports = insertMany;

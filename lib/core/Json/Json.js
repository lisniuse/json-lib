const is = require('ispro');
const mixin = require('../../util/mixin');
const asyncMethod = require('./asyncMethod');
const apiFind = require('./find');
const apiFindOne = require('./findOne');
const apiInsert = require('./insert');
const apiInsertMany = require('./insertMany');
const apiRemove = require('./remove');
const apiRemoveOne = require('./removeOne');
const apiUpdate = require('./update');
const apiUpdateOne = require('./updateOne');
const apiCount = require('./count');

class Json {

  constructor(options = {
    data: []
  }) {
    this._data = options.data;
  }

  _matchEach(conditions, callback) {
    for (let index = 0; index < this._data.length; index++) {
      const object = this._data[index];
      if (this._isMatch(conditions, object)) {
        let callbackRes = typeof callback === 'function' ? callback(object, index) : false;
        if (callbackRes === false) {
          break;
        }
      }
    }
    return;
  }

  _isMatch(queryObject, object, isExact = true) {
    let matchCount = 0;
    if (is.empty(queryObject)) {
      return true;
    }
    for (const key in queryObject) {
      if (queryObject.hasOwnProperty(key)) {
        let queryObjectValue = queryObject[key];
        let objectValue = object[key];
        if (queryObjectValue && objectValue) {
          let _queryObjectValue = queryObjectValue + '';
          let _objectValue = objectValue + '';
          if (isExact) {
            if (is.equal(queryObjectValue, objectValue)) {
              matchCount++;
            }
          } else {
            if (_queryObjectValue.indexOf(_objectValue) !== -1) {
              matchCount++;
            }
          }
        }
      }
    }
    return matchCount > 0;
  }

  _arrayRemove(array, indexs) {
    let newArray = []
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (indexs.indexOf(index) === -1) {
        newArray.push(element);
      }
    }
    return newArray;
  }

  _arrayUpdate(array, indexs, newObject) {
    let newArray = []
    newObject = newObject ? newObject : {};
    for (let index = 0; index < array.length; index++) {
      const oldObject = array[index];
      if (indexs.indexOf(index) !== -1) {
        let _object = Object.assign(oldObject, newObject);
        newArray.push(_object);
      } else {
        newArray.push(oldObject);
      }
    }
    return newArray;
  }

}

mixin(Json, "public", "find", apiFind)
  ("public", "findOne", apiFindOne)
  ("public", "insert", apiInsert)
  ("public", "insertMany", apiInsertMany)
  ("public", "remove", apiRemove)
  ("public", "removeOne", apiRemoveOne)
  ("public", "update", apiUpdate)
  ("public", "updateOne", apiUpdateOne)
  ("public", "count", apiCount)
  ("public", "findSync", asyncMethod('find'))
  ("public", "findOneSync", asyncMethod('findOne'))
  ("public", "insertSync", asyncMethod('insert'))
  ("public", "insertManySync", asyncMethod('insert'))
  ("public", "removeSync", asyncMethod('remove'))
  ("public", "removeOneSync", asyncMethod('removeOne'))
  ("public", "updateSync", asyncMethod('update'))
  ("public", "updateOneSync", asyncMethod('updateOne'))
  ("public", "countSync", asyncMethod('count'))

module.exports = Json;

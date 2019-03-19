function toString(options = {
  compression: false
}) {
  if ( options.compression === true ) {
    return JSON.stringify({
      name: this._name,
      data: this._data
    });
  } else {
    return JSON.stringify({
      name: this._name,
      data: this._data
    }, null, 2);
  }
}

module.exports = toString;

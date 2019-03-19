function count(conditions, callback) {
  let length = this.findSync(conditions).length
  typeof callback === 'function' ? callback(length) : void(0);
}

module.exports = count;

const fs = require('fs');

function readJson(path) {
  let content = fs.readFileSync(path, 'utf-8');
  return JSON.parse(content);
}

module.exports = readJson;


const Json = require('../core/Json/Json');
const readJson = require('../core/readJson');

function randomName() {
  return 'anonymou_' + new Date().getTime();
}

function parseData(context) {
  let name = randomName();
  let data = [];
  if ( context instanceof Array ) {
    data = context;
  } else if ( context instanceof String ) {
    let obj = parseData(JSON.parse(context));
    name = obj.name ? obj.name : name;
    data = obj.data ? obj.data : [];
  } else if ( context instanceof Object ) {
    name = context.name ? context.name : name;
    data = context.data ? context.data : [];
  }
  return {
    name,
    data
  }
}

function model(context) {
  let data = {};
  let name = "";
  if ( typeof context === 'object' ) {
    let res = parseData(context);
    data = res.data;
    name = res.name;
  } else {
    try {
      let res = parseData(JSON.parse(context));
      data = res.data;
      name = res.name;
    } catch (e) {
      let res = parseData(readJson(context));
      data = res.data;
      name = res.name;
    }
  }
  return new Json({
    name: name,
    data: data
  });
}

module.exports = model;

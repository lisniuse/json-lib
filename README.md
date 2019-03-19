# json-lib

A json data manipulation class library.

json-lib has a [Mongoose](https://mongoosejs.com/)-like api that is a simplified version of [Mongoose](https://mongoosejs.com/)'s api.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 8.0 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install json-lib
```

## Importing

```javascript
// Using Node.js `require()`
const jsonlib = require('json-lib');

// Using ES6 imports
import jsonlib from 'json-lib';
```

## API

### jsonlib

methods | description | example
---|---|---
model(context: filePath \| JSONstinrg \| JSONObject) | Load json data format | ``let myModel = jsonlib.model('./user.json');`` or ``let myModel = jsonlib.model([{foo: 'bar'}]);``

### model

methods | description | example
---|---|---
find(conditions: object, callback: function): void | Find eligible data, asynchronous method has no return value. | ``myModel.find({'name': /bob/i})`` or ``myModel.find({'name': 'bob'})``
findAsync(conditions: object): array | Find eligible data, return an array | ``myModel.find({'name': /bob/i})`` or ``myModel.findAsync({'name': 'bob'})``
findOne(conditions: object, callback: function): void | Find eligible data, asynchronous method has no return value. | ``myModel.find({'name': /bob/i})`` or ``myModel.findOne({'name': 'bob'})``
findOneAsync(conditions: object): object | Find eligible data, return an object | ``myModel.findOneAsync({'name': /bob/i})`` or ``myModel.find({'name': 'bob'})``
insert(newObject: object, conditions: object, position: string, callback: function): void | Insert a piece of data,  asynchronous method has no return value. | ``myModel.insert({'name': /bob/i})``
insertAsync(newObject: object, conditions: object, position: string): number | Insert a piece of data, Returns the sequence number of the inserted data. | ``myModel.insertAsync({'name': /bob/i})``
insertMany(newObjects: arrayObjects, conditions: object, position: string, callback: function): void | Insert multiple pieces of data,  asynchronous method has no return value. | ``myModel.insertMany({'name': /bob/i})``
insertManyAsync(newObject: arrayObjects, conditions: object, position: string): arrayNumbers | Insert multiple pieces of data, Returns the sequence number of the inserted data. | ``myModel.insertManyAsync({'name': /bob/i})``
remove(conditions: object, callback: function): void | Delete multiple pieces of data, asynchronous method has no return value. | ``myModel.remove({'name': /bob/i})``
removeAsync(conditions: object: arrayNumbers | Delete multiple pieces of data, Return delete quantity | ``myModel.removeAsync({'name': /bob/i})``
removeOne(conditions: object, callback: function): void | Delete a piece of data, asynchronous method has no return value. | ``myModel.removeOne({'name': /bob/i})``
removeOneAsync(conditions: object): number | Remove a piece of data, Return delete quantity | ``myModel.removeOneAsync({'name': /bob/i})``
update(conditions: object, newObject: object, callback: function): void | Update a pieces of data, asynchronous method has no return value. | ``myModel.update({'name': /bob/i}, {'name': 'jack'})``
updateAsync(conditions: object, newObject: object): number | Update a pieces of data, Return update quantity | ``myModel.updateAsync({'name': /bob/i}, {'name': 'jack'})``
updateOne(conditions: object, newObject: object, callback: function): void | Update a piece of data, asynchronous method has no return value. | ``myModel.updateOne({'name': /bob/i}, {'name': 'jack'})``
updateOneAsync(conditions: object, newObject: object): number | Update a piece of data, Return update quantity | ``myModel.updateOneAsync({'name': /bob/i}, {'name': 'jack'})``

## example

```javascript
const jsonlib = require('json-lib');

//Three ways to load json
let myModel = jsonlib.model('./user.json');
let myModel2 = jsonlib.model(`
{
  "name": "user",
  "data": [
    {
      "name": "jack",
      "age": 25,
      "sex": 1,
      "height": 180,
      "weight": 70
    },
    {
      "name": "bob",
      "age": 28,
      "sex": 1,
      "height": 170,
      "weight": 65
    }
  ]
}
`);
let myModel3 = jsonlib.model({
  "name": "user",
  "data": [
    {
      "name": "jack",
      "age": 25,
      "sex": 1,
      "height": 180,
      "weight": 70
    },
    {
      "name": "bob",
      "age": 28,
      "sex": 1,
      "height": 170,
      "weight": 65
    }
  ]
});

console.log('=> insert: tom');
let tom = {
  "name": "tom",
  "age": 35,
  "sex": 1,
  "height": 174,
  "weight": 77
}
myModel.insertSync(tom);
myModel2.insertSync(tom);
myModel3.insertSync(tom);
console.log('=> delete: tom');
myModel.removeSync({'name': 'tom'});
myModel2.removeSync({'name': 'tom'});
myModel3.removeSync({'name': 'tom'});
console.log('=> update: bob');
myModel.updateOneSync({'name': 'bob'}, {"age": 40});
myModel2.updateOneSync({'name': 'bob'}, {"age": 40});
myModel3.updateOneSync({'name': 'bob'}, {"age": 40});
console.log('=> read: bob');
console.log(myModel.findSync({'name': /bob/i}));
console.log(myModel2.findSync({'name': /bob/i}));
console.log(myModel3.findSync({'name': /bob/i}));

```
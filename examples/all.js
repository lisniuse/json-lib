const jsonlib = require('../index');

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

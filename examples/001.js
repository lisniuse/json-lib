const jsonlib = require('../index');

let myModel = jsonlib.model('./user.json');
console.log(myModel.insertManySync([{'name': 'tom'}, {'name': 'tom2'}], null, 'after'));
console.log(myModel.findSync({}));

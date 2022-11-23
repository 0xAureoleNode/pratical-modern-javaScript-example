// 1. Property Value Shorthands
/* 
var name = 'han-aureole';
var email = 'hanaureole@gmail.com';
var age = 25;

var user = { name, email, age };
console.log(user);

var user = { userName: name, email, age };
console.log(user); 
*/

// 2. Computed Property Names
// before
/*
function objectify(key, value) {
  let obj = {};
  obj[key] = value;
  return obj;
}

const ts1 = objectify('name', 'Tyler');
console.log(ts1);
*/

// after
/*
function objectify(key, value) {
  // return { [key]: value };
  return { [key]: value };
}

const ts2 = objectify('name', 'Aureole');
console.log(ts2);
*/

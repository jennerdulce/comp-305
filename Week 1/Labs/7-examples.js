// Blocks

function sayHello(name) {
  console.log(`Hello World! ${name}`);
}

let myName = "Thomas";
sayHello(myName);

function example() {
  var x = 10;
  console.log(`Here is x: ${x}`);
  console.log(`Here is y: ${y}`);
}

var y = 20;
example();
// console.log(x) // Throws error
console.dir(global);
console.dir(global.y);

var globalVar = 10;
var globalLet = 20;
var globalConst = 30;

// Not really const
const obj = {
  school: 'usd'
}
obj.hi = 'hi';
console.log(obj)

const student = Object.freeze({name: 'Alce', scores: [1, 2]});
student.scores[0] = 999;
console.log(student);

// Immutability spread
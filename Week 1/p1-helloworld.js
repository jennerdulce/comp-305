console.log("Hello, World!"); // shared in both environment

let school;
var city; // obselete

typeof school; // undefined
school = "USD";
typeof school; // string
school = "UCSD";
typeof school;
school = `UCLA`; // backtick for template literal
let school2 = `UCLA`; // backtick for template literal

// " and ' matter for where it is embedded

console.log(`I go to ${school} my girlfriend goes to ${school2}`); // template literal; can interpolate values

let expensive = true;
typeof expensive; // boolean;
let tuition = 200000;
typeof tuition; // number;
tuition = tuition * tuition
console.log(tuition);

// alert("Hello, World!"); // did not work because not within a client side environment
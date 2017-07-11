// function add (a, b) {
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Corry'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var personA = ['Andrew', 25];
var personB = ['Jen', 29];
var names = ['Mike','Ben'];
var final = ['Vlad',...names];

function greet(name, age) {
  return (name + ' is ' + age + ' years old');
}

console.log(greet(...personA));
console.log(greet(...personB));

final.forEach((a) => {
  console.log('Hi ' + a);
});

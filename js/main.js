//document.addEventListener('DOMContentLoaded', () => {
console.log('loaded');
// falsey values - false, undefined, 0, null,  "" '' ``, NaN
// (parentheses) [square brackets] {braces}
let x = 0;
if (4 === x) {
  //this will not run if the answer is falsey
  if (1 === x) {
    // both 4 === 4 and 1 === 1 are true
  }
} else if (2 === x) {
  //
} else {
  //this WILL run if the answer is falsey
  //4 !== 4
}
// if(){} else if(){ } else { }
if (4 === 4 && false) {
  //do this if BOTH questions are truthy
}

//ternary
let myAnswer = 4 > 8 ? 'yes1' : 4 > 3 ? 'yes2' : 'no';
//The string "yes2" is put into myAnswer

let myObj = { id: 234, name: 'Fred', age: 0, alive: undefined };
if ('id' in myObj) {
  //there is a property called "id" in myObj
}
if ('email' in myObj) {
  //there is NOT a property called "email" in myObj
}
if (myObj.alive !== undefined && myObj.alive !== null) {
  // ???
}
if (!!myObj.alive !== false) {
  // myObj.alive is not a falsey value
}

myObj.id; //234
myObj['id']; //234
let prop = 'id';
myObj[prop]; //234

let names = ['ekta', 'michel', 'mohsen', 'mitchell', 'kyle'];
for (let i = 0; i < names.length; i++) {
  //loop through the array. i is the counter
  // names[i] - ekta, michel...
  //works for arrays NOT objects
}
for (let i in names) {
  // i is the counter
  // names[i]- ekta, michel...
  //works for objects AND arrays
}
for (let val of names) {
  // val - ekta, michel...
  //works for arrays not objects
}
names.forEach((val) => {
  //val is the same here as in the for of loop
  //only works for Arrays, not objects
});

let newNames = names.map((name, index) => {
  //map returns a new value for each loop
  //map creates a new array from those values
  return {
    id: index,
    name: name.toUpperCase(),
  };
});

let filteredNames = names.filter((name) => {
  //can't change the values of name
  //only decide to keep or discard
  //creates a new array
  return !!Math.round(Math.random()); // pick 0 or 1. convert to Boolean and flip. flip.
  return Boolean(Math.round(Math.random()));
});

let reduced = names.reduce((prev, curr) => {
  if (curr.length > prev) return curr.length;
  return prev;
}, 0);
console.log(reduced);

let fours = names.reduce((prev, curr) => {
  if (curr.length == 4) prev.push(curr);
  return prev;
}, []);
console.log('\n\n\n\n', `\t\t\t\t${reduced}`, '\n\n\n\n');
// });

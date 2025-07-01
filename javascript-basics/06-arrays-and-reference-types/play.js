const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
// hobbies.push('Programming');
// console.log(hobbies);

const copiedArray = hobbies.slice(); //Created a copy of the hobbies array
console.log(copiedArray);

const copiedArray2 = [...hobbies]; //Spread operator pulls all the  elements of the nested array outside
console.log(copiedArray2)

const copiedPerson = {...person};
console.log(copiedPerson)

 // Creates an array based on the args passed in
const toArray = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};
console.log(toArray(1, 2, 3));

/* But what if we want to add more args to the array later? 
  Instead of defining a new function we can use the rest operator*/

// Here we are merging the arguments and the function of it changes on if it's placed in an array or in an argument of a function
const toArrayRest = (...args) => {
  return args;
};

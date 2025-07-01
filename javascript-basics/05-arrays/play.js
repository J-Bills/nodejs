const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const hobbies =['Sports', 'Cooking'];
// for (let hobby of hobbies){
//   console.log(hobby)
// }

// 2 ways to use a function on a map call
console.log(hobbies.map(hobby => {
  return('Hobby_name: ' + hobby);
}));
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// console.log(hobbies)

hobbies.push('Programming');
console.log(hobbies);

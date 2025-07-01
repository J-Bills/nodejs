const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

// Three ways to deconstruct an object
const printName = (pesronData) => {
  console.log(pesronData.name);
};

printName(person);

const printName2 = ({ name }) => {
  console.log(name)
}
printName2(person)

// Deconstructing the properties from the person class and accessing them.
const {name, age} = person;
console.log(name, age);


const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobbies);
console.log(hobby1, hobby2);
// const copiedPerson = { ...person };
// console.log(copiedPerson);

// const hobbies = ['Sports', 'Cooking'];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// // console.log(hobbies);
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//   return args;
// };

// console.log(toArray(1, 2, 3, 4));

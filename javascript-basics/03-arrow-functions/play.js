const name = 'Max'; // Const ensures that we never change these variables.
let age = 29;
const hasHobbies = true;

/* Trying to run the code below with generate an error since we are trying to reassign a const variable*/
// try{
//   name = 'Maximillian' 
// }

// catch(err) {
//   console.log(`message: ${err.message}`)
//   // console.log("Happened because we tried to change a const variable")
// }

age = 30

//Read about the this keyword in JS

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
}

const add = (a, b) => {
  return a+b;
};

//Alternative way to write the add function to have quick one-liners
const alt_add = (a,b) => a+b;

//If you only have one argument then you can just have the argument itself without ()
const add_one = a => a+1;

//Or you can have empty Parenthesis when passing no arguments
const add_random = () => 1+2;

console.log(add(1,2));
console.log(alt_add(1,2));
console.log(add_one(2));
console.log(add_random())
console.log(summarizeUser(name, age, hasHobbies));

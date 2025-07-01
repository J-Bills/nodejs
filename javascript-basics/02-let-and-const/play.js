const name = 'Max'; // Const ensures that we never change these variables.
let age = 29;
const hasHobbies = true;

/* Trying to run the code below with generate an error since we are trying to reassign a const variable*/
try{
  name = 'Maximillian' 
}

catch(err) {
  console.log(`message: ${err.message}`)
  // console.log("Happened because we tried to change a const variable")
}

age = 30

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));

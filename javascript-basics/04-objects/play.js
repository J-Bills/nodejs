const person = {
  name: 'Max',
  age: 29,
  /* Incorrect way to create a function for a class. Shouldn't use arrow
    functions when trying to create a method inside of a class */
  // greet: (person) => {
  //   console.log(`Hi, I am ${this.name}`);
  // }
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

person.greet();



const person2 = {
  name: 'Jamal',
  age: 100,
  greet() {
    return(
      ('Hi, I am ' + this.name)
    );
  }
};

person2.greet(); //print's nothing because we return the string
console.log(person2.greet())
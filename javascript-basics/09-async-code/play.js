const fetchData = ()=> {
    const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Done!');
  }, 1500);
});
return promise;
};

// Because we used a promise we can have multiple async functions stacked, and it's more readable
setTimeout(() => {
  console.log('Timer is done!');
  fetchData()
  .then(text => {
    console.log(text);
    return fetchData();
  })
  .then(text2 => {
    console.log(text2);
  });
}, 2000);

console.log('Hello!');
console.log('Hi!');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

// Setting up body-parser to parse the data that we get from the user
app.use(bodyParser.urlencoded());

// Have to order in this way so that add-product actually gets rendered
app.use('/add-product',(req, res, next) => {
  // console.log('In another middleware!');
  res.send('<form action ="/product" method="POST"><input type ="text" name="title"><button type="submit">Add Product</form>');
});

app.use('/product', (req, res, next) =>{
  console.log(req.body);
});

app.use('/',(req, res, next) => {
  // console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);

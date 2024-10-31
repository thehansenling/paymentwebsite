const express = require('express');
const app = express();
var braintree = require("braintree");
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  const username = 'John Doe'; // Replace with your desired dynamic data


  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: "xk266k93j6gw7ws5",
    publicKey: "zmhx25rhrpjt2jmk",
    privateKey: "e33f9cd16d22531968d07dcf31ba4051"
  });
  var tokenizationKey = "sandbox_rz5z88vn_xk266k93j6gw7ws5"
  gateway.clientToken.generate({
    customerId: ""
  }, (err, response) => {
    console.log(response)
    res.render('home', { username });
  })


  
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
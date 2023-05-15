
// Require Node.js modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an instance of Express
const app = express();

// Use body parser to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup port
const port = process.env.PORT || 3000;

// Set up routes
app.get("/", (req, res) => {
  res.render("form.ejs");
});


var nodemailer = require('nodemailer');
const { request } = require("express");

app.post("/sendpdf", (req, res) => {
  

  var transporter = nodemailer.createTransport({
    service: 'gmail',
     auth: {
      user: 'hr.education4ol@gmail.com',
      pass: 'lwhxbrweilsirofg'
    },
 });

  var mailOptions = {
   from: 'dhavalashru104@gmail.com',
   to: req.body.email,
   subject: 'Thank you for subscribing our newsletter! ',
   text: 'We are super glad that you are our subscriber . We exist to provide a better dining experience and make life at our hostel your home. Food is an integral part of life and we as a committee see to it that the food which reaches the students is of the best quality and hygienic. The committee strives to increase the standards every passing year hopefully . \n\n Here is our link to view and download our Newsletter ="https://drive.google.com/file/d/1GYer2NPo_1P1BaVttE-ylHugO0h2aEqZ/view?usp=share_link".\n\n Check out Menu too ="https://drive.google.com/file/d/1GpXZ246bVtsYNECa5lufbFEX6bhFVPQJ/view?usp=sharing"'
  }
     
        //sending mail
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
            return done(null, false, { message: "Email is invalid" });
          } else {
            console.log('Email sent: ' + info.response);
            return done(null, newUser);
          }
        });

});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
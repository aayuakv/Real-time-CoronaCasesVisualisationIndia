//jshint esversion:6
//read documentation of dotenv module in npm
require('dotenv').config()
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require('express-session')
const passport = require('passport')
//donot install passport-local because it is one of the dependency used by 'passport-local-mongoose' module
const passportLocalMongoose = require('passport-local-mongoose')
//for setup google strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//for configure google strategy we need to require this below module
const findOrCreate = require('mongoose-findorcreate');
const ejs = require("ejs");
//read documentation of 'express-session' 'passport' 'passport-local-mongoose' 'passport-google-oauth20'
// and 'mongoose-findorcreate'

//OAuth is the token based open authorisation by using it we able to access third pieces of information on these
//third party website,information such as emails,contacts etc. and by using oauth our passwords security
// is managed by third party and user authenticated by using websites such as google ,fb,twitter .
//for applying oauth we use developer console and we get client id from console.
//when third party websites auhenticate our user ,then these third party sends the access token to
//ckeck that the registeration is successfull
//now we login with google using passport and google oauth

const app = express();
app.use(express.static(__dirname + "/public"));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

//save user login session
//to use cookies and sessions,session must write code ,read documentation of 'express-session' module
app.use(session({
  secret: 'Our little secret',
  resave: false,
  saveUninitialized: true
}))


//passport initialization,for more information read documentation of passport and passportLocalMongoose
app.use(passport.initialize());

//to tell our app to use passport to also setup our session
app.use(passport.session());





//connect to database name:coronaDB

mongoose.connect("mongodb+srv://admin-aayush:Test123@cluster0.xnizp.mongodb.net/coronaDB", {
  useNewUrlParser: true
});
// mongoose.connect("mongodb://localhost:27017/coronaDB",{useNewUrlParser:true});
mongoose.set("useCreateIndex", true)

// create a schema with encrypt
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  countrycode: String,
  contact: Number,
  city: String,
  firstName: String,
  lastName: String,
  //this below google id is added in database to store information about user of google id
  //google id contains all information without any passwords
  googleId: String,
  fullName:String,
  username:String
});




//in order to use passport local mongoose we have to add it to our mongoose scheme as a plugin
//it is used to hash and salt our passwords and to save our users to mongoDB databases
userSchema.plugin(passportLocalMongoose);


//findOrCreate plugin
userSchema.plugin(findOrCreate);


//create model

const User = new mongoose.model("User", userSchema)

//to create a local strategy to authenticate users using their username and passwords and also to seralize and
//deserialize user
passport.use(User.createStrategy());

//the below serialize and deserialize code is working for all strategies ex-local and google etc.

//serialize and deserializeis only useful when we use sessions
//when we say serialize the user it basically create a cookie  and stuffs with information for
//user identification stored in cookie.
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

//when we say deserialize the user it basically allows passport to broke the cookie and findout the information
//inside the cookie which is who the user is and all their identification,so that we can authenticate user on
// the server.
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


//for configuration of google strategy
//we point out all the options for using the google Strategy to login our user
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL:"http://localhost:3000/auth/google/index",
    // "https://covoid19-stats.herokuapp.com/auth/google/index"
    // "http://localhost:3000/auth/google/index",
    //this below line is compulsory to add because google announces that google+ is sunsetting
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  //this is where google sent back the access token that allows us to get data of the user
  function(accessToken, refreshToken, profile, cb) {

    // console.log(profile);
    //if find the user of that profile id is fine otherwise create the user of that name
    User.findOrCreate({
      username: profile.emails[0].value,
      fullName: profile.displayName,
      googleId: profile.id
    }, function(err, user) {

      return cb(err, user);
    });
  }
));



app.get("/", function(req, res) {
  res.render("home");
});

//authenticate the user using google strategy and we tell the google that we wants user profile this includes
//the email and the user id which we will able to use and identify in future
app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile','email']
  }));


//this get request made by google to redirect user back to our website
app.get('/auth/google/index',
  passport.authenticate('google', {
    failureRedirect: '/login'
  }),
  function(req, res) {
    // Successful authentication, redirect index.
    res.redirect('/index');
  });


app.get("/register", function(req, res) {
  res.render("register");
});


app.get("/login", function(req, res) {
  res.render("login");
});



app.get("/index", function(req, res) {
  //this below code is to check that if user is authenticated then only render the index page otherwise login
  //the user again
  if (req.isAuthenticated()) {
    res.render("index");
  } else {
    res.redirect("/login");
  }



});




//for logout route we use get request
app.get("/logout", function(req, res) {
  //logout() is also provided by the passportLocalMongoose to logout or deauthenticate the user
  req.logout();
  res.redirect("/");
});





app.post("/register", function(req, res) {

  //you will provide username and passworde which you take as input to the user
  //and if there are no errors we successfully authenticate the user
  //register() comes from the passport local mongoose that is used to create new user ,saving user and interact
  //with mongoose directly
  User.register({
    username: req.body.username,
    firstName: req.body.fName,
    lastName: req.body.lName,
    countrycode: req.body.cCode,
    contact: req.body.contact,
    city: req.body.location,
  }, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      //redirect to register page for try again if error
      res.redirect("/register");
    } else {
      passport.authenticate("local")(req, res, function() {
        //if successfully registered then go to index page
        res.redirect("/index");
      });
    }

  });

});




app.post("/login", function(req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  })
  //we use login() that passport gives us if no error founds that it takes us to the index page
  req.login(user, function(err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function() {
        res.redirect("/index");
      });
    }

  })
});






// //get route to send index.html file to browser when browser send request to server index.js
// app.get("/", function(req, res){
//   res.render("index");
// })





app.listen(process.env.PORT || 3000, function() {
  //if we want that our app work on both heroku and local server then use or symbol
  console.log("server is running on port 3000");
})



//cookie gets deleted when we restart the server or press logout button or close the browser

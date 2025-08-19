const express = require('express');
const router = express.Router();
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModule = require('../models/users');
require('dotenv').config();

const verify = (email, password, done)=> {
  UserModule.findByEmail(email, (err, user)=> {
    if(err) {return done(err);}
    if(!user) {return done(null, false);}
    if(!UserModule.verifyPassword(user, password)) {return done(null, false)}
    return done(null, user);
  });
}

const options = {
  usernameField: "username",
  passwordField: "password",
}

passport.use('local', new LocalStrategy(options, verify));

passport.serializeUser((user, cb)=> {
  cb(null, user.id);
});


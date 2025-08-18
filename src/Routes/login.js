const express = require('express');
const router = express.Router();
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModule = require('../models/users');
require('dotenv').config();

const verify = (email, password, done)=> {
  const user = UserModule.findByEmail(email);
}